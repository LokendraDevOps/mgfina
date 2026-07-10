import { useMemo, useState } from 'react';
import { FiFileText, FiFilter, FiFolder, FiImage, FiSearch, FiUpload } from 'react-icons/fi';

const files = [
  { name: 'Priya-Sharma-KYC.pdf', type: 'KYC', size: '1.2 MB', owner: 'Ananya', status: 'Verified' },
  { name: 'Orion-Infra-Property-Docs.zip', type: 'Property', size: '14.8 MB', owner: 'Rohit', status: 'Pending' },
  { name: 'Kavya-Finance-Bank-Statements.pdf', type: 'Income', size: '6.4 MB', owner: 'Siddharth', status: 'Missing' },
  { name: 'Nikhil-Verma-Salary-Slips.pdf', type: 'Income', size: '2.1 MB', owner: 'Meera', status: 'Verified' },
  { name: 'Media-Brand-Assets.zip', type: 'Media', size: '27.0 MB', owner: 'Design', status: 'Ready' },
];

const Documents = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => files.filter(item => {
    const q = search.toLowerCase();
    const matchesSearch = [item.name, item.type, item.owner, item.status].some(value => value.toLowerCase().includes(q));
    const matchesFilter = filter === 'All' || item.status === filter;
    return matchesSearch && matchesFilter;
  }), [filter, search]);

  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card bg-slate-950 p-6 text-white">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Documents & Media Library</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Document operations center</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Track every file by status, owner, and type across onboarding and loan processing.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950">
            <FiUpload />
            Upload files
          </button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <FiSearch className="text-slate-400" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search documents, owner, type..." className="w-full bg-transparent outline-none" />
        </label>
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <FiFilter className="text-slate-400" />
          <select value={filter} onChange={e => setFilter(e.target.value)} className="w-full bg-transparent outline-none">
            {['All', 'Verified', 'Pending', 'Missing', 'Ready'].map(item => <option key={item}>{item}</option>)}
          </select>
        </label>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="surface-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiFolder />Folders</div>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>• KYC and onboarding</p>
            <p>• Income and bank proofs</p>
            <p>• Property and collateral files</p>
            <p>• Brand and marketing media</p>
          </div>
        </article>
        <article className="surface-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiFileText />Processing stats</div>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>• 124 files verified today</p>
            <p>• 18 documents pending review</p>
            <p>• 7 files missing critical proofs</p>
          </div>
        </article>
        <article className="surface-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiImage />Media readiness</div>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>• Brand assets organized</p>
            <p>• Website creatives approved</p>
            <p>• Campaign media linked to CMS</p>
          </div>
        </article>
      </section>

      <section className="surface-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-slate-950 text-white">
              <tr>
                {['File', 'Type', 'Size', 'Owner', 'Status'].map(col => <th key={col} className="px-5 py-4 text-xs uppercase tracking-[0.2em]">{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {filtered.map(file => (
                <tr key={file.name} className="border-t border-slate-100">
                  <td className="px-5 py-4 font-semibold text-slate-900 dark:text-white">{file.name}</td>
                  <td className="px-5 py-4 text-slate-600">{file.type}</td>
                  <td className="px-5 py-4 text-slate-600">{file.size}</td>
                  <td className="px-5 py-4 text-slate-600">{file.owner}</td>
                  <td className="px-5 py-4"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{file.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Documents;
