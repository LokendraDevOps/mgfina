import { FiMoon, FiSun, FiLogOut } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';

const AdminTopbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { logout } = useAuth();

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="admin-shell flex items-center justify-between py-4">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Dashboard</p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Control Center
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900"
          >
            <FiLogOut />
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
