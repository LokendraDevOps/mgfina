import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useAutoRotate from '@/hooks/useAutoRotate';
import Button from '@/components/ui/Button';

const PromoSlider = ({ slides }) => {
  const { index, next, prev, setIndex } = useAutoRotate(slides.length, 4500);
  const slide = slides[index];
  const palette = [
    'from-sky-500 to-fuchsia-500',
    'from-violet-500 to-pink-500',
    'from-emerald-500 to-cyan-500'
  ];

  return (
    <section className="bg-slate-50">
      <div className="page-shell py-16">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-34px_rgba(15,23,42,0.25)]">
          <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
            <div className="flex flex-col justify-between gap-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                <span>Promotional banner</span>
                <span className="h-px flex-1 bg-slate-200" />
                <span>{index + 1}/{slides.length}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                  className="max-w-xl"
                >
                  <span className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                    {slide.eyebrow}
                  </span>
                  <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    {slide.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {slide.description}
                  </p>
                  <Button as="a" href="#loan-products" className="mt-6">
                    {slide.cta}
                  </Button>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
                  aria-label="Previous promotion"
                >
                  <FiChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
                  aria-label="Next promotion"
                >
                  <FiChevronRight />
                </button>
                <div className="flex gap-2">
                  {slides.map((item, itemIndex) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setIndex(itemIndex)}
                      className={[
                        'h-2.5 rounded-full transition-all',
                        itemIndex === index ? 'w-10 bg-slate-900' : 'w-2.5 bg-slate-300'
                      ].join(' ')}
                      aria-label={`Go to slide ${itemIndex + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              key={`${slide.title}-visual`}
              initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.55 }}
              className={`rounded-[1.75rem] p-6 bg-gradient-to-br ${palette[index % palette.length]}`}
            >
              <div className="flex h-full min-h-[360px] flex-col justify-between rounded-[1.4rem] bg-white/90 p-6 text-slate-950 backdrop-blur">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Premium financing
                  </p>
                  <h4 className="text-2xl font-semibold tracking-tight">
                    Smart options, clean decisions
                  </h4>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Transparent', 'Digital', 'Guided', 'Fast'].map((label) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-sm font-medium"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSlider;
