import React from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-cyan-400" />,
      title: 'Precision',
      description: 'Every pixel matters, every line of code counts'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-400" />,
      title: 'Collaboration',
      description: 'We work closely with clients to bring visions to life'
    },
    {
      icon: <Award className="h-8 w-8 text-green-400" />,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies'
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Gooey Background Animation */}
      <div className="gooey-container opacity-20">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <ScrollReveal width="100%">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Visuorke</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.4}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              We're a team of passionate creators, developers, and designers who believe 
              in the power of digital storytelling to transform businesses and connect people.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ScrollReveal width="100%">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="w-12 h-[2px] bg-cyan-400 mr-4"></span>
                Our Mission
              </h3>
            </ScrollReveal>
            <ScrollReveal width="100%" delay={0.3}>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                At Visuorke, we anchor your digital dreams to reality through innovative design 
                and development solutions. Our mission is to help businesses navigate the digital 
                landscape with confidence and creativity.
              </p>
            </ScrollReveal>
            <ScrollReveal width="100%" delay={0.5}>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                We combine technical expertise with artistic vision to create digital experiences 
                that not only look amazing but also drive results. From concept to launch, we're 
                your trusted partner in digital transformation.
              </p>
            </ScrollReveal>
          </motion.div>
          
          <ScrollReveal width="100%" direction="right" delay={0.6}>
            <div className="relative">
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-gray-800">
                 <img 
                  src="img/team.png"
                  alt="Team collaboration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative background shape */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-cyan-400/20 rounded-[40px] -z-10"></div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-8 transition-all duration-500 premium-card"
            >
              <div className="bg-gray-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-gray-800 group-hover:border-cyan-400/50 transition-colors">
                {value.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;