import { motion } from 'framer-motion';
import { FiArrowUpRight, FiAlertTriangle, FiCheckCircle, FiClock, FiDollarSign, FiFileText, FiMessageSquare, FiStar, FiTrendingUp, FiUsers } from 'react-icons/fi';

const widgets = [
  { label: "Today's Leads", value: '128', trend: '+18%', prev: '108', status: 'Hot', spark: [2, 4, 3, 6, 8, 7] },
  { label: 'Pending Applications', value: '42', trend: '+4%', prev: '40', status: 'Watch', spark: [5, 3, 6, 4, 5, 6] },
  { label: 'Approved', value: '91', trend: '+12%', prev: '81', status: 'Healthy', spark: [3, 5, 4, 7, 8, 9] },
  { label: 'Disbursed Amount', value: '₹14.2Cr', trend: '+22%', prev: '₹11.6Cr', status: 'Strong', spark: [6, 7, 8, 9, 10, 12] },
  { label: 'Pipeline Value', value: '₹84.8Cr', trend: '+16%', prev: '₹73.1Cr', status: 'Growing', spark: [4, 5, 5, 7, 8, 9] },
  { label: 'Revenue', value: '₹1.8Cr', trend: '+9%', prev: '₹1.65Cr', status: 'Positive', spark: [3, 4, 4, 5, 6, 7] },
  { label: 'Conversion', value: '18.6%', trend: '+2.1%', prev: '16.5%', status: 'Up', spark: [2, 3, 2, 4, 5, 6] },
  { label: 'Executive Score', value: '96', trend: '+5', prev: '91', status: 'Elite', spark: [7, 8, 9, 8, 10, 11] },
  { label: 'Customer Satisfaction', value: '4.9/5', trend: '+0.1', prev: '4.8', status: 'High', spark: [8, 8, 9, 10, 9, 10] },
];

const summary = [
  ['Revenue', '₹18.4L', 'Daily collections are 13% above target.'],
  ['Pipeline', '₹84.8Cr', 'Enterprise opportunities are concentrated in Delhi and Bengaluru.'],
  ['Applications', '142', '16 files are blocked on documentation.'],
  ['Pending Tasks', '27', '12 follow-ups and 8 verification items due today.'],
];

const urgent = [
  { title: 'High Value Lead: Orion Infra', note: '₹4.2Cr LAP opportunity waiting for executive review.' },
  { title: 'Missing Docs: Priya Sharma', note: 'Salary slips and bank statements pending upload.' },
  { title: 'Bank SLA Watch', note: 'Two partner banks have crossed the response window.' },
];

const Dashboard = () => {
  return (
    <div className="admin-shell space-y-8">
      <section className="surface-card overflow-hidden border-slate-200 bg-slate-950 p-8 text-white shadow-2xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Good Morning</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Today&apos;s business summary</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              MGFINA OS is tracking leads, documents, partner response times, and high-value opportunities in one command center.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Top performing executive</p>
              <p className="mt-2 text-2xl font-bold">Sneha Kapoor</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Highest performing bank</p>
              <p className="mt-2 text-2xl font-bold">HDFC Bank</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {widgets.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            className="surface-card p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-slate-500">{item.label}</p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{item.value}</h3>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{item.status}</span>
            </div>
            <div className="mt-5 flex items-end gap-1">
              {item.spark.map((bar, i) => <span key={i} className="w-full rounded-t-full bg-blue-600/85" style={{ height: `${bar * 7}px` }} />)}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>Trend {item.trend}</span>
              <span>Prev {item.prev}</span>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
        <div className="surface-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">CEO command center</h2>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Live today</span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {summary.map(([label, value, note]) => (
              <article key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{note}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl bg-slate-950 p-5 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-300"><FiAlertTriangle />Customers requiring immediate attention</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>23 lead files have been untouched for 48 hours.</li>
                <li>7 high-ticket loans are missing final verification.</li>
                <li>2 partner banks need callback escalation.</li>
              </ul>
            </article>
            <article className="rounded-3xl bg-slate-100 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900"><FiMessageSquare />AI suggestions</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>Prioritize LAP leads over unsecured loans for higher conversion.</li>
                <li>Push document reminders before 6 PM for best response.</li>
                <li>Shift three senior executives to the best converting bank today.</li>
              </ul>
            </article>
          </div>
        </div>

        <div className="space-y-6">
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiUsers />High value leads</div>
            <div className="mt-4 space-y-4">
              {urgent.map(item => (
                <div key={item.title} className="rounded-3xl border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiCheckCircle />Pending documents</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"><span>Salary slips</span><strong>12</strong></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"><span>Bank statements</span><strong>9</strong></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"><span>Property papers</span><strong>7</strong></div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
