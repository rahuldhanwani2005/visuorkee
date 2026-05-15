import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Team = () => {
  const team = [
    {
      name: 'Nikhil Sachan',
      role: 'Founder & CEO',
      image: '/img/Nikhil.png',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Shivam Dwivedi',
      role: 'CTO',
      image: '/img/Shivam.png',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section id="team" className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          {/* Blinking Dot & Label */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-gray-400 text-sm font-bold uppercase tracking-[0.3em]">Our Team</span>
          </div>

          <ScrollReveal width="100%">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter max-w-4xl mx-auto">
              We bring a wealth of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">skills</span> from a wide range of backgrounds
            </h2>
          </ScrollReveal>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative w-full sm:w-[320px] lg:w-[380px]"
            >
              <div className="glass-panel rounded-[40px] p-10 border border-gray-800 transition-all duration-500 hover:border-green-500/30 hover:-translate-y-2 bg-gray-900/40">
                <div className="relative mb-8 flex justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-green-500/50 transition-colors duration-500">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=111&color=fff&size=200`;
                      }}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-500 font-medium mb-8">{member.role}</p>

                  <div className="flex justify-center space-x-4">
                    <a 
                      href={member.linkedin}
                      className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.twitter}
                      className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
