import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowRight, FiLock, FiShield, FiUser } from 'react-icons/fi';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import BrandLogo from '@/components/common/BrandLogo';
import { useAuth } from '@/context/AuthContext';

const ACCOUNTS = {
  superadmin: {
    name: 'Superloki',
    role: 'Superadmin',
    loginId: 'Superloki',
    password: 'Loki@321',
  },
  admin: {
    name: 'demo',
    role: 'Admin',
    loginId: 'demo',
    password: 'Demo@321',
  },
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [activeAccount, setActiveAccount] = useState('superadmin');
  const { register, handleSubmit, setError, resetField, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      password: '',
      rememberMe: true,
    },
  });

  const account = ACCOUNTS[activeAccount];

  const onSubmit = async data => {
    if (data.password.trim() !== account.password) {
      setError('password', { type: 'manual', message: 'Wrong password for this account' });
      return;
    }

    login({
      accessToken: `access-${Date.now()}`,
      refreshToken: `refresh-${Date.now()}`,
      rememberMe: data.rememberMe,
      user: {
        name: account.name,
        role: account.role,
        email: account.loginId,
      },
      issuedAt: Date.now(),
    });

    navigate(location.state?.from?.pathname || '/dashboard', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.14),transparent_28%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] text-white">
      <div className="admin-shell flex min-h-screen items-center justify-center py-10">
        <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <section className="surface-card overflow-hidden border-slate-800 bg-slate-950 text-white shadow-2xl">
            <div className="border-b border-white/10 p-8">
              <BrandLogo variant="full" className="h-10 w-auto" />
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-blue-300">Enterprise FinTech OS</p>
              <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight">
                The first login should feel like opening a control room.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                MGFINA OS brings loan origination, CRM, partner intelligence, and automation into one premium workspace.
              </p>
            </div>

            <div className="grid gap-4 p-8 sm:grid-cols-2">
              {[
                ['JWT Ready', 'Access and refresh tokens prepared for backend wiring.'],
                ['Session Timeout', 'Idle timeout is enabled for production-style behavior.'],
                ['Remember Me', 'Switches storage between session and persistent mode.'],
                ['Protected Routes', 'Unauthorized visitors are redirected to login.'],
              ].map(([title, text]) => (
                <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-300">
                    <FiShield />
                    {title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card bg-white p-8 text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Sign in</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">Welcome back</h2>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-white">
                <FiLock className="text-xl" />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {Object.entries(ACCOUNTS).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setActiveAccount(key);
                      resetField('password');
                    }}
                    className={`rounded-2xl border px-4 py-4 text-left transition ${
                      activeAccount === key
                        ? 'border-blue-500 bg-blue-50 text-slate-900'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <FiUser className={activeAccount === key ? 'text-blue-600' : 'text-slate-400'} />
                      {item.role}
                    </div>
                    <p className="mt-2 text-lg font-bold">{item.name}</p>
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Selected account</p>
                <p className="mt-1 text-sm font-bold text-slate-900">{account.name}</p>
                <p className="text-xs text-slate-500">{account.role}</p>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Password</span>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <FiLock className="text-slate-400" />
                  <input
                    type="password"
                    className="w-full bg-transparent outline-none"
                    placeholder={`Enter ${account.role} password`}
                    {...register('password', { required: 'Password is required' })}
                  />
                </div>
                {errors.password && <span className="mt-1 block text-xs text-red-600">{errors.password.message}</span>}
              </label>

              <div className="flex items-center justify-between gap-4 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" {...register('rememberMe')} />
                  Remember me
                </label>
                <Link to="/forgot-password" className="font-semibold text-blue-600 hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Enter as {account.name}
                <FiArrowRight />
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
