import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#030712]">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-panel rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Animated background lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <Zap className="h-16 w-16 text-cyan-400" />
            </motion.div>
            
            <ScrollReveal width="100%">
              <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Elevate</span> Your Brand?
              </h2>
            </ScrollReveal>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Join dozens of successful businesses that have transformed their digital presence with Visuorke. 
              Let's create something exceptional together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group bg-cyan-400 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-cyan-300 transition-all flex items-center justify-center space-x-3 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/portfolio"
                className="px-10 py-5 rounded-2xl font-bold text-lg text-white border border-gray-700 hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;