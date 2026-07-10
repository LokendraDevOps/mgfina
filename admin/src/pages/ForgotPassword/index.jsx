import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft, FiMail, FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BrandLogo from '@/components/common/BrandLogo';

const ForgotPassword = () => {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="admin-shell flex min-h-screen items-center justify-center">
        <div className="surface-card w-full max-w-xl border-slate-800 bg-white p-8 text-slate-900">
          <BrandLogo variant="full" className="h-10 w-auto" />
          <h1 className="mt-8 text-3xl font-bold tracking-tight">Reset access</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            We’ll prepare a secure reset link for the production workflow when your backend is connected.
          </p>

          {sent ? (
            <div className="mt-8 rounded-3xl bg-emerald-50 p-6 text-emerald-800">
              Reset instructions have been staged for <strong>admin@mgfina.com</strong>.
            </div>
          ) : (
            <form onSubmit={handleSubmit(() => setSent(true))} className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Business email</span>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <FiMail className="text-slate-400" />
                  <input
                    type="email"
                    className="w-full bg-transparent outline-none"
                    placeholder="admin@mgfina.com"
                    {...register('email', { required: 'Email is required' })}
                  />
                </div>
                {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email.message}</span>}
              </label>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 font-semibold text-white">
                Send reset link
                <FiSend />
              </button>
            </form>
          )}

          <Link to="/login" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
            <FiArrowLeft />
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
