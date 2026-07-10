import { motion } from 'framer-motion';
import { createArtDataUrl } from '@/utils/homeArt';

const CityCard = ({ city }) => {
  const image = createArtDataUrl({
    title: city.name,
    subtitle: city.region,
    accentA: city.accent[0],
    accentB: city.accent[1],
    background: '#ffffff'
  });

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_20px_60px_-34px_rgba(15,23,42,0.2)]"
    >
      <div className="relative">
        <img src={image} alt={city.name} className="h-56 w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80 transition group-hover:opacity-90" />
        <div className="absolute bottom-0 left-0 p-5 text-white">
          <h3 className="text-2xl font-semibold">{city.name}</h3>
          <p className="mt-1 text-sm text-slate-200">{city.region}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default CityCard;
