import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import loans from '@/data/loans.json';
import { PageHero, Section } from '@/components/platform';

export default function LoanProducts(){return <><PageHero eyebrow="Loan marketplace" title="Finance for every meaningful next step" description="Explore transparent loan products, understand the essentials and start one guided application."/><Section title="Find the right product"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{loans.map(x=><Link key={x.slug} to={`/loans/${x.slug}`} className="surface-card group p-6 transition hover:-translate-y-1"><span className="text-sm font-bold text-blue-600">From {x.rate || '0'}% p.a.</span><h2 className="mt-3 text-2xl font-bold">{x.name}</h2><p className="mt-3 leading-6 text-slate-600">{x.description}</p><div className="mt-6 flex justify-between border-t border-slate-100 pt-5 text-sm"><span>Up to {x.maxAmount}</span><FiArrowRight className="text-lg transition group-hover:translate-x-1"/></div></Link>)}</div></Section></>}
