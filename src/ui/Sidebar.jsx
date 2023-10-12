import { Link } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';

function Sidebar() {
  return (
    <aside className="row-span-full flex flex-col justify-between border-r px-3 py-3">
      <Link to="/" className="text-sm font-bold tracking-widest sm:text-lg">
        🧪 React Supplements
      </Link>

      <CartOverview />
    </aside>
  );
}

export default Sidebar;
