import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import { createArtDataUrl } from '@/utils/homeArt';

const LoanCard = ({ loan, index }) => {
  const image = createArtDataUrl({
    title: loan.title,
    subtitle: loan.description.slice(0, 42),
    accentA: loan.accent[0],
    accentB: loan.accent[1],
    background: '#f8fbff'
  });

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_20px_60px_-32px_rgba(15,23,42,0.2)]"
    >
      <img
        src={image}
        alt={loan.title}
        className="h-48 w-full object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          0{index + 1}
        </div>
        <h3 className="text-xl font-semibold text-slate-950">{loan.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{loan.description}</p>
        <ul className="mt-5 grid gap-2 text-sm text-slate-700">
          {loan.features.map((feature) => (
            <li key={feature} className="inline-flex items-center gap-2">
              <FiCheck className="text-emerald-500" />
              {feature}
            </li>
          ))}
        </ul>
        <Button as="a" href="#apply" className="mt-6 w-full">
          Apply for {loan.title} <FiArrowRight />
        </Button>
      </div>
    </motion.article>
  );
};

export default LoanCard;
