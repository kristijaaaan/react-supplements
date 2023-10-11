import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;

    navigate(`/order/${query}`);

    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-40 rounded-full bg-sky-300 px-4 py-2 text-sm text-gray-800 placeholder:text-gray-400 sm:w-60"
      />
    </form>
  );
}
