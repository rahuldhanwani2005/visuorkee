import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/visuorkeofficial/', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/visuorke/', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#030712] border-t border-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <Anchor className="h-7 w-7 text-cyan-400 transform rotate-45 transition-transform duration-500" />
              <span className="text-2xl font-black text-white tracking-tighter">
                Visu<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">orke</span>
              </span>
            </Link>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Anchoring your digital dreams to reality through innovative design and high-performance development.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center">
              <span className="w-6 h-[2px] bg-cyan-400 mr-3"></span>
              Expertise
            </h4>
            <ul className="space-y-4">
              {['Web Development', 'Graphic Design', 'Video Editing', 'UI/UX Design', 'Digital Marketing'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-cyan-400 transition-all mr-0 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center">
              <span className="w-6 h-[2px] bg-cyan-400 mr-3"></span>
              Company
            </h4>
            <ul className="space-y-4">
              {['About', 'Portfolio', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-cyan-400 transition-all mr-0 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center">
              <span className="w-6 h-[2px] bg-cyan-400 mr-3"></span>
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="bg-gray-900 p-3 rounded-xl text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Email Us</p>
                  <a href="mailto:contact@visuorke.com" className="text-gray-300 hover:text-cyan-400 transition-colors">contact@visuorke.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-gray-900 p-3 rounded-xl text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Call Us</p>
                  <a href="tel:+917878539633" className="text-gray-300 hover:text-cyan-400 transition-colors">+91 78785-39633</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-gray-500 text-sm flex items-center">
              © 2024 Visuorke. Crafted with <Heart className="h-4 w-4 text-cyan-400 mx-2" /> from Visuorke
            </p>
            <p className="text-gray-600 text-xs font-medium tracking-wider uppercase">
              Designed and Developed by <span className="text-cyan-400/80 hover:text-cyan-400 transition-colors cursor-default">Rahul Dhanwani</span>
            </p>
          </div>
          <div className="flex space-x-8 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;