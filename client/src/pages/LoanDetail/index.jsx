import { Link, useParams } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiFileText, FiPercent, FiShield } from 'react-icons/fi';
import loans from '@/data/loans.json';
import faqs from '@/data/faqs.json';
import Button from '@/components/ui/Button';
import { FAQComponent, LoanFeatureCard, PageHero, Section } from '@/components/platform';

const LoanDetail = () => {
  const { slug } = useParams();
  const loan = loans.find(item => item.slug === slug);
  if (!loan) return <div className="page-shell py-24 text-center"><h1 className="text-3xl font-bold">Loan product not found</h1><Button as={Link} to="/loans" className="mt-6">View all loans</Button></div>;
  const amount = loan.property ? 5000000 : loan.business ? 1500000 : 500000;
  const months = loan.property ? 240 : 60;
  const monthlyRate = loan.rate / 1200;
  const emi = loan.rate ? Math.round(amount * monthlyRate * (1 + monthlyRate) ** months / ((1 + monthlyRate) ** months - 1)) : 0;
  const related = loans.filter(item => item.slug !== slug).slice(0, 3);
  return <>
    <PageHero eyebrow="MG Fina loan solutions" title={loan.tagline} description={loan.description}>
      <Button as={Link} to={`/apply?loan=${loan.slug}`} className="bg-blue-600 hover:bg-blue-500">Apply now <FiArrowRight/></Button>
      <Button as={Link} to="/eligibility" variant="secondary">Check eligibility</Button>
    </PageHero>
    <Section className="-mt-8 relative z-10 !pt-0"><div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:grid-cols-3"><div><p className="text-sm text-slate-500">Interest rate from</p><strong className="mt-1 block text-2xl">{loan.rate ? `${loan.rate}% p.a.` : 'Card-specific'}</strong></div><div><p className="text-sm text-slate-500">Loan amount</p><strong className="mt-1 block text-2xl">{loan.maxAmount}</strong></div><div><p className="text-sm text-slate-500">Tenure</p><strong className="mt-1 block text-2xl">{loan.tenure}</strong></div></div></Section>
    <Section title={`Why choose a ${loan.name}?`}><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{loan.benefits.map((x,i)=><LoanFeatureCard key={x} title={x} icon={[FiShield,FiPercent,FiCheckCircle,FiFileText][i]}>Clear terms and guided support at every step of your journey.</LoanFeatureCard>)}</div></Section>
    <Section title="Eligibility and documents" className="bg-slate-100"><div className="grid gap-6 lg:grid-cols-2"><div className="surface-card p-7"><h3 className="text-xl font-bold">Who can apply</h3><ul className="mt-5 space-y-4">{loan.eligibility.map(x=><li key={x} className="flex gap-3 text-slate-600"><FiCheckCircle className="mt-1 shrink-0 text-emerald-600"/>{x}</li>)}</ul></div><div className="surface-card p-7"><h3 className="text-xl font-bold">Documents required</h3><ul className="mt-5 space-y-4">{loan.documents.map(x=><li key={x} className="flex gap-3 text-slate-600"><FiFileText className="mt-1 shrink-0 text-blue-600"/>{x}</li>)}</ul></div></div></Section>
    {loan.rate > 0 && <Section title="A simple EMI example" intro="Indicative calculation only; your actual offer may vary."><div className="grid gap-6 rounded-3xl bg-slate-950 p-7 text-white sm:grid-cols-4"><div><small className="text-slate-400">Loan amount</small><strong className="block text-xl">₹{amount.toLocaleString('en-IN')}</strong></div><div><small className="text-slate-400">Rate</small><strong className="block text-xl">{loan.rate}%</strong></div><div><small className="text-slate-400">Tenure</small><strong className="block text-xl">{months} months</strong></div><div><small className="text-blue-300">Estimated EMI</small><strong className="block text-2xl">₹{emi.toLocaleString('en-IN')}</strong></div></div></Section>}
    <Section title="Frequently asked questions" className="bg-slate-100"><FAQComponent items={faqs.slice(0,5)}/></Section>
    <Section title="You may also explore"><div className="grid gap-5 md:grid-cols-3">{related.map(x=><Link to={`/loans/${x.slug}`} key={x.slug} className="surface-card group p-6"><p className="text-sm font-bold text-blue-600">From {x.rate}% p.a.</p><h3 className="mt-2 text-xl font-bold">{x.name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{x.description}</p><span className="mt-5 inline-flex items-center gap-2 font-bold">Learn more <FiArrowRight className="transition group-hover:translate-x-1"/></span></Link>)}</div></Section>
    <section className="bg-blue-600 py-16 text-center text-white"><div className="page-shell py-0"><h2 className="text-3xl font-bold">Ready to take the next step?</h2><p className="mt-3 text-blue-100">Complete one guided application in just a few minutes.</p><Button as={Link} to={`/apply?loan=${loan.slug}`} className="mt-7 bg-white text-blue-700 hover:bg-blue-50">Apply for {loan.name}</Button></div></section>
  </>;
};
export default LoanDetail;
