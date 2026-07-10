import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SectionTitle = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={variants}
      transition={{ duration: 0.6 }}
      className={['max-w-3xl', alignment, className].join(' ')}
    >
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionTitle;
