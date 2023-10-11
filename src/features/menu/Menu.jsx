import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../../services/apiShop';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-gray-300 px-4">
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Menu;

export async function loader() {
  const data = getProducts();
  return data;
}
