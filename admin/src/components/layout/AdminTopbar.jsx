import { useMemo, useState } from 'react';
import { FiBell, FiChevronDown, FiCommand, FiLogOut, FiMoon, FiSearch, FiSun } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
import BrandLogo from '@/components/common/BrandLogo';
import { Link } from 'react-router-dom';

const AdminTopbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { logout, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const metrics = useMemo(() => [
    { label: 'Open leads', value: '1,284' },
    { label: 'Active pipeline', value: '₹84.2Cr' }
  ], []);

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="admin-shell flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <BrandLogo variant="icon" className="h-10 w-10" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">MGFINA OS</p>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Control Center</h2>
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {metrics.map(item => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <label className="hidden max-w-sm flex-1 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm lg:flex dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <FiSearch />
            <input className="w-full bg-transparent outline-none" placeholder="Global search leads, loans, banks..." />
          </label>
          <button type="button" className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900" aria-label="Quick actions">
            <FiCommand />
          </button>
          <button type="button" className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900" aria-label="Notifications">
            <FiBell />
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen(v => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-xs font-black text-white">
                {user?.name?.slice(0, 1) ?? 'A'}
              </span>
              <span className="hidden sm:block">{user?.name ?? 'Admin'}</span>
              <FiChevronDown />
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-14 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950">
                <Link to="/settings" className="block px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">Profile settings</Link>
                <Link to="/users" className="block px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">Workspace members</Link>
                <button type="button" onClick={logout} className="flex w-full items-center gap-2 border-t border-slate-200 px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 dark:border-slate-800 dark:hover:bg-slate-900">
                  <FiLogOut />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
