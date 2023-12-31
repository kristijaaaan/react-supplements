import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  if (cart.length < 1) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart
        {username ? `, ${username[0].toUpperCase() + username.slice(1)}` : ''}
      </h2>

      <ul className="mt-5 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-6 flex w-36 flex-col items-start justify-center gap-3 sm:w-72 sm:flex-row sm:justify-start">
        <Link
          to="/order/new"
          className="inline-block rounded-full bg-sky-300 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:bg-sky-200 disabled:cursor-not-allowed"
        >
          Order now
        </Link>
        <button
          onClick={() => dispatch(clearCart())}
          className="inline-block rounded-full border border-gray-400 bg-transparent px-3 py-2 text-sm font-semibold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:bg-sky-200 disabled:cursor-not-allowed"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
