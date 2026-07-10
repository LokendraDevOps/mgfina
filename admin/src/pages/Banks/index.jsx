import { motion } from 'framer-motion';
import { FiArrowRight, FiStar, FiThumbsUp, FiUsers } from 'react-icons/fi';

const banks = [
  { name: 'HDFC Bank', products: 'Home, LAP, Business', benefit: 'Fast partner SLA and strong disbursal velocity.', rating: 4.9, response: '18 mins', approvals: '92%' },
  { name: 'ICICI Bank', products: 'Personal, Car, Credit Card', benefit: 'Broad product coverage and premium conversion rates.', rating: 4.8, response: '22 mins', approvals: '89%' },
  { name: 'Axis Bank', products: 'Business, Gold, LAP', benefit: 'Good for high-ticket and secured lending files.', rating: 4.7, response: '26 mins', approvals: '86%' },
  { name: 'SBI', products: 'Education, Home, LAP', benefit: 'High trust brand with strong metro and tier-2 reach.', rating: 4.6, response: '31 mins', approvals: '83%' },
  { name: 'Kotak', products: 'Personal, Business, Credit Card', benefit: 'Aggressive digital underwriting and quick callbacks.', rating: 4.7, response: '24 mins', approvals: '87%' },
  { name: 'IDFC FIRST', products: 'Personal, Car, Gold', benefit: 'Clean underwriting and competitive pricing grid.', rating: 4.8, response: '19 mins', approvals: '90%' },
];

const Banks = () => {
  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card overflow-hidden bg-slate-950 p-6 text-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Bank Partners</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Partner intelligence grid</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              See product coverage, response speed, approval rate, and suitability in one place.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950">
            Export partner matrix
            <FiArrowRight />
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {banks.map((bank, index) => (
          <motion.article key={bank.name} whileHover={{ y: -4 }} className="surface-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{bank.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{bank.products}</p>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white">
                <FiStar />
              </span>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">{bank.benefit}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ['Rating', bank.rating],
                ['Response', bank.response],
                ['Approvals', bank.approvals],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold"><FiThumbsUp />Best use case</div>
              <span className="text-xs text-slate-300">High confidence</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
              <FiUsers />
              Match leads to this bank
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
};

export default Banks;
