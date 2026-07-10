import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowRight, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import BrandLogo from '@/components/common/BrandLogo';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="admin-shell flex min-h-screen items-center justify-center">
        <div className="surface-card w-full max-w-xl border-slate-800 bg-white p-8 text-slate-900">
          <BrandLogo variant="full" className="h-10 w-auto" />
          <h1 className="mt-8 text-3xl font-bold tracking-tight">Create a new password</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">This screen is ready for a secure backend reset flow later.</p>
          {done ? (
            <div className="mt-8 rounded-3xl bg-blue-50 p-6 text-blue-800">Password updated. You can now sign in again.</div>
          ) : (
            <form onSubmit={handleSubmit(() => { setDone(true); setTimeout(() => navigate('/login'), 1200); })} className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">New password</span>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <FiLock className="text-slate-400" />
                  <input type="password" className="w-full bg-transparent outline-none" {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Use 8+ characters' } })} />
                </div>
                {errors.password && <span className="mt-1 block text-xs text-red-600">{errors.password.message}</span>}
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Confirm password</span>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <FiLock className="text-slate-400" />
                  <input type="password" className="w-full bg-transparent outline-none" {...register('confirm', { required: 'Please confirm the password' })} />
                </div>
                {errors.confirm && <span className="mt-1 block text-xs text-red-600">{errors.confirm.message}</span>}
              </label>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 font-semibold text-white">
                Update password
                <FiArrowRight />
              </button>
            </form>
          )}
          <Link to="/login" className="mt-8 inline-flex text-sm font-semibold text-blue-600">Back to login</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
