import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, X, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A modern e-commerce platform with advanced filtering and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete brand identity package including logo, color palette, and brand guidelines.',
      technologies: ['Illustrator', 'Photoshop', 'Figma'],
      link: '#'
    },
    {
      id: 3,
      title: 'Product Launch Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1574717024621-6becaaa0d4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Dynamic product launch video with motion graphics and professional editing.',
      technologies: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
      link: '#',
      isVideo: true
    },
    {
      id: 4,
      title: 'Mobile App UI',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Intuitive mobile app interface design with user-centered approach.',
      technologies: ['Figma', 'Principle', 'Sketch'],
      link: '#'
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional corporate website with CMS integration and SEO optimization.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 6,
      title: 'Marketing Campaign',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive marketing campaign with print and digital materials.',
      technologies: ['Photoshop', 'Illustrator', 'InDesign'],
      link: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'design', label: 'Design' },
    { key: 'video', label: 'Video' },
    { key: 'ui', label: 'UI/UX' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 bg-[#030712]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6"
            >
              Selected <span className="text-cyan-400">Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 font-light"
            >
              We take pride in our craft and the impact our work has on our clients' businesses.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-gray-900/50 p-2 rounded-2xl border border-gray-800 backdrop-blur-md">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-cyan-400 text-gray-900 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative glass-panel rounded-3xl overflow-hidden cursor-pointer glare-hover"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Floating Tech Stack */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300">
                    {project.technologies?.slice(0, 2).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-full border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="bg-cyan-400 p-3 rounded-full translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                        <ArrowUpRight className="w-6 h-6 text-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-gray-900 rounded-[32px] max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="h-64 lg:h-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 lg:p-16">
                <span className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8">{selectedProject.title}</h3>
                
                <p className="text-gray-400 mb-10 text-xl leading-relaxed font-light">
                  {selectedProject.description}
                </p>
                
                <div className="mb-12">
                  <h4 className="text-white font-bold mb-6 flex items-center">
                    <span className="w-8 h-[2px] bg-cyan-400 mr-4"></span>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-5 py-2 bg-gray-800/50 text-gray-300 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={selectedProject.link}
                  className="inline-flex items-center space-x-3 bg-cyan-400 text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-cyan-300 transition-all shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                >
                  <span>Launch Project</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;