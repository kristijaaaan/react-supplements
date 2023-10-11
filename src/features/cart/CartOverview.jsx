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
      <span className="text-lg">{totalCartPrice}.00 RSD</span>
    </Link>
  );

  // return (
  //   <div className="flex flex-col items-center px-4 py-4 text-sm uppercase text-gray-700 sm:px-6 md:text-base">
  //     <Link to="/cart" className="flex">
  //       <ImCart />
  //       <span>{totalCartItems}</span>
  //     </Link>
  //     <p className="space-x-4 font-semibold text-gray-700 sm:space-x-6">
  //       <span>{totalCartPrice}.00 RSD</span>
  //     </p>
  //   </div>
  // );
}

export default CartOverview;
