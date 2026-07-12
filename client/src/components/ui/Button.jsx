const variants = {
  primary:
    'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-[0_12px_30px_rgba(79,70,229,0.25)] hover:-translate-y-0.5 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 hover:shadow-[0_16px_40px_rgba(79,70,229,0.35)]',
  secondary:
    'border border-slate-300 bg-white text-slate-900 hover:-translate-y-0.5 hover:bg-slate-50',
  glass:
    'border border-white/15 bg-white/5 text-white shadow-[0_10px_30px_rgba(15,23,42,0.14)] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_16px_40px_rgba(15,23,42,0.2)]',
  ghost: 'bg-transparent text-slate-900 hover:bg-slate-100'
};

const Button = ({ children, className = '', variant = 'primary', as = 'button', ...props }) => {
  const Component = as;

  return (
    <Component
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300',
        variants[variant] || variants.primary,
        className
      ].join(' ')}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
