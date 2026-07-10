import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Button from '@/components/ui/Button';

const CTASection = () => {
  return (
    <section id="apply" className="bg-slate-50">
      <div className="page-shell py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_80px_-34px_rgba(15,23,42,0.35)] sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                Ready when you are
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Let’s make your next financing step feel simple.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Compare options, understand the EMI, and move ahead with a clean and premium experience built for confidence.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button as="a" href="#loan-products" className="bg-white text-slate-950 hover:bg-slate-100">
                Apply Now <FiArrowRight />
              </Button>
              <Button as="a" href="#contact" variant="secondary" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
                Contact Team
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
