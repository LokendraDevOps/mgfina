import { useState } from 'react';
import { FiBell, FiGlobe, FiLock, FiShield, FiToggleLeft, FiToggleRight, FiUsers } from 'react-icons/fi';

const Settings = () => {
  const [twoFactor, setTwoFactor] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [darkOnly, setDarkOnly] = useState(false);

  return (
    <div className="admin-shell space-y-6">
      <section className="surface-card bg-slate-950 p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Workspace Settings</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Security, access, and preferences</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          Fine-tune authentication, notification rules, and workspace behavior before the backend is connected.
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_.9fr]">
        <div className="space-y-6">
          {[
            { title: 'Security', icon: FiShield, note: 'JWT, refresh token, and session timeout configuration.' },
            { title: 'Notifications', icon: FiBell, note: 'Email, in-app, and escalation alert preferences.' },
            { title: 'Workspace', icon: FiGlobe, note: 'Timezone, language, and appearance defaults.' },
          ].map(item => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="surface-card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h2>
                    <p className="text-sm text-slate-500">{item.note}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-4">
                  {item.title === 'Security' && (
                    <ToggleRow label="Two-factor authentication" enabled={twoFactor} onToggle={() => setTwoFactor(v => !v)} />
                  )}
                  {item.title === 'Notifications' && (
                    <ToggleRow label="Email alerts" enabled={emailAlerts} onToggle={() => setEmailAlerts(v => !v)} />
                  )}
                  {item.title === 'Workspace' && (
                    <ToggleRow label="Prefer dark workspace" enabled={darkOnly} onToggle={() => setDarkOnly(v => !v)} />
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="space-y-6">
          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiLock />Access policy</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Sessions expire after 30 minutes of inactivity.</p>
              <p>• Password reset flow is ready for production integration.</p>
              <p>• Protected routes redirect unauthenticated users to login.</p>
            </div>
          </article>

          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiUsers />Roles and access</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Admin: full workspace control</p>
              <p>• Manager: CRM, reports, and partners</p>
              <p>• Executive: customers, applications, and follow-ups</p>
              <p>• Support: documents and notifications</p>
            </div>
          </article>

          <article className="surface-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FiToggleLeft />Feature flags</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>• Global search enabled</p>
              <p>• Quick actions enabled</p>
              <p>• Audit logs enabled</p>
              <p>• Automation center enabled</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

const ToggleRow = ({ label, enabled, onToggle }) => (
  <button type="button" onClick={onToggle} className="flex w-full items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-left">
    <span className="text-sm font-semibold text-slate-800">{label}</span>
    <span className="text-2xl text-blue-600">{enabled ? <FiToggleRight /> : <FiToggleLeft />}</span>
  </button>
);

export default Settings;
