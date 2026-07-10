import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiClock, FiFilter, FiMessageSquare, FiPhoneCall, FiSearch, FiStar, FiUserCheck, FiUsers } from 'react-icons/fi';

const customers = [
  { name: 'Priya Sharma', segment: 'Prime Salaried', loan: 'Home Loan', value: '₹82L', executive: 'Ananya', status: 'Priority', satisfaction: 98, lastTouch: 'Today' },
  { name: 'Orion Infra', segment: 'Enterprise', loan: 'LAP', value: '₹4.2Cr', executive: 'Rohit', status: 'Escalation', satisfaction: 91, lastTouch: '12 min ago' },
  { name: 'Kavya Finance', segment: 'SME Growth', loan: 'Business Loan', value: '₹1.6Cr', executive: 'Siddharth', status: 'Warm', satisfaction: 95, lastTouch: '1 hr ago' },
  { name: 'Nikhil Verma', segment: 'Digital Lead', loan: 'Personal Loan', value: '₹12L', executive: 'Meera', status: 'Follow-up', satisfaction: 89, lastTouch: '3 hr ago' },
  { name: 'Anika Traders', segment: 'Merchant', loan: 'Credit Card', value: '₹8L', executive: 'Aman', status: 'Nurture', satisfaction: 86, lastTouch: 'Yesterday' },
];

const executives = [
  { name: 'Ananya', score: 97, leads: 44, conversions: '38%', bank: 'HDFC Bank' },
  { name: 'Rohit', score: 94, leads: 39, conversions: '34%', bank: 'Axis Bank' },
  { name: 'Siddharth', score: 92, leads: 31, conversions: '29%', bank: 'ICICI Bank' },
  { name: 'Meera', score: 90, leads: 28, conversions: '25%', bank: 'SBI' },
];

const Customers = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredCustomers = useMemo(() => customers.filter(item => {
    const q = search.toLowerCase();
    const matchesSearch = [item.name, item.segment, item.loan, item.executive, item.status].some(value => value.toLowerCase().includes(q));
    const matchesFilter = filter === 'All' || item.status === filter;
    return matchesSearch && matchesFilter;
  }), [filter, search]);

  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card bg-slate-950 p-6 text-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Customers & Executives</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Relationship intelligence workspace</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Keep every customer, executive, follow-up, and escalation visible from one premium operations surface.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Active customers</p>
              <p className="mt-2 text-2xl font-bold">2,184</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Executive CSAT</p>
              <p className="mt-2 text-2xl font-bold">96.4%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Total value', '₹148.2Cr'],
          ['Follow-ups today', '42'],
          ['Escalations', '7'],
          ['Customer health', 'Excellent'],
        ].map(([label, value]) => (
          <article key={label} className="surface-card p-5">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
        <div className="surface-card p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Customer queue</h2>
              <p className="mt-1 text-sm text-slate-500">Search, filter, and act on your highest value relationships.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <FiSearch className="text-slate-400" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search customers..." className="w-full bg-transparent outline-none" />
              </label>
              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <FiFilter className="text-slate-400" />
                <select value={filter} onChange={e => setFilter(e.target.value)} className="w-full bg-transparent outline-none">
                  {['All', 'Priority', 'Escalation', 'Warm', 'Follow-up', 'Nurture'].map(item => <option key={item}>{item}</option>)}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {filteredCustomers.map((item, index) => (
              <motion.article key={item.name} whileHover={{ y: -3 }} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.segment}</p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{item.loan} • {item.value}</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white p-3">
                      <p className="text-xs text-slate-500">Executive</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">{item.executive}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-3">
                      <p className="text-xs text-slate-500">Status</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">{item.status}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-3">
                      <p className="text-xs text-slate-500">Satisfaction</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">{item.satisfaction}%</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700"><FiClock />Last touch {item.lastTouch}</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700"><FiStar />High retention</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700"><FiPhoneCall />Call back due today</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiUsers />Executive leaderboard</div>
            <div className="mt-5 space-y-4">
              {executives.map(exec => (
                <div key={exec.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-bold text-slate-900">{exec.name}</p>
                      <p className="text-sm text-slate-500">{exec.bank}</p>
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">Score {exec.score}</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-white p-3">
                      <p className="text-xs text-slate-500">Leads</p>
                      <p className="mt-1 font-semibold text-slate-900">{exec.leads}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-3">
                      <p className="text-xs text-slate-500">Conversion</p>
                      <p className="mt-1 font-semibold text-slate-900">{exec.conversions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiMessageSquare />Today&apos;s action list</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Call back 12 warm leads before 3 PM.</p>
              <p>• Push document reminders to 9 customers.</p>
              <p>• Review 3 executive escalations with management.</p>
              <p>• Reassign 2 inactive leads to the highest performer.</p>
            </div>
          </article>

          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiUserCheck />Support signals</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• 7 customers need phone verification.</p>
              <p>• 4 cases are waiting on bank response.</p>
              <p>• 11 files need executive review comments.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Customers;
