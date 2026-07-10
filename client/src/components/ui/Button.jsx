const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={[
        'inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200',
        className
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
