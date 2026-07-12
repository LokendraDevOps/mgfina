const variants = {
  primary:
    'bg-slate-900 text-white shadow-lg shadow-slate-900/15 hover:-translate-y-0.5 hover:bg-slate-800',
  secondary:
    'border border-slate-300 bg-white text-slate-800 hover:-translate-y-0.5 hover:bg-slate-50',
  ghost: 'bg-transparent text-slate-800 hover:bg-slate-100'
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
