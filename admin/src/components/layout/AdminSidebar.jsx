import { NavLink } from 'react-router-dom';
import { FiGrid, FiUsers, FiBriefcase, FiLayers, FiSettings, FiBookOpen, FiBarChart2, FiUser, FiBell, FiInbox, FiFolder, FiCpu, FiTrendingUp, FiActivity, FiShield, FiLifeBuoy } from 'react-icons/fi';
import BrandLogo from '@/components/common/BrandLogo';

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: FiGrid },
  { label: 'Lead CRM', path: '/customers', icon: FiUsers },
  { label: 'Loan Applications', path: '/loan-applications', icon: FiBriefcase },
  { label: 'Bank Partners', path: '/banks', icon: FiLayers },
  { label: 'Loan Products', path: '/partners', icon: FiBriefcase },
  { label: 'Documents', path: '/documents', icon: FiBookOpen },
  { label: 'Media Library', path: '/documents', icon: FiFolder },
  { label: 'Automation Center', path: '/automation', icon: FiCpu },
  { label: 'Reports', path: '/reports', icon: FiBarChart2 },
  { label: 'Analytics', path: '/reports', icon: FiTrendingUp },
  { label: 'Notifications', path: '/notifications', icon: FiBell },
  { label: 'Audit Logs', path: '/audit-logs', icon: FiActivity },
  { label: 'Settings', path: '/settings', icon: FiSettings },
  { label: 'User Management', path: '/users', icon: FiUser },
  { label: 'Roles & Permissions', path: '/users', icon: FiShield },
  { label: 'Support', path: '/support', icon: FiLifeBuoy }
];

const AdminSidebar = () => {
  return (
    <aside className="hidden w-80 shrink-0 border-r border-slate-200 bg-white/90 px-4 py-6 backdrop-blur lg:block dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mb-8 px-2">
        <BrandLogo variant="full" className="h-11 w-auto" />
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Enterprise Finance OS</p>
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
