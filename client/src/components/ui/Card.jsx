const Card = ({ children, className = '' }) => {
  return <div className={`surface-card p-6 ${className}`.trim()}>{children}</div>;
};

export default Card;
