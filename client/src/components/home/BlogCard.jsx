import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import { createArtDataUrl } from '@/utils/homeArt';

const BlogCard = ({ blog }) => {
  const image = createArtDataUrl({
    title: blog.title,
    subtitle: blog.category,
    accentA: blog.accent[0],
    accentB: blog.accent[1],
    background: '#f8fbff'
  });

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_20px_60px_-34px_rgba(15,23,42,0.18)]"
    >
      <img src={image} alt={blog.title} className="h-48 w-full object-cover" loading="lazy" />
      <div className="p-6">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
          {blog.category}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-slate-950">{blog.title}</h3>
        <p className="mt-3 text-sm text-slate-600">{blog.date}</p>
        <Button as="a" href="#home" variant="secondary" className="mt-6 w-full">
          Read More <FiArrowRight />
        </Button>
      </div>
    </motion.article>
  );
};

export default BlogCard;
