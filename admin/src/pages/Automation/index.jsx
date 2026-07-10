import { FiActivity, FiArrowRight, FiCpu, FiSend, FiTarget, FiZap } from 'react-icons/fi';

const automations = [
  { name: 'Lead follow-up sequence', status: 'Active', trigger: 'Lead score > 80', action: 'Assign to executive + WhatsApp reminder' },
  { name: 'Document chase loop', status: 'Active', trigger: 'Missing docs after 24h', action: 'Send email + SMS + task' },
  { name: 'High value escalation', status: 'Paused', trigger: 'Loan amount > ₹50L', action: 'Notify manager + underwriter' },
  { name: 'Bank SLA alert', status: 'Active', trigger: 'No callback in 20 mins', action: 'Escalate to partner manager' },
];

const Automation = () => {
  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card bg-slate-950 p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Automation Center</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Workflow orchestration hub</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          Design the follow-up, escalation, and reminder logic that keeps the business moving.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Active flows', '14'],
          ['Triggered today', '248'],
          ['Pending approvals', '6'],
          ['Avg response lift', '+18%'],
        ].map(([label, value]) => (
          <article key={label} className="surface-card p-5">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.05fr_.95fr]">
        <div className="surface-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiCpu />Flow builder</div>
          <div className="mt-5 space-y-4">
            {[
              ['Trigger', 'New lead captured'],
              ['Condition', 'Lead score greater than 70'],
              ['Action', 'Create follow-up task'],
              ['Action', 'Send WhatsApp + email'],
              ['Fallback', 'Escalate after 24h'],
            ].map(([step, value]) => (
              <div key={step + value} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{step}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiActivity />Automation library</div>
            <div className="mt-4 space-y-3">
              {automations.map(flow => (
                <div key={flow.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-slate-900">{flow.name}</p>
                      <p className="mt-1 text-sm text-slate-600">{flow.trigger}</p>
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{flow.status}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{flow.action}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiTarget />Suggested automations</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Re-engage cold leads with AI-assisted copy.</p>
              <p>• Auto-tag high-ticket applications for senior review.</p>
              <p>• Send priority nudges when documents are stale.</p>
              <p>• Trigger revenue alerts for large-value disbursals.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Automation;
