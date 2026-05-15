import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.target) return;
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'contact@visuorke.com',
      link: 'mailto:contact@visuorke.com',
      color: 'cyan'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+91 78785-39633',
      link: 'tel:+917878539633',
      color: 'orange'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      details: 'Rajasthan, IND',
      link: '#',
      color: 'blue'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <ScrollReveal width="100%">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Collaborate</span>
            </h2>
          </ScrollReveal>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Ready to bring your digital vision to life? Let's discuss your project and create something exceptional together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[40px] p-10 md:p-12 border border-gray-800"
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="bg-cyan-400/10 p-3 rounded-2xl text-cyan-400">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Send us a message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <label htmlFor="name" className="block text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-3 group-focus-within:text-cyan-400 transition-colors">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/30 focus:bg-gray-900 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-3 group-focus-within:text-cyan-400 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/30 focus:bg-gray-900 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-3 group-focus-within:text-cyan-400 transition-colors">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/30 focus:bg-gray-900 transition-all duration-300 resize-none"
                  placeholder="Tell us about your digital dreams..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-gray-900 px-8 py-5 rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-500 flex items-center justify-center space-x-3 group"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-6 p-8 glass-panel rounded-3xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-500 group"
                >
                  <div className={`p-5 rounded-2xl bg-gray-900 border border-gray-800 text-cyan-400 group-hover:scale-110 transition-transform duration-500`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{info.title}</p>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{info.details}</h4>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Location Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-[40px] p-12 border border-gray-800 flex-1 flex flex-col items-center justify-center text-center group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b,transparent)] opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-cyan-400 mb-6 border border-gray-800 shadow-xl group-hover:animate-bounce">
                  <MapPin className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Our Headquarters</h3>
                <p className="text-gray-400 font-light">Jaipur, Rajasthan, India</p>
                <div className="mt-8 text-cyan-400 font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center cursor-pointer hover:text-white transition-colors">
                  <span>View on Map</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;