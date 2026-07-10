import { motion } from 'framer-motion';

const Timeline = ({ steps }) => {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {steps.map((step, index) => (
        <motion.article
          key={step.title}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.2)]"
        >
          <div className="absolute right-4 top-4 text-5xl font-semibold text-slate-100">
            {step.icon}
          </div>
          <div className="relative">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
              {index + 1}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default Timeline;
