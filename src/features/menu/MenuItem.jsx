import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  addItem,
  getCurrentQuantityById,
} from '../cart/cartSlice';

function MenuItem({ item }) {
  const { id, name, price, description, soldOut, imageUrl } = item;
  const dispatch = useDispatch();
  const currentCartQuantity = useSelector(getCurrentQuantityById(id));

  function handleAddToCart() {
    const newItem = {
      id,
      name,
      price,
      quantity: 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex flex-col items-center gap-4 py-5 sm:flex-row">
      <img
        src={imageUrl}
        alt={name}
        className={`h-28 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex flex-col gap-2.5 sm:w-full">
        <p className="text-md text-center font-medium sm:text-left">{name}</p>
        <p className="text-xs italic text-gray-500">{description}</p>
        <div className="flex flex-col items-center justify-between gap-2">
          {!soldOut ? (
            <p className="text-sm font-semibold">{price}.00 RSD</p>
          ) : (
            <p className="text-sm font-semibold uppercase text-gray-500">
              Sold out
            </p>
          )}

          {currentCartQuantity ? (
            <div>
              <button
                className="inline-block rounded-full bg-sky-300 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:bg-sky-200"
                onClick={() => dispatch(decreaseItemQuantity(id))}
              >
                -
              </button>
              <span className="px-3 py-1.5 font-semibold">
                {currentCartQuantity}
              </span>
              <button
                className="inline-block rounded-full bg-sky-300 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:bg-sky-200"
                onClick={() => dispatch(increaseItemQuantity(id))}
              >
                +
              </button>
            </div>
          ) : null}

          {!soldOut && !currentCartQuantity && (
            <button
              onClick={handleAddToCart}
              className="inline-block rounded-full bg-sky-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:bg-sky-200"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
