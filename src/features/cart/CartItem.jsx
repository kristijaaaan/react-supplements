import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';

function CartItem({ item }) {
  const { id, name, quantity, price } = item;
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col gap-3 py-4">
      <p className="mb-1 text-xl">
        {quantity} &times; {name}
      </p>
      <div className="flex flex-col items-start justify-between gap-3">
        <p className="text-md font-semibold">{price * quantity}.00 RSD</p>
        <Button onClick={() => dispatch(deleteItem(id))}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
