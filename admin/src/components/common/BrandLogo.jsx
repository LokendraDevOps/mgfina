import { useTheme } from '@/context/ThemeContext';

const assets = {
  colorFull: '/logo.svg',
  whiteFull: '/logo-white.png',
  blackFull: '/logo-black.png',
  colorIcon: '/icon-only.svg'
};

const BrandLogo = ({ variant = 'full', className = '' }) => {
  const { isDark } = useTheme();
  const source =
    variant === 'icon'
      ? assets.colorIcon
      : isDark
        ? assets.whiteFull
        : assets.colorFull;

  return (
    <img
      src={source}
      alt="MGFINA Fincare Services LLP"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
};

export default BrandLogo;
