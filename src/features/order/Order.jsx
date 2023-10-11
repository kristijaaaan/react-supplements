import { Link, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiShop';
import OrderItem from './OrderItem';

function Order() {
  const [order] = useLoaderData();

  if (!order)
    return (
      <h1 className="mt-6 px-4 py-6 text-xl font-bold">
        Could not find your order! Please try again with different ID
      </h1>
    );

  const { priority, customer, phone, address, cart, id } = order;

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="flex flex-col gap-6 px-4 py-6">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>
      <div className="flex items-center justify-between">
        <span>{priority ? 'PRIORITY ORDER' : 'REGULAR ORDER'}</span>
        <span className="font-semibold">Order #: {id}</span>
      </div>

      <div className="flex flex-col gap-4 bg-gray-200 p-4">
        <span>
          Customers name: <br /> {customer}
        </span>
        <span>
          Customers phone: <br /> {phone}
        </span>
        <span>
          Delivery address: <br /> {address}
        </span>
      </div>

      <ul className="divide-y divide-gray-300 border-b border-t border-gray-300">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="flex flex-col gap-3 bg-gray-200 p-4">
        <span>Cart prize: {totalPrice}.00 RSD</span>
        <span>Priority price: 500.00 RSD</span>
        <span className="text-lg font-semibold">
          Total price: {totalPrice + 500}.00 RSD
        </span>
      </div>
    </div>
  );
}

export default Order;

export async function loader({ params }) {
  const order = await getOrder(params.id);
  return order;
}
