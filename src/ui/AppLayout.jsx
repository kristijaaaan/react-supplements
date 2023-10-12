import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[8rem_1fr] grid-rows-[auto_1fr] sm:grid-cols-[10rem_1fr]">
      <Header />

      <Sidebar />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-6xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
