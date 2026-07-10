import { FiBell, FiMessageSquare, FiMail, FiPhoneCall, FiSend } from 'react-icons/fi';

const notifications = [
  { title: 'Orion Infra requires 1 more document', type: 'Escalation', time: '3 min ago' },
  { title: 'HDFC Bank approved Home Loan callback', type: 'Partner', time: '12 min ago' },
  { title: 'Priya Sharma file moved to underwriting', type: 'CRM', time: '25 min ago' },
  { title: 'New audit event on user permissions', type: 'Security', time: '1 hr ago' },
];

const Notifications = () => {
  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card bg-slate-950 p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Notifications</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Inbox for operational alerts</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          Centralize notifications for CRM events, partner updates, security events, and customer follow-ups.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Unread', '18'],
          ['Today', '42'],
          ['Escalations', '7'],
          ['Channels', '5'],
        ].map(([label, value]) => (
          <article key={label} className="surface-card p-5">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_.9fr]">
        <div className="surface-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiBell />Live inbox</div>
          <div className="mt-5 space-y-4">
            {notifications.map(item => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.time}</p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiSend />Channel preferences</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• In-app notifications enabled</p>
              <p>• Email digests enabled</p>
              <p>• WhatsApp escalation enabled</p>
              <p>• SMS fallback enabled</p>
            </div>
          </article>
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiMessageSquare />Customer comms</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• 11 follow-up messages queued</p>
              <p>• 8 document reminders sent</p>
              <p>• 4 callback confirmations scheduled</p>
            </div>
          </article>
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiMail />Delivery health</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Email delivery: 98.4%</p>
              <p>• Push delivery: 99.1%</p>
              <p>• WhatsApp delivery: 96.7%</p>
            </div>
          </article>
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiPhoneCall />Priority reminders</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Call high-value leads at 5 PM</p>
              <p>• Escalate partner delay after 20 mins</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Notifications;
