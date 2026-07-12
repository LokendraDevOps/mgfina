import { useMemo, useState } from 'react';
import { PageHero, Section } from '@/components/platform';

const money = n => `₹${Math.round(n).toLocaleString('en-IN')}`;

const balanceAfterPayments = (amount, monthlyRate, emi, months) => {
  if (monthlyRate === 0) return Math.max(0, amount - emi * months);
  const growth = (1 + monthlyRate) ** months;
  return Math.max(0, amount * growth - emi * ((growth - 1) / monthlyRate));
};

export default function EmiCalculator() {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(9.5);
  const [years, setYears] = useState(10);

  const calc = useMemo(() => {
    const months = years * 12;
    const monthlyRate = rate / 1200;
    const emi = monthlyRate === 0
      ? amount / months
      : amount * monthlyRate * (1 + monthlyRate) ** months / ((1 + monthlyRate) ** months - 1);
    const total = emi * months;
    return { emi, total, interest: total - amount, monthlyRate };
  }, [amount, rate, years]);

  const schedule = useMemo(() => Array.from({ length: years }, (_, index) => {
    const startMonth = index * 12;
    const endMonth = Math.min((index + 1) * 12, years * 12);
    const startBalance = balanceAfterPayments(amount, calc.monthlyRate, calc.emi, startMonth);
    const endBalance = balanceAfterPayments(amount, calc.monthlyRate, calc.emi, endMonth);
    const principal = startBalance - endBalance;
    const interest = calc.emi * (endMonth - startMonth) - principal;

    return {
      year: index + 1,
      principal: Math.max(0, principal),
      interest: Math.max(0, interest),
      balance: endBalance,
    };
  }), [amount, calc.emi, calc.monthlyRate, years]);

  const angle = calc.interest / calc.total * 360;

  return <>
    <PageHero eyebrow="Financial toolkit" title="Plan every EMI with clarity" description="Adjust your loan details to instantly understand monthly payments, total interest and year-by-year repayment."/>
    <Section>
      <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <div className="surface-card space-y-8 p-7">{[['Loan amount',amount,100000,10000000,50000,setAmount,'₹'],['Interest rate',rate,5,25,.1,setRate,'%'],['Tenure',years,1,30,1,setYears,' years']].map(([l,v,min,max,step,set,suffix])=><label key={l} className="block"><span className="flex justify-between font-semibold"><span>{l}</span><strong className="text-blue-600">{suffix==='₹'?money(v):`${v}${suffix}`}</strong></span><input className="mt-4 w-full accent-blue-600" type="range" value={v} min={min} max={max} step={step} onChange={e=>set(Number(e.target.value))}/></label>)}</div>
        <div className="surface-card p-7 text-slate-900"><div className="grid items-center gap-8 sm:grid-cols-2"><div className="mx-auto grid h-52 w-52 place-items-center rounded-full" style={{background:`conic-gradient(#2563eb 0 ${360-angle}deg,#93c5fd ${360-angle}deg)`}}><div className="grid h-36 w-36 place-items-center rounded-full bg-white text-center"><span className="text-sm text-slate-500">Monthly EMI<strong className="block text-2xl text-slate-900">{money(calc.emi)}</strong></span></div></div><div className="space-y-5">{[['Principal',amount],['Interest paid',calc.interest],['Total amount',calc.total]].map(x=><div key={x[0]} className="flex justify-between border-b border-slate-100 pb-4"><span className="text-slate-500">{x[0]}</span><strong>{money(x[1])}</strong></div>)}</div></div></div>
      </div>
    </Section>
    <Section title="Yearly repayment schedule" className="bg-slate-100"><div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white"><table className="w-full min-w-[650px] text-left"><thead className="bg-slate-950 text-white"><tr>{['Year','Principal paid','Interest paid','Balance'].map(x=><th className="p-4" key={x}>{x}</th>)}</tr></thead><tbody>{schedule.map(x=><tr className="border-t border-slate-100" key={x.year}><td className="p-4 font-bold">Year {x.year}</td><td className="p-4">{money(x.principal)}</td><td className="p-4">{money(x.interest)}</td><td className="p-4">{money(x.balance)}</td></tr>)}</tbody></table></div></Section>
  </>;
}
