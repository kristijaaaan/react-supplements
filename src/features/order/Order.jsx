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
      <div className="flex items-center justify-between gap-3">
        <span>{priority ? 'PRIORITY ORDER' : 'REGULAR ORDER'}</span>
        <span className="w-28 text-right font-semibold">Order #: {id}</span>
      </div>

      <div className="flex flex-col gap-4 bg-gray-200 p-4">
        <span>
          Customers name: <br />
          <span className="font-semibold">{customer}</span>
        </span>
        <span>
          Customers phone: <br /> <span className="font-semibold">{phone}</span>
        </span>
        <span>
          Delivery address: <br />
          <span className="font-semibold">{address}</span>
        </span>
      </div>

      <ul className="divide-y divide-gray-300 border-b border-t border-gray-300">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="flex flex-col gap-3 bg-gray-200 p-4">
        <span>
          <p>Cart prize:</p>
          <p>{totalPrice}.00 RSD</p>
        </span>
        {priority && (
          <span>
            <p>Priority price:</p>
            <p>500.00 RSD</p>
          </span>
        )}
        <span className="text-lg font-semibold">
          <p>Total price:</p>
          <p>{priority ? totalPrice + 500 : totalPrice}.00 RSD</p>
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
