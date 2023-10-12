import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, redirect } from 'react-router-dom';
import { createOrder } from '../../services/apiShop';
import Button from '../../ui/Button';
import store from '../../store';
import { clearCart } from '../cart/cartSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" className="mt-10 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Full Name</label>
          <input
            className="h-9 w-full rounded-full border-2 border-gray-400 px-4"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Phone number</label>
          <div>
            <input
              className="h-9 w-full rounded-full border-2 border-gray-400 px-4"
              type="tel"
              name="phone"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Address</label>
          <div>
            <input
              className="h-9 w-full rounded-full border-2 border-gray-400 px-4"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button>Order now</Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    priority: data.priority === 'on',
    cart: JSON.parse(data.cart),
  };

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder[0].id}`);
}
