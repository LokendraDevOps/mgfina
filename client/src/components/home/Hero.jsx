import { motion } from 'framer-motion';
import { FiArrowRight, FiShield, FiZap, FiStar } from 'react-icons/fi';
import Button from '@/components/ui/Button';

const Hero = ({ stats }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(217,70,239,0.2),_transparent_28%),linear-gradient(135deg,_#081120_0%,_#0f172a_38%,_#020617_100%)]" />
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute left-[5%] top-[12%] h-52 w-52 rounded-full bg-sky-400 blur-3xl" />
        <div className="absolute right-[10%] top-[16%] h-64 w-64 rounded-full bg-fuchsia-500 blur-3xl" />
        <div className="absolute bottom-[8%] left-[42%] h-72 w-72 rounded-full bg-indigo-500 blur-3xl" />
      </div>

      <div className="page-shell relative z-10 grid gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-100">
              <FiShield className="text-sky-300" />
              Secure finance guidance
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-100">
              <FiStar className="text-amber-300" />
              Premium borrowing experience
            </span>
          </div>

          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              MGFINA Fincare Services LLP
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Modern finance support built for confident decisions.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Compare lending options, understand repayment clearly, and move forward with a premium, digital-first borrowing journey.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#loan-products" className="min-w-44 bg-white text-slate-950 hover:bg-slate-100">
              Explore Products <FiArrowRight />
            </Button>
            <Button as="a" href="#calculators" variant="secondary" className="min-w-44 bg-transparent text-white hover:bg-white/10">
              Check EMI Preview <FiZap />
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p className="text-2xl font-semibold text-white">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" />
          <div className="absolute -right-8 bottom-16 h-28 w-28 rounded-full bg-fuchsia-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white/10 p-5">
                <p className="text-sm text-slate-300">Available funding</p>
                <p className="mt-2 text-3xl font-semibold">₹99 Lacs</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">Flexible pathways across personal and business use cases.</p>
              </div>
              <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-500/30 to-fuchsia-500/20 p-5">
                <p className="text-sm text-slate-200">Response time</p>
                <p className="mt-2 text-3xl font-semibold">2 mins</p>
                <p className="mt-3 text-sm leading-6 text-slate-200">A streamlined review flow designed for modern expectations.</p>
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Monthly EMI planning</p>
                  <p className="mt-1 text-2xl font-semibold text-white">Smart, transparent, adaptable</p>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-medium text-emerald-300">
                  Low friction
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {['Compare', 'Shortlist', 'Apply'].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
