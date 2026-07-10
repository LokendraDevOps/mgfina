import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiClock, FiFilter, FiMessageSquare, FiPlus, FiSearch, FiTag, FiTrendingUp, FiUser } from 'react-icons/fi';

const applications = [
  { id: 'APP-9012', customer: 'Priya Sharma', product: 'Home Loan', amount: '₹82L', score: 91, source: 'Website', priority: 'High', stage: 'Verification', updated: '12 min ago', assignee: 'Ananya' },
  { id: 'APP-9017', customer: 'Orion Infra', product: 'Loan Against Property', amount: '₹4.2Cr', score: 96, source: 'Partner', priority: 'Critical', stage: 'Documents', updated: '19 min ago', assignee: 'Rohit' },
  { id: 'APP-9022', customer: 'Nikhil Verma', product: 'Personal Loan', amount: '₹12L', score: 74, source: 'App', priority: 'Medium', stage: 'Underwriting', updated: '42 min ago', assignee: 'Meera' },
  { id: 'APP-9041', customer: 'Kavya Finance', product: 'Business Loan', amount: '₹1.6Cr', score: 88, source: 'Referral', priority: 'High', stage: 'Approval', updated: '1 hr ago', assignee: 'Siddharth' },
];

const timeline = [
  ['10:15', 'Priya uploaded income proofs'],
  ['11:20', 'Rohit requested bank statement verification'],
  ['12:05', 'Ananya moved Home Loan to underwriting'],
  ['13:40', 'Bank partner requested one extra document'],
];

const stages = ['Lead', 'Documents', 'Verification', 'Underwriting', 'Approval', 'Disbursed'];

const LoanApplications = () => {
  const [view, setView] = useState('table');
  const [search, setSearch] = useState('');
  const [priority, setPriority] = useState('All');

  const filtered = useMemo(() => applications.filter(item => {
    const q = search.toLowerCase();
    const matchesSearch = [item.customer, item.product, item.source, item.assignee, item.id].some(value => value.toLowerCase().includes(q));
    const matchesPriority = priority === 'All' || item.priority === priority;
    return matchesSearch && matchesPriority;
  }), [priority, search]);

  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card overflow-hidden bg-slate-950 p-6 text-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Loan CRM</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Loan application control room</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Track every file by stage, ownership, source, and urgency across table, kanban, and timeline views.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950">
            <FiPlus />
            New application
          </button>
        </div>
      </section>

      <section className="surface-card p-5">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <FiSearch className="text-slate-400" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search applicant, ID, product, source, assignee..." className="w-full bg-transparent outline-none" />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <FiFilter className="text-slate-400" />
              <select value={priority} onChange={e => setPriority(e.target.value)} className="w-full bg-transparent outline-none">
                {['All', 'Critical', 'High', 'Medium'].map(item => <option key={item}>{item}</option>)}
              </select>
            </label>
            <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-1">
              {['table', 'kanban', 'timeline'].map(item => (
                <button key={item} onClick={() => setView(item)} className={`flex-1 rounded-xl px-3 py-2 text-sm font-semibold capitalize ${view === item ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500'}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {view === 'table' && (
        <section className="surface-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-slate-950 text-white">
                <tr>
                  {['Application', 'Product', 'Amount', 'Lead score', 'Source', 'Priority', 'Stage', 'Owner', 'Updated'].map(col => (
                    <th key={col} className="px-5 py-4 text-xs uppercase tracking-[0.2em]">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(item => (
                  <tr key={item.id} className="border-t border-slate-100">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-900">{item.customer}</p>
                      <p className="text-xs text-slate-500">{item.id}</p>
                    </td>
                    <td className="px-5 py-4">{item.product}</td>
                    <td className="px-5 py-4 font-semibold">{item.amount}</td>
                    <td className="px-5 py-4">{item.score}</td>
                    <td className="px-5 py-4">{item.source}</td>
                    <td className="px-5 py-4"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{item.priority}</span></td>
                    <td className="px-5 py-4">{item.stage}</td>
                    <td className="px-5 py-4">{item.assignee}</td>
                    <td className="px-5 py-4 text-slate-500">{item.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {view === 'kanban' && (
        <section className="grid gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {stages.map(stage => (
            <div key={stage} className="surface-card p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-slate-900">{stage}</h3>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">{filtered.filter(item => item.stage === stage).length}</span>
              </div>
              <div className="space-y-3">
                {filtered.filter(item => item.stage === stage).map(item => (
                  <motion.article key={item.id} whileHover={{ y: -4 }} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">{item.id}</p>
                    <p className="mt-2 font-semibold text-slate-900">{item.customer}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.product}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                      <span>{item.amount}</span>
                      <span>{item.assignee}</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {view === 'timeline' && (
        <section className="grid gap-6 xl:grid-cols-[1.05fr_.95fr]">
          <div className="surface-card p-6">
            <h2 className="text-2xl font-bold tracking-tight">Activity timeline</h2>
            <div className="mt-6 space-y-4">
              {timeline.map(([time, text]) => (
                <div key={time} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-white"><FiClock /></span>
                    <span className="mt-2 h-full w-px bg-slate-200" />
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{time}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <article className="surface-card p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiTrendingUp />Lead score distribution</div>
              <div className="mt-5 space-y-3">
                {[92, 88, 81, 74, 66].map((score, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="w-12 text-sm text-slate-500">{score}</span>
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" style={{ width: `${score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className="surface-card p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiTag />Notes and follow-ups</div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>• Escalate Orion Infra to senior underwriting by 4 PM.</p>
                <p>• Ask Priya Sharma for final KYC document upload.</p>
                <p>• Call Kavya Finance before partner cutoff.</p>
              </div>
            </article>
            <article className="surface-card p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiActivity />Activities</div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>• 24 file movements today</p>
                <p>• 9 bank callbacks completed</p>
                <p>• 16 document reminders sent</p>
              </div>
            </article>
            <article className="surface-card p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiMessageSquare />Pending tasks</div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>• Review 5 high-value leads</p>
                <p>• Approve 7 clean files</p>
                <p>• Reassign 3 stalled applications</p>
              </div>
            </article>
          </div>
        </section>
      )}
    </div>
  );
};

export default LoanApplications;
