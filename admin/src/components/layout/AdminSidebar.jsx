import { NavLink } from 'react-router-dom';
import { FiGrid, FiUsers, FiBriefcase, FiLayers, FiSettings, FiBookOpen, FiBarChart2, FiUser } from 'react-icons/fi';

const navItems = [
  { label: 'Dashboard', path: '/', icon: FiGrid },
  { label: 'Customers', path: '/customers', icon: FiUsers },
  { label: 'Loan Applications', path: '/loan-applications', icon: FiBriefcase },
  { label: 'Banks', path: '/banks', icon: FiLayers },
  { label: 'Partners', path: '/partners', icon: FiBriefcase },
  { label: 'Blog', path: '/blog', icon: FiBookOpen },
  { label: 'Users', path: '/users', icon: FiUser },
  { label: 'Reports', path: '/reports', icon: FiBarChart2 },
  { label: 'Settings', path: '/settings', icon: FiSettings }
];

const AdminSidebar = () => {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white/90 px-4 py-6 backdrop-blur lg:block dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mb-8 px-2">
        <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          Shree Ashaa Reality
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Administration</p>
      </div>

      <nav className="space-y-1">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              [
                'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
              ].join(' ')
            }
          >
            <Icon className="text-base" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
