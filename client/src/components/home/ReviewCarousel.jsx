import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useAutoRotate from '@/hooks/useAutoRotate';
import ReviewCard from './ReviewCard';

const ReviewCarousel = ({ reviews }) => {
  const { index, next, prev } = useAutoRotate(reviews.length, 6000);

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={reviews[index].name}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.45 }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {[
            reviews[index],
            reviews[(index + 1) % reviews.length],
            reviews[(index + 2) % reviews.length],
            reviews[(index + 3) % reviews.length]
          ].map((review, itemIndex) => (
            <ReviewCard key={review.name} review={review} index={itemIndex} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100"
          aria-label="Previous review"
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          onClick={next}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100"
          aria-label="Next review"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
