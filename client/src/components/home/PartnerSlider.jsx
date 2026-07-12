import { motion } from 'framer-motion';
import BankLogo from '@/components/common/BankLogo';

const PartnerSlider = ({ partners }) => {
  const row = [...partners, ...partners];

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white">
      <div className="page-shell py-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-700">
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
                className="flex min-w-52 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <BankLogo name={partner.name} className="max-h-10 w-full max-w-36" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;
