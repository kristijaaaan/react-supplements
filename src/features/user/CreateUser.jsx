import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    </form>
  );
}

export default CreateUser;
