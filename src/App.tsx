import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Section from './components/Section';
import Button from './components/Button';
import FilterPill from './components/FilterPill';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import HeroGridTile from './components/HeroGridTile';
import LetterGlitch from './components/LetterGlitch';
import {
  projects,
  filterCategories,
  heroProjects,
  aboutCapabilities,
  timelineItems,
  heroContent,
  portfolioContent,
  aboutContent,
  contactContent,
  Project,
} from './data/content';

function App() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => 
        p.category.some(cat => 
          cat.toLowerCase() === selectedFilter.toLowerCase()
        )
      );

  return (
    <div className="min-h-screen bg-dark-bg noise-overlay relative">
      {/* LetterGlitch Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={['#0a0a0a', '#00ff88', '#00d4ff']}
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-dark-bg/40 pointer-events-none" />
      </div>
      
      {/* Content Container - positioned above background */}
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-20 md:py-0">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm text-gray-400 mb-4 tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {heroContent.label}
          </motion.p>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {heroContent.headline}
          </motion.h1>
          
          <motion.p
            className="text-gray-300 mb-8 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {heroContent.subtext}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button onClick={scrollToPortfolio} variant="primary">
              View Selected Work
            </Button>
            <Button onClick={scrollToContact} variant="secondary">
              Book a Call
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Grid Wall */}
        <motion.div
          className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {heroProjects.map((project, index) => (
            <HeroGridTile key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </section>

      {/* Portfolio Grid Section */}
      <Section id="portfolio" className="relative" ref={portfolioRef}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{portfolioContent.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{portfolioContent.description}</p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filterCategories.map((category) => (
            <FilterPill
              key={category}
              label={category}
              isActive={selectedFilter === category}
              onClick={() => setSelectedFilter(category)}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-dark-surface/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left: About Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{aboutContent.title}</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">{aboutContent.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">Capabilities</h3>
              <ul className="space-y-2">
                {aboutCapabilities.map((capability, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-neon-primary rounded-full mr-3" />
                    {capability}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-8">Selected Clients / Milestones</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-dark-border" />
                
                <div className="space-y-8">
                  {timelineItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-12"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                        <div className="w-3 h-3 bg-neon-primary rounded-full border-2 border-dark-bg" />
                      </div>
                      
                      <div className="text-sm text-neon-primary font-medium mb-1">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact / CTA Section */}
      <Section id="contact" className="bg-gradient-to-br from-dark-surface to-dark-bg" ref={contactRef}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{contactContent.title}</h2>
            <p className="text-gray-400">{contactContent.description}</p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData);
              console.log('Form submitted:', data);
              // TODO: Wire to backend
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-primary focus:border-transparent text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-primary focus:border-transparent text-white"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                required
                className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-primary focus:border-transparent text-white"
              >
                <option value="">Select a range</option>
                <option value="under-10k">Under $10k</option>
                <option value="10k-25k">$10k - $25k</option>
                <option value="25k-50k">$25k - $50k</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="100k-plus">$100k+</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-primary focus:border-transparent text-white resize-none"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Send Message
            </Button>
          </motion.form>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-primary rounded"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-primary rounded"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-primary rounded"
              aria-label="Dribbble"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.885 11.441c-2.575-.422-4.943-.994-7.103-1.686.135-.423.274-.846.406-1.271 2.16.691 4.528 1.263 7.103 1.686.021.122.021.244.021.368-.001.124-.01.247-.027.369zm-3.328 4.335c-1.293-.99-2.69-1.791-4.155-2.405.188-.58.365-1.163.527-1.75 1.465.613 2.862 1.415 4.155 2.404.72.55 1.397 1.141 2.021 1.776-.196-.963-.518-1.888-.558-2.025zm-5.953 3.937c-1.831-1.276-3.537-2.935-4.985-4.828 1.437-1.893 3.153-3.553 4.985-4.828.297.62.581 1.246.85 1.878-1.695 1.18-3.156 2.66-4.31 4.405 1.154 1.745 2.615 3.225 4.31 4.405-.269.632-.553 1.258-.85 1.878zm-4.261-7.892c-.85-.144-1.667-.29-2.444-.437.134-.976.413-1.93.832-2.847 1.165.214 2.335.414 3.502.586-.271.95-.521 1.904-.75 2.863-.413.144-.83.29-1.25.437-.08-.976-.195-1.952-.345-2.923-.15.97-.265 1.947-.345 2.923zm-3.26 3.304c.196.963.518 1.888.558 2.024.72-.549 1.396-1.14 2.021-1.775 1.293-.99 2.69-1.791 4.155-2.404-.188-.58-.366-1.163-.527-1.75-1.465.613-2.862 1.415-4.155 2.404-.72.55-1.397 1.141-2.021 1.776.04.137.362 1.062.558 2.025zm-2.02-7.78c.85.144 1.667.29 2.444.437-.134.976-.413 1.93-.832 2.847-1.165-.214-2.335-.414-3.502-.586.271-.95.521-1.904.75-2.863.413-.144.83-.29 1.25-.437.08.976.195 1.952.345 2.923.15-.97.265-1.947.345-2.923zm3.26-3.303c-.196-.963-.518-1.888-.558-2.024-.72.549-1.396 1.14-2.021 1.775-1.293.99-2.69 1.791-4.155 2.404.188.58.366 1.163.527 1.75 1.465-.613 2.862-1.415 4.155-2.404.72-.55 1.397-1.141 2.021-1.776-.04-.137-.362-1.062-.558-2.025zm5.953-3.937c1.831 1.276 3.537 2.935 4.985 4.828-1.437 1.893-3.153 3.553-4.985 4.828-.297-.62-.581-1.246-.85-1.878 1.695-1.18 3.156-2.66 4.31-4.405-1.154-1.745-2.615-3.225-4.31-4.405.269-.632.553-1.258.85-1.878zm4.261 7.892c.85.144 1.667.29 2.444.437-.134.976-.413 1.93-.832 2.847-1.165-.214-2.335-.414-3.502-.586.271-.95.521-1.904.75-2.863.413-.144.83-.29 1.25-.437.08.976.195 1.952.345 2.923.15-.97.265-1.947.345-2.923z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      </div>
    </div>
  );
}

export default App;

