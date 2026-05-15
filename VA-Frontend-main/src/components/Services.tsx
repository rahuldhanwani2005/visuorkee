import { Code, Palette, Video, Smartphone, ArrowRight, CheckCircle2, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const Services = () => {
  const services = [
    {
      id: 'web',
      icon: <Code className="h-10 w-10" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies. From responsive designs to complex web platforms.',
      features: ['React & Next.js', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
      color: 'cyan'
    },
    {
      id: 'design',
      icon: <Palette className="h-10 w-10" />,
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand story effectively. From logos to complete brand identities.',
      features: ['Brand Identity', 'Print Design', 'Digital Graphics', 'Packaging Design'],
      color: 'orange'
    },
    {
      id: 'video',
      icon: <Video className="h-10 w-10" />,
      title: 'Video Editing',
      description: 'Professional video production and editing services. Transform raw footage into compelling visual stories.',
      features: ['Commercial Videos', 'Social Media Content', 'Motion Graphics', 'Color Grading'],
      color: 'green'
    },
    {
      id: 'ui',
      icon: <Smartphone className="h-10 w-10" />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging digital experiences. Research-driven design solutions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      color: 'purple'
    },
    {
      id: 'marketing',
      icon: <Megaphone className="h-10 w-10" />,
      title: 'Digital Marketing',
      description: 'Strategic online marketing solutions to grow your brand presence and drive conversions across all platforms.',
      features: ['Social Media Ads', 'SEO & SEM', 'Content Marketing', 'Analytics & Reporting'],
      color: 'blue'
    }
  ];

  const getColorTheme = (color: string) => {
    const themes = {
      cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20 group-hover:border-cyan-400/50',
      orange: 'text-orange-400 bg-orange-400/10 border-orange-400/20 group-hover:border-orange-400/50',
      green: 'text-green-400 bg-green-400/10 border-green-400/20 group-hover:border-green-400/50',
      purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20 group-hover:border-purple-400/50',
      blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20 group-hover:border-blue-400/50'
    };
    return themes[color as keyof typeof themes] || themes.cyan;
  };

  return (
    <section id="services" className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <ScrollReveal width="100%">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Our Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.4}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              We combine strategy, design, and technology to deliver results that matter.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link key={service.id} to={`/services#${service.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group glass-panel rounded-3xl p-10 transition-all duration-500 premium-card ${getColorTheme(service.color)} cursor-pointer`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className={`p-4 rounded-2xl mb-6 lg:mb-0 w-fit ${getColorTheme(service.color)}`}>
                    {service.icon}
                  </div>
                  <ArrowRight className="hidden lg:block w-8 h-8 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 text-gray-300 group/item">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400/50 group-hover/item:text-cyan-400 transition-colors" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;