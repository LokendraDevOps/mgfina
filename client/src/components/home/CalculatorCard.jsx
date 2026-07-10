import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Button from '@/components/ui/Button';

const CalculatorCard = ({ title, description, valueLabel, value, toneClass }) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.18)]"
    >
      <div className={`rounded-[1.5rem] bg-gradient-to-br p-6 ${toneClass}`}>
        <div className="rounded-[1.2rem] bg-white/90 p-5 text-slate-950 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{valueLabel}</p>
          <p className="mt-2 text-3xl font-semibold">{value}</p>
        </div>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <Button as="a" href="#apply" variant="secondary" className="mt-6 w-full">
        Check Now <FiArrowRight />
      </Button>
    </motion.article>
  );
};

export default CalculatorCard;
