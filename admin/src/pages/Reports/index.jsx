import { FiBarChart2, FiDownload, FiPieChart, FiTrendingUp, FiUsers } from 'react-icons/fi';

const kpis = [
  { label: 'Disbursal volume', value: '₹18.4Cr', delta: '+12.5%' },
  { label: 'Revenue booked', value: '₹1.8Cr', delta: '+9.1%' },
  { label: 'Approval rate', value: '74.8%', delta: '+2.2%' },
  { label: 'Avg turnaround', value: '18h', delta: '-1.8h' },
];

const charts = [
  { label: 'Leads by channel', bars: [44, 58, 72, 65, 80, 74] },
  { label: 'Bank response health', bars: [72, 66, 80, 78, 84, 90] },
];

const reports = [
  ['Top source', 'Organic search'],
  ['Best bank', 'HDFC Bank'],
  ['Best executive', 'Ananya'],
  ['Highest ticket', 'Loan Against Property'],
];

const Reports = () => {
  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card bg-slate-950 p-6 text-white">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Reports & Analytics</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Business intelligence cockpit</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Snapshot performance across acquisition, underwriting, partner health, and revenue.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950">
            Export board
            <FiDownload />
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map(item => (
          <article key={item.label} className="surface-card p-5">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{item.value}</p>
            <p className="mt-3 text-sm font-semibold text-emerald-600">{item.delta}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
        <div className="surface-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiBarChart2 />Performance patterns</div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {charts.map(chart => (
              <article key={chart.label} className="rounded-3xl bg-slate-50 p-4">
                <h2 className="text-lg font-bold text-slate-900">{chart.label}</h2>
                <div className="mt-5 flex h-44 items-end gap-3">
                  {chart.bars.map((bar, index) => (
                    <div key={index} className="flex-1">
                      <div className="flex h-40 items-end rounded-2xl bg-white p-2 shadow-sm">
                        <div className="w-full rounded-xl bg-gradient-to-t from-blue-600 to-cyan-400" style={{ height: `${bar}%` }} />
                      </div>
                      <p className="mt-2 text-center text-xs text-slate-500">W{index + 1}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiPieChart />Current mix</div>
            <div className="mt-5 space-y-4">
              {[
                ['Home Loan', '34%'],
                ['LAP', '26%'],
                ['Business Loan', '18%'],
                ['Personal Loan', '14%'],
                ['Others', '8%'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="text-sm text-slate-600">{label}</span>
                  <strong className="text-sm text-slate-900">{value}</strong>
                </div>
              ))}
            </div>
          </article>
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiTrendingUp />Key findings</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {reports.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span>{label}</span>
                  <strong className="text-slate-900">{value}</strong>
                </div>
              ))}
            </div>
          </article>
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiUsers />Operational note</div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Conversion improves when senior executives are aligned to high-ticket secured loans and document reminders are sent before 6 PM.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Reports;
