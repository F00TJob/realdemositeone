import { motion } from 'framer-motion';
import { Project } from '../data/content';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const gridSpanClasses = {
    normal: 'md:col-span-1',
    wide: 'md:col-span-2',
    tall: 'md:col-span-1 md:row-span-2',
  };

  return (
    <motion.div
      className={`group cursor-pointer ${gridSpanClasses[project.gridSize || 'normal']}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full bg-dark-surface rounded-lg overflow-hidden border border-dark-border hover:border-neon-primary/50 transition-all duration-300">
        {/* Placeholder Image */}
        <div className="w-full h-64 md:h-80 bg-gradient-to-br from-dark-surface to-dark-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-primary/10 to-neon-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
            {/* Replace this with actual image: <img src={project.image} alt={project.title} /> */}
            Image Placeholder
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-2">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="text-xs text-gray-400 border border-dark-border px-2 py-1 rounded"
              >
                {cat}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-sm text-gray-400">{project.year}</p>

          {/* View Case Study Chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            <span className="text-sm text-neon-primary font-medium">
              View Case Study →
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

