import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiChevronDown, FiCreditCard, FiPieChart, FiShield, FiStar } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import banks from '@/data/banks.json';

const bankLogos = banks.map(bank => bank.short || bank.name.split(' ').map(x => x[0]).join('').slice(0, 3));
const benefits = ['One Smart EMI', 'Better Cash Flow', 'Organized Repayment', 'Potential Savings', 'Better Planning', 'Digital Journey'];
const documents = ['PAN', 'Aadhaar', 'Income Proof', 'Bank Statement', 'Existing Loan Details'];
const metrics = [
  { label: 'Financial Health Score', value: 91 },
  { label: 'EMI Burden', value: 68 },
  { label: 'Income Ratio', value: 82 },
  { label: 'Debt Ratio', value: 74 },
  { label: 'Cash Flow', value: 88 },
  { label: 'Credit Health', value: 86 },
  { label: 'Monthly Savings', value: 79 }
];

const faqs = [
  ['Who should apply?', 'Anyone paying two or more EMIs, credit card debt, or multiple financial commitments and looking for a single structured repayment plan.'],
  ['Will this reduce my EMI?', 'In many cases, yes. The platform compares options and can suggest a lower monthly repayment if the profile is eligible.'],
  ['Is the process paperless?', 'Yes. The experience is built as a secure, fully digital journey with guided verification and tracking.']
];

const Count = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const target = Number(String(value).replace(/[^0-9]/g, ''));
    let raf;
    const start = performance.now();
    const tick = now => {
      const progress = Math.min(1, (now - start) / 900);
      setCount(Math.round(target * progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <>{count.toLocaleString('en-IN')}{suffix}</>;
};

const Section = ({ eyebrow, title, subtitle, children, className = '' }) => (
  <motion.section
    initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className={className}
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {(eyebrow || title) && (
        <div className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300/90">{eyebrow}</p>}
          {title && <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>}
          {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </motion.section>
);

const StatCard = ({ label, value }) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
    <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
  </div>
);

const Hero = () => {
  const relief = 10200;

  return (
    <section id="home" className="overflow-hidden bg-[#040814] text-white">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[36rem] w-[36rem] rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-[-12%] top-[8%] h-[32rem] w-[32rem] rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-[-14%] left-[22%] h-[30rem] w-[30rem] rounded-full bg-blue-500/15 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1440 1200" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="mesh" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <path d="M-80 230C180 80 380 90 580 200s300 120 460 40 240-100 440 20" stroke="url(#mesh)" strokeWidth="2" />
            <path d="M-120 540C180 400 340 380 560 500s360 130 520 60 250-80 420 10" stroke="url(#mesh)" strokeWidth="1.5" />
            <path d="M20 840c250-120 420-110 610-10s310 150 470 80 250-60 400 10" stroke="url(#mesh)" strokeWidth="1.5" />
          </svg>
          {['₹', '₹', '₹', '₹', '₹', '₹'].map((symbol, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl font-black text-white/10"
              initial={{ y: 0, x: 0 }}
              animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
              transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
              style={{ left: `${8 + index * 15}%`, top: `${10 + (index % 3) * 22}%` }}
            >
              {symbol}
            </motion.div>
          ))}
          {['card', 'emi', 'bank', 'graph', 'chart'].map((label, index) => (
            <motion.div
              key={label}
              className="absolute rounded-[1.7rem] border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.3em] text-slate-200 backdrop-blur-2xl"
              initial={{ y: 0, rotate: -2 }}
              animate={{ y: [0, -12, 0], rotate: [index % 2 ? 2 : -2, index % 2 ? -3 : 3, index % 2 ? 2 : -2] }}
              transition={{ duration: 8 + index, repeat: Infinity, ease: 'easeInOut' }}
              style={{ right: `${6 + index * 11}%`, top: `${18 + (index % 2) * 18}%` }}
            >
              {label}
            </motion.div>
          ))}
        </div>

        <section className="relative mx-auto grid min-h-screen max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 backdrop-blur-xl">
                <FiStar className="text-amber-300" />
                AI Powered Financial Freedom Solution
              </span>

              <div className="max-w-4xl space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/90">
                  Struggling with Multiple EMIs?
                </p>
                <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
                  Turn Them Into One Smart Financial Plan.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  Managing multiple EMIs doesn&apos;t have to be stressful. MGFINA helps you intelligently consolidate your financial obligations by comparing suitable lending options from multiple trusted Banks &amp; NBFCs through one secure digital platform.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button as="a" href="#eligibility" className="rounded-full px-6 py-4 text-sm font-semibold">
                  Check My Eligibility <FiArrowRight />
                </Button>
                <Button as="a" href="#calculators" variant="glass" className="rounded-full px-6 py-4 text-sm font-semibold">
                  Calculate My New EMI
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                {['Secure', 'Paperless', 'Multi Bank Comparison', 'AI Assisted'].map(item => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
                    <FiCheck className="text-cyan-300" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[38rem] rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_0_60px_rgba(14,165,233,0.15)] backdrop-blur-2xl"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-400/15 blur-2xl" />
              <div className="absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-violet-400/10 blur-2xl" />

              <div className="rounded-[1.7rem] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Current Situation</p>
                    <h3 className="mt-2 text-2xl font-semibold">Multiple EMIs today</h3>
                  </div>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">Live</span>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    ['Home Loan', '₹18,500'],
                    ['Personal Loan', '₹9,800'],
                    ['Credit Card EMI', '₹6,700']
                  ].map(([label, amount]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="text-sm text-slate-300">{label}</span>
                      <strong className="text-base text-white">{amount}</strong>
                    </div>
                  ))}
                </div>

                <div className="my-6 flex items-center justify-center text-slate-500">
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="mx-3 text-sm">↓</span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <div className="rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">Animated AI Transformation</p>
                      <h4 className="mt-2 text-2xl font-semibold">MGFINA Smart Plan</h4>
                    </div>
                    <FiShield className="text-2xl text-cyan-300" />
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <StatCard label="Suggested EMI" value="₹24,800/month*" />
                    <StatCard label="Potential Monthly Relief" value={`₹${relief.toLocaleString('en-IN')}*`} />
                    <StatCard label="Eligible Banks" value="18+" />
                    <StatCard label="Approval Probability" value="92%" />
                  </div>

                  <Button className="mt-5 w-full rounded-full px-5 py-4 font-semibold">
                    Generate My Smart Plan
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Section eyebrow="Why Debt Consolidation?" title="Stop Managing Multiple Payments." subtitle="Start Managing Your Financial Future." className="py-24">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {benefits.map(item => (
            <motion.div key={item} whileHover={{ y: -6 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                <FiCheck />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section eyebrow="How MGFINA Works" title="A clear, premium journey in six steps" className="bg-[#071022] py-24">
        <div className="grid gap-4 lg:grid-cols-6">
          {[
            'Tell Us About Your Loans',
            'AI Reviews Your Financial Profile',
            'Compare Multiple Lending Options',
            'Choose The Best Offer',
            'Complete Digital Verification',
            'Receive Your Consolidation Plan'
          ].map((step, index) => (
            <motion.div key={step} whileHover={{ y: -4 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-200">{index + 1}</div>
              <p className="mt-4 text-base font-semibold leading-7 text-white">{step}</p>
              {index < 5 && <p className="mt-4 text-2xl text-white/30">↓</p>}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="eligibility" eyebrow="AI Analysis" title="Interactive financial dashboard" subtitle="A live-style snapshot of debt pressure, affordability, and future savings." className="py-24">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map(item => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/55 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200"><FiPieChart />Monthly savings outlook</div>
              <div className="mt-5 flex items-end gap-4">
                {[42, 58, 66, 78, 92, 100].map((bar, index) => (
                  <div key={index} className="flex-1">
                    <div className="flex h-44 items-end rounded-3xl border border-white/10 bg-slate-950/55 p-3">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${bar}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full rounded-2xl bg-gradient-to-t from-cyan-500 to-violet-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {['Credit Health', 'Cash Flow', 'Monthly Savings'].map((label, i) => (
                <div key={label} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white"><Count value={[86, 88, 79][i]} suffix="%" /></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Benefits" title="Built to feel like a premium financial product" className="py-24">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {['One Smart EMI', 'Better Monthly Planning', 'Lower Financial Stress', 'Personalized Lending Options', 'Dedicated Loan Expert', 'Paperless Process', 'Real Time Tracking'].map(item => (
            <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                <FiStar />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Documents" title="Glass-card document checklist" className="py-24">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {documents.map(item => (
            <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <FiCreditCard className="text-2xl text-cyan-300" />
              <p className="mt-4 text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Bank Partners" title="Trusted by 50+ banking and NBFC brands" subtitle="Hoverable grayscale-to-color logos with an infinite style feel." className="bg-[#071022] py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} className="flex w-max gap-4">
              {[...bankLogos, ...bankLogos, ...bankLogos].map((logo, index) => (
                <div key={`${logo}-${index}`} className="group flex h-20 w-44 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/60 grayscale transition duration-300 hover:grayscale-0 hover:border-cyan-300/30 hover:bg-white/10">
                  <span className="text-xl font-black tracking-[0.2em] text-slate-300 transition group-hover:text-white">{logo}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Success Metrics" title="Proof of scale and speed" className="py-24">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['50+', 'Bank Partners'],
            ['25,000+', 'Customers Assisted'],
            ['₹500Cr+', 'Loan Assistance'],
            ['60 Seconds', 'Eligibility Check']
          ].map(([value, label]) => (
            <div key={label} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <p className="text-4xl font-semibold text-white"><Count value={value} /></p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="A few quick answers" className="bg-[#071022] py-24">
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                {question}
                <FiChevronDown className="transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <div className="sticky bottom-0 z-20 border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">Ready to simplify your financial life?</p>
          </div>
          <Button className="rounded-full bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-slate-100">
            Check Eligibility <FiArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
