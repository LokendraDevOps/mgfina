import { motion } from 'framer-motion';

const PartnerSlider = ({ partners }) => {
  const row = [...partners, ...partners];
  const palette = [
    'from-sky-500 to-cyan-400',
    'from-violet-500 to-fuchsia-400',
    'from-slate-900 to-slate-500',
    'from-cyan-500 to-emerald-400',
    'from-rose-500 to-pink-400',
    'from-indigo-500 to-violet-400',
    'from-orange-500 to-amber-400',
    'from-emerald-500 to-teal-400'
  ];

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white">
      <div className="page-shell py-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          Trusted banking partners
        </p>
        <div className="mask-marquee">
          <motion.div
            className="marquee-track flex w-max gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            {row.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex min-w-52 items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{partner.name}</p>
                  <p className="mt-1 text-xs text-slate-500">Banking partner</p>
                </div>
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${palette[index % palette.length]}`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;
