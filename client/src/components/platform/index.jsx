import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiChevronDown, FiSearch, FiUploadCloud } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import BankLogo from '@/components/common/BankLogo';

export const PageHero = ({ eyebrow, title, description, children }) => (
  <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,.28),transparent_32%)]" />
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="page-shell relative py-0">
      <p className="mb-4 text-sm font-bold uppercase tracking-[.22em] text-blue-400">{eyebrow}</p>
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
      {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
    </motion.div>
  </section>
);

export const Section = ({ title, intro, children, className = '' }) => (
  <section className={`py-16 sm:py-20 ${className}`}>
    <div className="page-shell py-0">
      {title && <div className="mb-10 max-w-2xl"><h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>{intro && <p className="mt-3 leading-7 text-slate-600">{intro}</p>}</div>}
      {children}
    </div>
  </section>
);

export const LoanFeatureCard = ({ title, children, icon = FiCheck }) => {
  const Icon = icon;
  return <motion.div whileHover={{ y: -5 }} className="surface-card p-6"><span className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600"><Icon /></span><h3 className="font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{children}</p></motion.div>;
};

export const Input = ({ label, error, className = '', ...props }) => <label className={`block ${className}`}><span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span><input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" {...props}/>{error && <span className="mt-1 block text-xs text-red-600">{error.message}</span>}</label>;
export const Select = ({ label, error, children, className = '', ...props }) => <label className={`block ${className}`}><span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span><select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" {...props}>{children}</select>{error && <span className="mt-1 block text-xs text-red-600">{error.message}</span>}</label>;

export const ProgressBar = ({ value }) => <div className="h-2 overflow-hidden rounded-full bg-slate-100"><motion.div className="h-full rounded-full bg-blue-600" animate={{ width: `${value}%` }} /></div>;
export const Stepper = ({ steps, current }) => <div><div className="mb-4 flex items-center justify-between text-sm"><span className="font-bold text-blue-600">Step {current + 1} of {steps.length}</span><span className="text-slate-500">{steps[current]}</span></div><ProgressBar value={((current + 1) / steps.length) * 100} /></div>;

export const UploadBox = ({ label = 'Upload document', onChange }) => <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 p-7 text-center transition hover:border-blue-400 hover:bg-blue-50/50"><FiUploadCloud className="text-3xl text-blue-600"/><span className="mt-3 font-semibold text-slate-800">{label}</span><span className="mt-1 text-xs text-slate-500">PDF, JPG or PNG · up to 5 MB</span><input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={onChange}/></label>;

export const SearchBox = ({ value, onChange, placeholder = 'Search' }) => <div className="relative"><FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/><input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/></div>;

export const FAQComponent = ({ items }) => { const [open, setOpen] = useState(0); return <div className="space-y-3">{items.map((item, index) => <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-slate-900">{item.question}<FiChevronDown className={`shrink-0 transition ${open === index ? 'rotate-180' : ''}`}/></button><AnimatePresence initial={false}>{open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p className="px-5 pb-5 leading-7 text-slate-600">{item.answer}</p></motion.div>}</AnimatePresence></div>)}</div> };

export const SuccessCard = ({ title = 'Application submitted', description = 'Your details have been saved for this demo.' }) => <motion.div initial={{ scale: .94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-10 text-center"><span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-100 text-3xl text-emerald-600"><FiCheck/></span><h2 className="mt-6 text-3xl font-bold">{title}</h2><p className="mx-auto mt-3 max-w-md text-slate-600">{description}</p><Button as="a" href="/" className="mt-7">Back to home <FiArrowRight/></Button></motion.div>;

export const BankCard = ({ bank }) => <motion.article whileHover={{ y: -5 }} className="surface-card flex h-28 items-center justify-center p-6"><div className="flex h-full w-full items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-4 py-3"><BankLogo name={bank.name} className="max-h-12 w-full grayscale transition duration-300 hover:grayscale-0" /></div></motion.article>;
