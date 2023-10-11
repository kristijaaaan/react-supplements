import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';

function CartItem({ item }) {
  const { id, name, quantity, price } = item;
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col gap-3 py-3">
      <p className="mb-1 text-lg">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-md font-semibold">{price * quantity}.00 RSD</p>
        <Button onClick={() => dispatch(deleteItem(id))}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
