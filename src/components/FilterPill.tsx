import { motion } from 'framer-motion';

interface FilterPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterPill({ label, isActive, onClick }: FilterPillProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-neon-primary focus:ring-offset-2 focus:ring-offset-dark-bg
        ${isActive 
          ? 'bg-neon-primary text-dark-bg' 
          : 'bg-dark-surface text-gray-400 hover:text-white hover:bg-dark-border'
        }
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
}

