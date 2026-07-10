import { FiArrowRight, FiCreditCard, FiDollarSign, FiHome, FiShield, FiTrendingUp } from 'react-icons/fi';

const products = [
  { name: 'Personal Loan', icon: FiDollarSign, focus: 'Fast approval, low friction, salaried users' },
  { name: 'Business Loan', icon: FiTrendingUp, focus: 'High-ticket MSME and working capital cases' },
  { name: 'Home Loan', icon: FiHome, focus: 'Builder, resale, balance transfer opportunities' },
  { name: 'Credit Card', icon: FiCreditCard, focus: 'Cross-sell and fee-based revenue growth' },
  { name: 'Secured Lending', icon: FiShield, focus: 'LAP, gold, and asset-backed products' },
];

const Partners = () => {
  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">Loan Products</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Product strategy board</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Align partner banks, sales targets, and acquisition focus around the products that matter most.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map(item => {
          const Icon = item.icon;
          return (
            <article key={item.name} className="surface-card p-6">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white">
                  <Icon />
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Strategic</span>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-slate-900">{item.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.focus}</p>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                Review product plan
                <FiArrowRight />
              </button>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Partners;
