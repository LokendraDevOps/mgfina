import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiPieChart, FiShield, FiTrendingUp } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import useCountUp from '@/hooks/useCountUp';

const loanTypeOptions = ['Personal Loan', 'Business Loan', 'Home Loan', 'Education Loan', 'Car Loan', 'Gold Loan'];
const tenureOptions = [
  { label: '3 Years', value: 3 },
  { label: '5 Years', value: 5 },
  { label: '10 Years', value: 10 },
  { label: '15 Years', value: 15 },
  { label: '20 Years', value: 20 }
];
const employmentOptions = ['Salaried', 'Self-employed', 'Business owner', 'Freelancer'];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const money = (value) => `₹${Number(value || 0).toLocaleString('en-IN')}`;

const FieldShell = ({ label, children, className = '' }) => (
  <label className={`block ${className}`}>
    <span className="mb-2 block text-sm font-semibold text-slate-200">{label}</span>
    {children}
  </label>
);

const FieldInput = ({ label, ...props }) => (
  <FieldShell label={label}>
    <input
      {...props}
      className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/15"
    />
  </FieldShell>
);

const FieldSelect = ({ label, children, className = '', ...props }) => (
  <FieldShell label={label} className={className}>
    <select
      {...props}
      className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/15"
    >
      {children}
    </select>
  </FieldShell>
);

const deriveCapacity = ({ monthlyIncome, monthlyEmi, employmentType, loanType, loanTenure }) => {
  const income = Number(monthlyIncome) || 0;
  const emi = Number(monthlyEmi) || 0;
  const tenure = Number(loanTenure) || 0;

  const employmentBoost =
    {
      Salaried: 0.08,
      'Self-employed': 0.05,
      'Business owner': 0.045,
      Freelancer: 0.04
    }[employmentType] ?? 0.04;

  const baseRatio =
    {
      'Personal Loan': 0.42,
      'Business Loan': 0.36,
      'Home Loan': 0.55,
      'Education Loan': 0.38,
      'Car Loan': 0.32,
      'Gold Loan': 0.48
    }[loanType] ?? 0.4;

  const tenureBoost = clamp(tenure / 25, 0.08, 0.18);
  const emiPenalty = income > 0 ? clamp(emi / income, 0, 1) * 0.7 : 0.7;
  const capacityScore = clamp(Math.round((baseRatio + employmentBoost + tenureBoost - emiPenalty) * 100), 0, 100);
  const debtRatio = income > 0 ? clamp(Math.round((emi / income) * 100), 0, 100) : 0;
  const comfortableAmount = clamp(Math.round(income * (10 + capacityScore / 12 + tenureBoost * 10 - debtRatio / 14)), 250000, 50000000);
  const estimatedEmi = Math.round((comfortableAmount * (7.75 + debtRatio / 18)) / (tenure * 12 * 100));
  const financialSafety =
    capacityScore >= 85 ? 'Excellent' : capacityScore >= 70 ? 'Strong' : capacityScore >= 50 ? 'Moderate' : 'Caution';

  return {
    comfortableAmount,
    estimatedEmi,
    debtRatio,
    capacityScore,
    financialSafety
  };
};

const Gauge = ({ value, statusLabel }) => {
  const [ref, animatedValue] = useCountUp(value);
  const size = 210;
  const stroke = 14;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedValue / 100) * circumference;

  return (
    <div ref={ref} className="relative mx-auto grid w-fit place-items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <defs>
          <linearGradient id="capacityGauge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.12)" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#capacityGauge)"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.95, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Borrowing Capacity</p>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-white">{animatedValue}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{statusLabel}</p>
        </div>
      </div>
    </div>
  );
};

const ProgressLine = ({ label, value }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span className="text-slate-300">{label}</span>
      <span className="font-semibold text-white">{value}%</span>
    </div>
    <div className="h-2 overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${clamp(value, 0, 100)}%` }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
      />
    </div>
  </div>
);

const MetricCard = ({ label, value, detail, tone = 'text-white' }) => (
  <motion.div whileHover={{ y: -4 }} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.24)] backdrop-blur-xl">
    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
    <p className={`mt-2 text-2xl font-semibold tracking-tight ${tone}`}>{value}</p>
    <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
  </motion.div>
);

const SmartBorrowingCapacity = () => {
  const [form, setForm] = useState({
    monthlyIncome: 85000,
    monthlyEmi: 22000,
    employmentType: 'Salaried',
    loanType: 'Personal Loan',
    loanTenure: 20
  });

  const result = useMemo(() => deriveCapacity(form), [form]);

  const insights = [
    result.debtRatio <= 35 ? 'Your debt ratio is healthy.' : 'Lower existing EMI will improve borrowing capacity.',
    result.capacityScore >= 70 ? 'You may comfortably increase borrowing capacity.' : 'Keeping the loan size conservative is safer right now.',
    result.comfortableAmount >= 3000000 ? 'Longer tenure reduces monthly EMI.' : 'A longer tenure may help reduce repayment pressure.',
    result.estimatedEmi <= 30000 ? 'Approval chances improve when obligations stay balanced.' : 'Compare better lending options to optimize cash flow.'
  ];

  const summaryBars = [
    { label: 'Monthly EMI Ratio', value: result.debtRatio },
    { label: 'Borrowing Capacity', value: result.capacityScore },
    { label: 'Financial Safety Level', value: result.capacityScore >= 85 ? 92 : result.capacityScore >= 70 ? 80 : result.capacityScore >= 50 ? 64 : 42 },
    { label: 'Approval Comfort', value: result.capacityScore >= 70 ? 88 : result.capacityScore >= 50 ? 68 : 38 }
  ];

  return (
    <section id="smart-borrowing-capacity" className="relative overflow-hidden bg-[#07111e] py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12%] top-[-10%] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-15%] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
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
              Smart Borrowing Capacity™
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Find how much you can comfortably borrow based on your financial profile.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              This is an intelligent financial planning tool, not just a loan calculator.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.4)] backdrop-blur-2xl sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <FieldInput label="Monthly Income" type="number" value={form.monthlyIncome} onChange={e => setForm({ ...form, monthlyIncome: e.target.value })} />
                <FieldInput label="Monthly EMI" type="number" value={form.monthlyEmi} onChange={e => setForm({ ...form, monthlyEmi: e.target.value })} />
                <FieldSelect label="Employment Type" value={form.employmentType} onChange={e => setForm({ ...form, employmentType: e.target.value })}>
                  {employmentOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </FieldSelect>
                <FieldSelect label="Loan Type" value={form.loanType} onChange={e => setForm({ ...form, loanType: e.target.value })}>
                  {loanTypeOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </FieldSelect>
                <FieldSelect label="Loan Tenure" className="sm:col-span-2" value={form.loanTenure} onChange={e => setForm({ ...form, loanTenure: e.target.value })}>
                  {tenureOptions.map(option => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </FieldSelect>
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
                  <FiShield className="text-cyan-300" />
                  AI insights
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  {insights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.35)] backdrop-blur-2xl sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <Gauge value={result.capacityScore} statusLabel={result.financialSafety} />

                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/20">
                      <FiTrendingUp />
                      {result.financialSafety}
                    </div>
                    <p className="text-sm leading-7 text-slate-300">
                      This mock planner estimates the borrowing amount that can remain comfortable for your cash flow.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <MetricCard label="Estimated Comfortable Loan Amount" value={money(result.comfortableAmount)} detail="A premium planning estimate based on your input profile." />
                      <MetricCard label="Estimated Monthly EMI" value={money(result.estimatedEmi)} detail="Projected EMI for the selected borrowing horizon." />
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {summaryBars.map((bar) => (
                  <motion.div key={bar.label} whileHover={{ y: -4 }} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.24)] backdrop-blur-xl">
                    <ProgressLine label={bar.label} value={bar.value} />
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  <MetricCard label="Comfortable Loan" value={money(result.comfortableAmount)} detail="Right-size borrowing estimate." tone="text-white" />
                  <MetricCard label="Debt Ratio" value={`${result.debtRatio}%`} detail="Current EMI against monthly income." tone="text-white" />
                  <MetricCard label="Financial Capacity" value={result.financialSafety} detail="A quick health check for borrowing confidence." tone="text-white" />
                  <MetricCard label="Estimated EMI" value={money(result.estimatedEmi)} detail="Expected monthly outflow for the planned tenure." tone="text-white" />
                  <MetricCard label="Suggested Loan Tenure" value={`${form.loanTenure} Years`} detail="Longer tenures may reduce repayment pressure." tone="text-white" />
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Right panel snapshot</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">₹32,50,000</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Comfortable Loan · Debt Ratio 34% · Financial Capacity Excellent · Estimated EMI ₹27,800 · Suggested Loan Tenure 20 Years
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <FiPieChart className="text-lg text-cyan-300" />
                    <span>Premium planning view</span>
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

export default SmartBorrowingCapacity;
