import { motion } from 'framer-motion';
import useCountUp from '@/hooks/useCountUp';

const CounterCard = ({ label, value, suffix }) => {
  const [ref, count] = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18)] transition"
    >
      <p className="text-3xl font-semibold tracking-tight text-slate-950">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
    </motion.div>
  );
};

const Counter = ({ stats }) => {
  return (
    <section className="bg-slate-50">
      <div className="page-shell py-8 sm:py-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <CounterCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
