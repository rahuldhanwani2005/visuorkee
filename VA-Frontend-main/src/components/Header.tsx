import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Anchor, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`relative flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-900/80 backdrop-blur-xl border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative z-10">
            <Anchor className="h-7 w-7 text-cyan-400 transform rotate-45 transition-transform duration-500" />
            <span className="text-2xl font-black text-white tracking-tighter">
              Visu<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">orke</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-5 py-2 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 group ${
                  location.pathname === item.path ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navHighlight"
                    className="absolute inset-0 bg-cyan-400/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="absolute bottom-1 left-5 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-[calc(100%-40px)]"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center space-x-2 bg-white text-gray-900 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-cyan-400 transition-all glare-hover"
          >
            <span>Let's Talk</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-white hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="lg:hidden absolute top-full left-4 right-4 mt-4"
            >
              <div className="glass-panel p-8 rounded-[32px] border border-gray-800 shadow-2xl">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`text-2xl font-bold transition-all ${
                        location.pathname === item.path ? 'text-cyan-400 translate-x-2' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="bg-cyan-400 text-gray-900 px-8 py-4 rounded-2xl font-bold text-center mt-4 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;