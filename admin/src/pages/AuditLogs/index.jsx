import { FiAlertTriangle, FiClock, FiShield, FiUser } from 'react-icons/fi';

const logs = [
  { actor: 'Aarav Mehta', action: 'Updated role permissions', time: '2 min ago', severity: 'Security' },
  { actor: 'Sneha Kapoor', action: 'Approved 3 loan files', time: '11 min ago', severity: 'Workflow' },
  { actor: 'System', action: 'Session timeout executed', time: '29 min ago', severity: 'Auth' },
  { actor: 'Rohit Verma', action: 'Escalated partner SLA alert', time: '1 hr ago', severity: 'Ops' },
];

const AuditLogs = () => {
  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card bg-slate-950 p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Audit Logs</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Immutable activity timeline</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          Review administrative actions, workflow events, and security events in one place.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Events today', '84'],
          ['Security alerts', '3'],
          ['Workflow actions', '39'],
          ['Access changes', '8'],
        ].map(([label, value]) => (
          <article key={label} className="surface-card p-5">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p>
          </article>
        ))}
      </section>

      <section className="surface-card p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiClock />Recent activity</div>
        <div className="mt-5 space-y-4">
          {logs.map(item => (
            <div key={item.actor + item.action} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{item.action}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.actor} • {item.time}</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <FiShield />
                  {item.severity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="surface-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiUser />User changes</div>
          <p className="mt-4 text-sm leading-6 text-slate-600">All access changes, password resets, and elevated actions are surfaced here for compliance teams.</p>
        </article>
        <article className="surface-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiAlertTriangle />Risk note</div>
          <p className="mt-4 text-sm leading-6 text-slate-600">Repeated login failures, permission escalations, and sensitive exports can be flagged automatically when backend rules are added.</p>
        </article>
      </section>
    </div>
  );
};

export default AuditLogs;
