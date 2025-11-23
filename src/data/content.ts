// ============================================
// DATA FILE - Easy to swap content here
// ============================================

export interface Project {
  id: string;
  title: string;
  category: string[];
  year: string;
  description: string;
  role: string;
  tools: string[];
  image: string; // Placeholder for now - replace with actual image paths
  gridSize?: 'normal' | 'wide' | 'tall';
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Ethereal Brand Identity',
    category: ['Branding', 'Web'],
    year: '2024',
    description: 'Complete visual identity system for a luxury wellness brand.',
    role: 'Creative Director, Designer',
    tools: ['Figma', 'After Effects', 'Cinema 4D'],
    image: '/demo-image.jpg', // Replace with actual image path
    gridSize: 'wide',
  },
  {
    id: '2',
    title: 'Motion Reel 2024',
    category: ['Motion', 'Experimental'],
    year: '2024',
    description: 'Annual showcase of motion design experiments and client work.',
    role: 'Motion Designer',
    tools: ['After Effects', 'Cinema 4D', 'Premiere'],
    image: '/demo-image.jpg', // Replace with actual image path
    gridSize: 'tall',
  },
  {
    id: '3',
    title: 'Print Campaign Series',
    category: ['Print', 'Branding'],
    year: '2023',
    description: 'Editorial design and print materials for a cultural institution.',
    role: 'Art Director',
    tools: ['InDesign', 'Illustrator', 'Photoshop'],
    image: '/demo-image.jpg', // Replace with actual image path
    gridSize: 'normal',
  },
  {
    id: '4',
    title: 'Interactive Web Experience',
    category: ['Web', 'Experimental'],
    year: '2024',
    description: 'Immersive storytelling platform with custom interactions.',
    role: 'Frontend Developer, Designer',
    tools: ['React', 'Three.js', 'GSAP'],
    image: '/demo-image.jpg', // Replace with actual image path
    gridSize: 'normal',
  },
  {
    id: '5',
    title: 'Product Launch Video',
    category: ['Motion'],
    year: '2024',
    description: '60-second launch film for a tech startup.',
    role: 'Director, Editor',
    tools: ['Premiere', 'After Effects', 'DaVinci Resolve'],
    image: '/demo-image.jpg', // Replace with actual image path
    gridSize: 'wide',
  },
  {
    id: '6',
    title: 'Editorial Design System',
    category: ['Print', 'Branding'],
    year: '2023',
    description: 'Typography and layout system for a quarterly magazine.',
    role: 'Designer',
    tools: ['InDesign', 'Illustrator'],
    image: '/demo-image.jpg', // Replace with actual image path
    gridSize: 'tall',
  },
  {
    id: '7',
    title: 'Brand Guidelines',
    category: ['Branding', 'Print'],
    year: '2023',
    description: 'Comprehensive brand book for a financial services company.',
    role: 'Design Lead',
    tools: ['Figma', 'InDesign'],
    image: '/demo-image.jpg', // Replace with actual image path
    gridSize: 'normal',
  },
  {
    id: '8',
    title: '3D Product Visualization',
    category: ['Motion', 'Experimental'],
    year: '2024',
    description: 'Photorealistic 3D renders and animations for e-commerce.',
    role: '3D Artist',
    tools: ['Cinema 4D', 'Octane', 'After Effects'],
    image: '/demo-image.jpg', // Replace with actual image path
    gridSize: 'normal',
  },
  {
    id: '9',
    title: 'Web App Redesign',
    category: ['Web'],
    year: '2024',
    description: 'Complete UI/UX overhaul for a SaaS platform.',
    role: 'UX Designer, Frontend Developer',
    tools: ['Figma', 'React', 'TypeScript'],
    image: '/demo-image.jpg', // Replace with actual image path
    gridSize: 'wide',
  },
];

export const filterCategories = ['All', 'Web', 'Motion', 'Print', 'Experimental'];

export const heroProjects = projects.slice(0, 6);

export const aboutCapabilities = [
  'Brand Identity & Strategy',
  'Web Design & Development',
  'Motion Graphics & Animation',
  'Print & Editorial Design',
  '3D Visualization',
  'Interactive Experiences',
];

export const timelineItems: TimelineItem[] = [
  {
    year: '2024',
    title: 'Award Recognition',
    description: 'Featured in Design Annual 2024',
  },
  {
    year: '2023',
    title: 'Major Client Launch',
    description: 'Rebranded Fortune 500 company',
  },
  {
    year: '2022',
    title: 'Studio Expansion',
    description: 'Opened second location',
  },
  {
    year: '2021',
    title: 'First Major Campaign',
    description: 'Worked with global tech brand',
  },
];

export const heroContent = {
  label: 'Digital Studio — 2025',
  headline: 'We design loud stories for quiet brands.',
  subtext: 'Parallel Grid Studio is a creative collective specializing in brand identity, digital experiences, and motion design. We craft visual narratives that resonate deeply and perform brilliantly.',
};

export const portfolioContent = {
  title: 'Selected Work',
  description: 'A curated selection of projects spanning brand identity, digital experiences, and motion design.',
};

export const aboutContent = {
  title: 'About Parallel Grid Studio',
  description: 'We are a multidisciplinary design studio founded on the belief that great design bridges the gap between strategy and emotion. Our work spans brand identity, digital experiences, and motion design for clients who value thoughtful, impactful creative solutions.',
};

export const contactContent = {
  title: 'Ready when you are.',
  description: 'Let\'s discuss your next project.',
};

