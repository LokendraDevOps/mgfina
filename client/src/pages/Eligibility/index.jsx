import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import Button from '@/components/ui/Button';
import { Input, PageHero, Section, Select, SuccessCard } from '@/components/platform';
import cities from '@/data/cities.json';
import loans from '@/data/loans.json';

export default function Eligibility() {
  const [result, setResult] = useState(null);
  const { control, register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { loan: 'personal-loan' },
  });

  const loanSlug = useWatch({ control, name: 'loan' });
  const product = loans.find(item => item.slug === loanSlug);

  const submit = data => {
    const income = Number(data.income);
    const score = Number(data.score);
    const amount = Number(data.amount);
    const eligible = income >= 20000 && score >= 600;

    setResult({
      eligible,
      amount: Math.min(amount, Math.round(income * (product?.property ? 80 : 18))),
      rate: (product?.rate || 10) + (score < 700 ? 1.5 : 0),
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Smart eligibility"
        title="Know where you stand in two minutes"
        description="Get a private, indicative result with no bureau check and no impact on your credit score."
      />
      <Section>
        <div className="mx-auto max-w-4xl surface-card p-6 sm:p-9">
          {result ? (
            <div>
              {result.eligible ? (
                <SuccessCard
                  title="You appear eligible"
                  description={`Indicative eligibility: ₹${result.amount.toLocaleString('en-IN')} from ${result.rate}% p.a. This is not a lending decision.`}
                />
              ) : (
                <SuccessCard
                  title="Let’s improve your options"
                  description="Based on the details entered, we could not find a likely match yet. A stronger income or credit profile may help."
                />
              )}
              <Button variant="secondary" onClick={() => setResult(null)} className="mx-auto flex">
                Check again
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(submit)} className="grid gap-5 sm:grid-cols-2">
              <Select label="Loan product" {...register('loan')}>
                <option value="">Select</option>
                {loans.map(item => <option key={item.slug} value={item.slug}>{item.name}</option>)}
              </Select>
              <Input
                label="Age"
                type="number"
                error={errors.age}
                {...register('age', {
                  required: 'Age is required',
                  min: { value: 18, message: 'Minimum age is 18' },
                  max: { value: 75, message: 'Maximum age is 75' },
                })}
              />
              <Input
                label="Monthly income"
                type="number"
                error={errors.income}
                {...register('income', {
                  required: 'Income is required',
                  min: { value: 10000, message: 'Enter a valid income' },
                })}
              />
              <Select label="Employment type" {...register('employment', { required: true })}>
                <option>Salaried</option>
                <option>Self-employed</option>
                <option>Business owner</option>
              </Select>
              <Select label="City" {...register('city')}>
                <option value="">Select city</option>
                {cities.slice(0, 30).map((item, index) => (
                  <option key={index}>{typeof item === 'string' ? item : item.name || item.city}</option>
                ))}
              </Select>
              <Input
                label="Credit score"
                type="number"
                error={errors.score}
                {...register('score', {
                  required: 'Credit score is required',
                  min: { value: 300, message: 'Score starts at 300' },
                  max: { value: 900, message: 'Maximum score is 900' },
                })}
              />
              <Input
                label="Loan amount"
                type="number"
                error={errors.amount}
                {...register('amount', { required: 'Amount is required' })}
              />
              <Input label="Loan tenure (months)" type="number" {...register('tenure', { required: true })} />
              {product?.property && <Input label="Property value" type="number" {...register('propertyValue', { required: true })} />}
              {product?.business && <Input label="Annual business turnover" type="number" {...register('turnover', { required: true })} />}
              <Button type="submit" className="sm:col-span-2">Check my eligibility</Button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
