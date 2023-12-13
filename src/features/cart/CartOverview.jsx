import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartItems, getTotalCartPrice } from './cartSlice';
import { ImCart } from 'react-icons/im';

function CartOverview() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartItems = useSelector(getTotalCartItems);

  if (totalCartItems < 1) return null;

  return (
    <Link
      to="/cart"
      className="mb-3 flex flex-col items-center justify-between"
    >
      <div className="flex items-center justify-center gap-2">
        <ImCart className="text-xl" />
        <span className="text-xl">{totalCartItems}</span>
      </div>
      <span className="text-md">{totalCartPrice}.00 RSD</span>
    </Link>
  );
}

export default CartOverview;
