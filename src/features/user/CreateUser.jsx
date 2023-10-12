import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateName } from './userSlice';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username));

    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm font-semibold text-gray-600 md:text-lg">
        👋 Welcome! Enter your full name to start ordering:
      </p>

      <input
        type="text"
        placeholder="ex. Jane Doe"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full rounded-full border-2 border-gray-800 px-4 py-2 font-medium placeholder:font-medium sm:w-80 "
      />

      {/* {username !== '' && (
        <div className="mt-6">
          <Link
            to="menu"
            className="inline-block rounded-full bg-sky-300 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:bg-sky-200 disabled:cursor-not-allowed"
          >
            Start ordering
          </Link>
        </div>
      )} */}
    </form>
  );
}

export default CreateUser;
