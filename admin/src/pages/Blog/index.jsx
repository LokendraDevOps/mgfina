import { useMemo, useState } from 'react';
import { FiArrowRight, FiEdit3, FiFilter, FiImage, FiPlus, FiSearch, FiShare2 } from 'react-icons/fi';

const articles = [
  { title: 'How secured lending is reshaping MSME growth', category: 'Insights', status: 'Published', date: 'Jul 10', views: '12.4k' },
  { title: 'What top lenders want from a clean application file', category: 'Education', status: 'Draft', date: 'Jul 9', views: '3.1k' },
  { title: 'Inside the MGFINA customer follow-up playbook', category: 'Operations', status: 'Scheduled', date: 'Jul 8', views: '9.8k' },
  { title: 'Why partner response speed changes approval rates', category: 'Partners', status: 'Published', date: 'Jul 7', views: '15.2k' },
];

const Blog = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => articles.filter(item => {
    const q = search.toLowerCase();
    const matchesSearch = [item.title, item.category, item.status].some(value => value.toLowerCase().includes(q));
    const matchesCategory = category === 'All' || item.category === category;
    return matchesSearch && matchesCategory;
  }), [category, search]);

  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card bg-slate-950 p-6 text-white">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Website CMS</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Content command center</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Publish product stories, insights, and operational updates without leaving the platform.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950">
            <FiPlus />
            New article
          </button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <FiSearch className="text-slate-400" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles..." className="w-full bg-transparent outline-none" />
        </label>
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <FiFilter className="text-slate-400" />
          <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-transparent outline-none">
            {['All', 'Insights', 'Education', 'Operations', 'Partners'].map(item => <option key={item}>{item}</option>)}
          </select>
        </label>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {filtered.map(article => (
          <article key={article.title} className="surface-card overflow-hidden p-0">
            <div className="grid md:grid-cols-[.9fr_1.1fr]">
              <div className="grid min-h-56 place-items-center bg-gradient-to-br from-slate-950 to-blue-900 text-white">
                <FiImage className="text-5xl opacity-80" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{article.category}</span>
                  <span className="text-xs text-slate-500">{article.date}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{article.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Use this editorial surface for product education, partner announcements, and platform stories.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-slate-100 px-3 py-1">{article.status}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">{article.views} views</span>
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm font-semibold text-blue-600">
                  <button className="inline-flex items-center gap-2"><FiEdit3 />Edit</button>
                  <button className="inline-flex items-center gap-2"><FiShare2 />Share</button>
                  <button className="inline-flex items-center gap-2"><FiArrowRight />Open</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Blog;
