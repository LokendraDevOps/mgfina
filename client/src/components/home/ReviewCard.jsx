import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const ReviewCard = ({ review, index }) => {
  const palette = [
    'from-sky-500 to-cyan-400',
    'from-violet-500 to-fuchsia-400',
    'from-emerald-500 to-teal-400',
    'from-orange-500 to-amber-400'
  ];

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.2)]"
    >
      <div className={`mb-5 h-16 w-16 rounded-2xl bg-gradient-to-br ${palette[index % palette.length]}`} />
      <div className="flex items-center gap-1 text-amber-400">
        {Array.from({ length: review.rating }).map((_, index) => (
          <FiStar key={index} />
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">“{review.review}”</p>
      <div className="mt-6">
        <p className="text-base font-semibold text-slate-950">{review.name}</p>
        <p className="text-sm text-slate-500">{review.role}</p>
      </div>
    </motion.article>
  );
};

export default ReviewCard;
