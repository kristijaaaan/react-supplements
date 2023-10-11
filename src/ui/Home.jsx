import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import { Link } from 'react-router-dom';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-20 flex flex-col gap-10 px-4 text-center">
      <div>
        <h1 className="mb-4 text-3xl font-bold">🧪React Supplements</h1>
        <span className="text-xl font-semibold leading-3 text-sky-400">
          Natural food supplements for professional and recreational athletes.
        </span>
      </div>

      {username !== '' ? (
        <div className="flex flex-col items-center justify-center gap-3">
          <span className="text-lg">You are already registered</span>
          <Link
            to="menu"
            className="inline-block w-48 rounded-full bg-sky-300 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:bg-sky-200 disabled:cursor-not-allowed sm:w-64"
          >
            Continue ordering
          </Link>
        </div>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
