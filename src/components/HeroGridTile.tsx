import { motion } from 'framer-motion';
import { Project } from '../data/content';

interface HeroGridTileProps {
  project: Project;
  index: number;
}

export default function HeroGridTile({ project, index }: HeroGridTileProps) {
  return (
    <motion.div
      className="group relative bg-dark-surface border border-dark-border rounded-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Placeholder Image */}
      <div className="w-full h-32 md:h-40 bg-gradient-to-br from-dark-surface to-dark-border relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-neon-primary/20 to-neon-secondary/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs">
          {/* Replace with actual image */}
          Image
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="text-sm font-semibold mb-1">{project.title}</h4>
        <p className="text-xs text-gray-400 mb-2">
          {project.category.join(' / ')}
        </p>
        
        {/* Description on hover */}
        <motion.p
          className="text-xs text-gray-300"
          initial={{ opacity: 0, height: 0 }}
          whileHover={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {project.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

