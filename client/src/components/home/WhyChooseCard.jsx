import { motion } from 'framer-motion';

const WhyChooseCard = ({ item }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.22)] transition"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white transition group-hover:scale-105">
        {item.icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
    </motion.article>
  );
};

export default WhyChooseCard;
