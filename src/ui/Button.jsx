import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, onClick, type }) {
  const base =
    'text-sm inline-block rounded-full bg-sky-300 px-4 py-3 font-semibold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:bg-sky-200 disabled:cursor-not-allowed';

  const small =
    'text-xs inline-block rounded-full bg-sky-300 px-4 py-2 font-semibold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:bg-sky-200 disabled:cursor-not-allowed';

  const clear =
    'text-sm inline-block rounded-full bg-transparent border border-gray-400 px-4 py-3 font-semibold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:bg-sky-200 disabled:cursor-not-allowed';

  if (to)
    return (
      <Link className={base} to={to}>
        {children}
      </Link>
    );

  if (type === 'clear') {
    return (
      <button onClick={onClick} disabled={disabled} className={clear}>
        {children}
      </button>
    );
  }

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={small}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={base}>
      {children}
    </button>
  );
}
