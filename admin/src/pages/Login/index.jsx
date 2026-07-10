import { useState } from 'react';
import { FiArrowRight, FiLock, FiShield } from 'react-icons/fi';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import BrandLogo from '@/components/common/BrandLogo';
import { useAuth } from '@/context/AuthContext';

const SUPERADMIN = {
  email: 'Superloki',
  password: 'Loki@321',
  user: {
    name: 'Superloki',
    role: 'Superadmin',
    email: 'Superloki'
  }
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    setIsSubmitting(true);
    login({
      accessToken: `access-${Date.now()}`,
      refreshToken: `refresh-${Date.now()}`,
      rememberMe: true,
      user: SUPERADMIN.user,
      issuedAt: Date.now(),
    });

    navigate(location.state?.from?.pathname || '/dashboard', { replace: true });
    setIsSubmitting(false);
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

            <div className="mt-8 space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <FiLock className="text-blue-600" />
                  Superadmin direct login
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Click once to enter the workspace as Superloki. No username or password entry is required on this screen.
                </p>
              </div>

              <button
                type="button"
                onClick={onSubmit}
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Enter as Superloki
                <FiArrowRight />
              </button>
            </div>

            <div className="mt-8 rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-700">Demo access</p>
              <div className="mt-3 space-y-1 text-sm text-slate-600">
                <p>Account: Superloki</p>
                <p>Role: Superadmin</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
