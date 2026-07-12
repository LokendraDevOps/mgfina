import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiAlertTriangle, FiShield } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import useCountUp from '@/hooks/useCountUp';

const employmentOptions = ['Salaried', 'Self-employed', 'Business owner', 'Freelancer'];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const formatMoney = (value) => `₹${Number(value || 0).toLocaleString('en-IN')}`;

const getStatus = (score) => {
  if (score >= 90) return { label: 'Healthy', tone: 'from-emerald-400 to-green-500', accent: 'text-emerald-300', ring: 'stroke-emerald-400' };
  if (score >= 70) return { label: 'Good', tone: 'from-sky-400 to-blue-500', accent: 'text-sky-300', ring: 'stroke-sky-400' };
  if (score >= 50) return { label: 'Needs Improvement', tone: 'from-orange-400 to-amber-500', accent: 'text-amber-300', ring: 'stroke-orange-400' };
  return { label: 'Attention Required', tone: 'from-rose-400 to-red-500', accent: 'text-rose-300', ring: 'stroke-rose-400' };
};

const useFinancialScore = (form) => {
  return useMemo(() => {
    const monthlyIncome = Number(form.monthlyIncome) || 0;
    const monthlyEmi = Number(form.monthlyEmi) || 0;
    const existingLoans = Number(form.existingLoans) || 0;
    const creditOutstanding = Number(form.creditCardOutstanding) || 0;
    const employment = form.employmentType;

    const emiRatio = monthlyIncome > 0 ? (monthlyEmi / monthlyIncome) * 100 : 100;
    const debtLoad = monthlyIncome > 0 ? ((monthlyEmi + creditOutstanding * 0.08 + existingLoans * 4500) / monthlyIncome) * 100 : 100;

    const employmentBonus =
      {
        Salaried: 12,
        'Self-employed': 8,
        'Business owner': 6,
        Freelancer: 5
      }[employment] ?? 0;

    const penalty = emiRatio * 0.85 + debtLoad * 0.65 + existingLoans * 4.5 + (creditOutstanding / 10000) * 2.5;
    const score = clamp(Math.round(100 - penalty + employmentBonus), 0, 100);

    const status = getStatus(score);
    const readiness = clamp(Math.round(score * 0.88 + employmentBonus), 0, 100);
    const stability = clamp(Math.round(100 - debtLoad * 1.25 + employmentBonus), 0, 100);

    const insights = [];

    if (emiRatio >= 35) {
      insights.push('Reduce monthly EMI burden before applying.');
    }
    if (existingLoans >= 3) {
      insights.push('Avoid applying for multiple loans until current commitments are reduced.');
    }
    if (creditOutstanding >= monthlyIncome * 0.6) {
      insights.push('Prioritize credit card repayment to lower revolving debt.');
    }
    if (monthlyIncome > 0 && monthlyEmi / monthlyIncome < 0.28) {
      insights.push('Your repayment balance looks manageable for guided borrowing.');
    }
    if (employment === 'Salaried') {
      insights.push('Stable employment may improve lender confidence.');
    }
    if (insights.length < 3) {
      insights.push('Compare better lending options before finalizing any new application.');
    }

    return {
      score,
      status,
      emiRatio: monthlyIncome > 0 ? Math.round(emiRatio) : 0,
      debtLoad: Math.round(debtLoad),
      stability,
      readiness,
      insights: insights.slice(0, 4)
    };
  }, [form]);
};

const FieldShell = ({ label, children, className = '' }) => (
  <label className={`block ${className}`}>
    <span className="mb-2 block text-sm font-semibold text-slate-200">{label}</span>
    {children}
  </label>
);

const DarkInput = ({ label, ...props }) => (
  <FieldShell label={label}>
    <input
      {...props}
      className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/15"
    />
  </FieldShell>
);

const DarkSelect = ({ label, children, className = '', ...props }) => (
  <FieldShell label={label} className={className}>
    <select
      {...props}
      className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/15"
    >
      {children}
    </select>
  </FieldShell>
);

const MetricCard = ({ label, value, detail, tone = 'text-white' }) => (
  <motion.div whileHover={{ y: -4 }} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] backdrop-blur-xl">
    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
    <p className={`mt-2 text-2xl font-semibold tracking-tight ${tone}`}>{value}</p>
    <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
  </motion.div>
);

const CircularScore = ({ score, status }) => {
  const [ref, animatedScore] = useCountUp(score);
  const size = 220;
  const stroke = 14;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  return (
    <div ref={ref} className="relative mx-auto grid w-fit place-items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <defs>
          <linearGradient id="healthScoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.12)" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#healthScoreGradient)"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Financial Health Score</p>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-white">{animatedScore}</p>
          <p className={`mt-2 text-sm font-semibold uppercase tracking-[0.24em] ${status.accent}`}>{status.label}</p>
        </div>
      </div>
    </div>
  );
};

const FinancialHealthScore = () => {
  const [form, setForm] = useState({
    monthlyIncome: 85000,
    monthlyEmi: 22000,
    existingLoans: 2,
    creditCardOutstanding: 45000,
    employmentType: 'Salaried'
  });

  const result = useFinancialScore(form);

  const summaryCards = [
    {
      label: 'Monthly EMI Ratio',
      value: `${result.emiRatio}%`,
      detail: 'Share of income currently going to EMIs.'
    },
    {
      label: 'Loan Burden',
      value: `${clamp(result.debtLoad, 0, 100)}%`,
      detail: 'Estimated pressure from active commitments.'
    },
    {
      label: 'Financial Stability',
      value: `${result.stability}%`,
      detail: 'A mock stability view based on repayment capacity.'
    },
    {
      label: 'Borrowing Readiness',
      value: `${result.readiness}%`,
      detail: 'How prepared the profile looks for a new loan.'
    }
  ];

  return (
    <section id="financial-health" className="relative overflow-hidden bg-[#06101d] py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[-12%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-18%] left-[28%] h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="page-shell relative py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-10 max-w-3xl">
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur-xl">
              Financial Health Engine
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Know Your Financial Health Before Applying
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Get an instant overview of your financial profile and understand how prepared you are before applying for a loan.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.42)] backdrop-blur-2xl sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <DarkInput label="Monthly Income" type="number" value={form.monthlyIncome} onChange={e => setForm({ ...form, monthlyIncome: e.target.value })} />
                <DarkInput label="Monthly EMI" type="number" value={form.monthlyEmi} onChange={e => setForm({ ...form, monthlyEmi: e.target.value })} />
                <DarkInput label="Existing Loans" type="number" value={form.existingLoans} onChange={e => setForm({ ...form, existingLoans: e.target.value })} />
                <DarkInput label="Credit Card Outstanding" type="number" value={form.creditCardOutstanding} onChange={e => setForm({ ...form, creditCardOutstanding: e.target.value })} />
                <DarkSelect label="Employment Type" className="sm:col-span-2" value={form.employmentType} onChange={e => setForm({ ...form, employmentType: e.target.value })}>
                  {employmentOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </DarkSelect>
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
                  <FiShield className="text-cyan-300" />
                  AI insights
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  {result.insights.map((insight) => (
                    <li key={insight} className="flex gap-3">
                      <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-300" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.35)] backdrop-blur-2xl sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <CircularScore score={result.score} status={result.status} />

                  <div className="space-y-5">
                    <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r ${result.status.tone} px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/20`}>
                      <FiTrendingUp />
                      {result.status.label}
                    </div>
                    <p className="text-sm leading-7 text-slate-300">
                      Your financial health score updates instantly as you adjust the inputs, giving you a clear view of readiness before applying.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <MetricCard label="Monthly EMI Ratio" value={`${result.emiRatio}%`} detail="How much of your income is already committed to EMIs." tone="text-white" />
                      <MetricCard label="Loan Burden" value={`${result.debtLoad}%`} detail="A combined view of EMI, card debt, and active loans." tone="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {summaryCards.map((card) => (
                  <MetricCard key={card.label} {...card} />
                ))}
              </div>

              <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Borrowing readiness</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {formatMoney(form.monthlyIncome)} income profile
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
                      {result.score >= 70
                        ? 'Your profile appears positioned for a guided loan comparison experience.'
                        : 'A few improvements may help you present a stronger borrowing profile.'}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <FiAlertTriangle className={`text-lg ${result.score >= 70 ? 'text-emerald-300' : 'text-orange-300'}`} />
                    <span>{result.status.label}</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button as="a" href="/apply" className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 hover:bg-slate-100">
                    Check My Eligibility <FiArrowRight />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialHealthScore;
