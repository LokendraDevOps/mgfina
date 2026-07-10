const PlaceholderPage = ({ title, description }) => {
  return (
    <section className="admin-shell">
      <div className="surface-card flex min-h-[280px] flex-col items-start justify-center gap-4 p-8">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
          Admin Console
        </span>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {title}
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlaceholderPage;
