import { FiEdit3, FiLock, FiShield, FiUserPlus, FiUsers } from 'react-icons/fi';

const team = [
  { name: 'Superloki', role: 'Superadmin', email: 'Superloki', status: 'Active' },
  { name: 'demo@mgfina.com', role: 'Admin', email: 'demo@mgfina.com', status: 'Active' },
];

const Users = () => {
  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card bg-slate-950 p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">User Management</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Roles and permissions hub</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          Manage who can access leads, documents, analytics, and operational controls.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Admins', '1'],
          ['Superadmins', '1'],
          ['Managers', '0'],
          ['Other roles', '0'],
        ].map(([label, value]) => (
          <article key={label} className="surface-card p-5">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p>
          </article>
        ))}
      </section>

      <section className="surface-card overflow-hidden">
        <div className="border-b border-slate-200 p-5">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Team directory</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {team.map(person => (
            <div key={person.email} className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{person.name}</p>
                <p className="text-sm text-slate-500">{person.email}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">{person.role}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{person.status}</span>
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-700">
                  <FiEdit3 />Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="surface-card p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiUserPlus />Invite access</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">Invite new users with role-based access levels and workspace restrictions.</p>
        </article>
        <article className="surface-card p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiShield />Role security</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">Permissions are ready for granular backend policy mapping.</p>
        </article>
        <article className="surface-card p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiLock />Access logs</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">Track sign-ins, resets, and elevated actions per account.</p>
        </article>
      </section>
    </div>
  );
};

export default Users;
