import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, ArrowRight, Code, Cpu, Sparkles, Globe, Rocket } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: 'Web Development', icon: <Code className="w-5 h-5" />, delay: 0 },
    { name: 'Graphic Design', icon: <Globe className="w-5 h-5" />, delay: 0.1 },
    { name: 'Video Editing', icon: <Rocket className="w-5 h-5" />, delay: 0.2 },
    { name: 'UI/UX Design', icon: <Sparkles className="w-5 h-5" />, delay: 0.3 }
  ];

  return (
    <section id="home" className="min-h-screen bg-[#030712] flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1e293b,transparent)]"></div>
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px]" style={{ opacity: 0.5 }}></div>
      </div>

      {/* Gooey Background Animation */}
      <div className="gooey-container opacity-30">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Digital Excellence Redefined</span>
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-tight">
            Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">The Future</span>
          </h1>
          <div className="flex flex-col items-center justify-center mt-6 space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <div className="flex items-center space-x-3">
               <Anchor className="h-10 w-10 text-cyan-400 transform rotate-45" />
               <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                 Visu<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">orke</span>
               </span>
            </div>
          </div>
        </motion.div>

        {/* Tagline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-xl md:text-3xl text-gray-300 font-light mb-6">
            Anchoring Your Digital Dreams to Reality
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            We're a cutting-edge creative agency crafting immersive digital experiences 
            through expert web solutions and stunning visual storytelling.
          </p>
        </motion.div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + service.delay }}
                className="bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 transition-all duration-500 group premium-card relative overflow-hidden"
              >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {service.icon}
              </div>
              <span className="font-bold text-lg block text-cyan-400">
                {service.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Main CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button
            onClick={scrollToAbout}
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Discover Our Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button
            className="px-10 py-5 rounded-2xl font-bold text-lg text-white border border-gray-700 hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            View Portfolio
          </button>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;