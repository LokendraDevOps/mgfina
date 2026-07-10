import { Link, NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Loan Products', '/loan-products'],
  ['Blogs', '/blogs'],
  ['Contact', '/contact']
];

const Navbar = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="page-shell flex items-center justify-between py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          Shree Ashaa Reality
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                [
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            className="inline-flex rounded-full border border-slate-200 p-2 text-slate-700 md:hidden dark:border-slate-800 dark:text-slate-200"
            aria-label="Open navigation"
          >
            <FiMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
