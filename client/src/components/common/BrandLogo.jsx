const assets = {
  colorFull: '/logo.svg',
  whiteFull: '/logo-white.png',
  blackFull: '/logo-black.png',
  colorIcon: '/icon-only.svg'
};

const BrandLogo = ({ variant = 'full', tone = 'brand', className = '' }) => {
  const sourceMap = {
    brand: {
      full: assets.colorFull,
      icon: assets.colorIcon
    },
    light: {
      full: assets.whiteFull,
      icon: assets.whiteFull
    },
    dark: {
      full: assets.blackFull,
      icon: assets.colorIcon
    }
  };

  const source = sourceMap[tone]?.[variant] || assets.colorFull;

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
