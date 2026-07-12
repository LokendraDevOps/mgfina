import { getBankLogo } from '@/constants/bankLogos';

const BankLogo = ({ name, className = '', imgClassName = '' }) => {
  const logo = getBankLogo(name);

  if (!logo) {
    return null;
  }

  return (
    <img
      src={logo.src}
      alt={logo.alt}
      loading="lazy"
      className={['object-contain', className, imgClassName].filter(Boolean).join(' ')}
    />
  );
};

export default BankLogo;
