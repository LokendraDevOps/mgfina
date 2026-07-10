import { FiHelpCircle, FiMessageSquare, FiPhoneCall, FiSend } from 'react-icons/fi';

const tickets = [
  { id: 'SUP-1201', subject: 'Callback failed for Orion Infra', status: 'Open', priority: 'High' },
  { id: 'SUP-1202', subject: 'Document upload issue for Priya Sharma', status: 'In Progress', priority: 'Medium' },
  { id: 'SUP-1203', subject: 'Partner response delay escalation', status: 'Waiting', priority: 'Critical' },
];

const Support = () => {
  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card bg-slate-950 p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Support</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Internal support center</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          Track escalations, service issues, and business support requests in one enterprise workspace.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Open tickets', '18'],
          ['Resolved today', '24'],
          ['SLA breaches', '2'],
          ['Avg first response', '6m'],
        ].map(([label, value]) => (
          <article key={label} className="surface-card p-5">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_.95fr]">
        <div className="surface-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiHelpCircle />Ticket board</div>
          <div className="mt-5 space-y-4">
            {tickets.map(ticket => (
              <div key={ticket.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs text-slate-500">{ticket.id}</p>
                    <p className="mt-1 font-semibold text-slate-900">{ticket.subject}</p>
                  </div>
                  <div className="flex gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">{ticket.status}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{ticket.priority}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiMessageSquare />Support SLAs</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Customer issues must be acknowledged within 10 minutes.</p>
              <p>• Partner escalations must be reviewed within 20 minutes.</p>
              <p>• Critical access issues get priority routing.</p>
            </div>
          </article>
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiPhoneCall />Contact paths</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Support desk hotline</p>
              <p>• Escalation email queue</p>
              <p>• Internal WhatsApp response channel</p>
            </div>
          </article>
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiSend />Resolution flow</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Capture issue</p>
              <p>• Assign owner</p>
              <p>• Track resolution</p>
              <p>• Close with notes</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Support;
