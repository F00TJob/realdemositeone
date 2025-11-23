import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/content';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      // Trap focus
      const modal = document.getElementById('project-modal');
      if (modal) {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key !== 'Tab') return;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        };

        modal.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => {
          document.body.style.overflow = '';
          modal.removeEventListener('keydown', handleTabKey);
        };
      }
    }
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="project-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Content */}
        <motion.div
          className="relative z-10 bg-dark-surface border border-dark-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-dark-border hover:bg-dark-border/80 text-white focus:outline-none focus:ring-2 focus:ring-neon-primary z-20"
            aria-label="Close modal"
          >
            ×
          </button>

          {/* Hero Image */}
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-dark-surface to-dark-border relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
              {/* Replace with: <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
              Hero Image Placeholder
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs text-gray-400 border border-dark-border px-2 py-1 rounded"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">{project.description}</p>

            {/* Details */}
            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-dark-border">
              <div>
                <h3 className="text-sm text-gray-400 mb-2">Role</h3>
                <p className="text-white">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-2">Tools</h3>
                <p className="text-white">{project.tools.join(', ')}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-2">Year</h3>
                <p className="text-white">{project.year}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

