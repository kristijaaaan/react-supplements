import { useSelector } from 'react-redux';
import SearchOrder from '../features/order/SearchOrder';

export default function Header() {
  const username = useSelector((state) => state.user.username);

  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-3 py-3">
      <SearchOrder />

      <p className="hidden text-sm font-semibold uppercase tracking-wider md:block">
        {username}
      </p>
    </header>
  );
}
