import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Shield, Crown, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { sendWhatsAppMessage } from '../utils/integrations';

const Services = () => {
  const [activeService, setActiveService] = useState('web');

  // Handle service from URL hash if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['web', 'design', 'video', 'ui', 'marketing'].includes(hash)) {
      setActiveService(hash);
    }
  }, []);

  const services = [
    { id: 'web', label: 'Web Development', icon: '💻' },
    { id: 'design', label: 'Graphic Design', icon: '🎨' },
    { id: 'video', label: 'Video Editing', icon: '🎬' },
    { id: 'ui', label: 'UI/UX Design', icon: '📱' },
    { id: 'marketing', label: 'Digital Marketing', icon: '📢' },
  ];

  const servicesData: Record<string, any[]> = {
    web: [
      {
        name: 'Starter',
        price: '₹14,999',
        description: 'Perfect for small businesses and personal brands.',
        features: ['1-3 Pages Landing Page', 'Mobile Responsive', 'SEO Optimization', '1 Month Support', 'Contact Form Integration'],
        popular: false,
        icon: <Zap className="w-6 h-6 text-cyan-400" />
      },
      {
        name: 'Business',
        price: '₹44,999',
        description: 'Advanced features for growing companies.',
        features: ['Up to 8 Pages', 'Custom UI Design', 'CMS Integration', 'Advanced Animation', '3 Months Support', 'Speed Optimization'],
        popular: true,
        icon: <Shield className="w-6 h-6 text-orange-400" />
      },
      {
        name: 'Enterprise',
        price: '₹1,49,999',
        description: 'Complex solutions for high-scale operations.',
        features: ['Custom Web Application', 'E-commerce System', 'Payment Gateway', 'Priority Support', 'Full Security Audit', 'API Integrations'],
        popular: false,
        icon: <Crown className="w-6 h-6 text-purple-400" />
      }
    ],
    design: [
      {
        name: 'Brand Identity',
        price: '₹7,999',
        description: 'Essential branding for new ventures.',
        features: ['Custom Logo Design', 'Color Palette', 'Typography', 'Business Card Design', '2 Revisions'],
        popular: false,
        icon: <Zap className="w-6 h-6 text-cyan-400" />
      },
      {
        name: 'Premium Brand',
        price: '₹19,999',
        description: 'Complete visual system for your business.',
        features: ['Logo Suite', 'Brand Guidelines', 'Social Media Kit', 'Stationery Design', 'Unlimited Revisions'],
        popular: true,
        icon: <Shield className="w-6 h-6 text-orange-400" />
      },
      {
        name: 'Marketing Pack',
        price: '₹29,999',
        description: 'All-in-one design solution for marketing.',
        features: ['Full Branding', 'Ad Templates', 'Pitch Deck', 'Flyer/Poster Design', 'Email Newsletter Design'],
        popular: false,
        icon: <Crown className="w-6 h-6 text-purple-400" />
      }
    ],
    video: [
      {
        name: 'Content Creator',
        price: '₹2,499',
        description: 'Engaging short-form content for social media.',
        features: ['Up to 60s Video', 'Motion Captions', 'Sound Design', 'Color Grading', 'Trend-ready Format'],
        popular: false,
        icon: <Zap className="w-6 h-6 text-cyan-400" />
      },
      {
        name: 'Corporate/Commercial',
        price: '₹14,999',
        description: 'Professional videos for business storytelling.',
        features: ['Up to 5 Min Video', 'Cinematic Transitions', 'Background Music', 'Professional VO', 'Brand Integration'],
        popular: true,
        icon: <Shield className="w-6 h-6 text-orange-400" />
      },
      {
        name: 'Master Production',
        price: '₹39,999',
        description: 'High-end production for maximum impact.',
        features: ['Multiple Video Package', 'Advanced Visual Effects', 'Custom Soundscape', 'Script Writing', 'Marketing Strategy'],
        popular: false,
        icon: <Crown className="w-6 h-6 text-purple-400" />
      }
    ],
    ui: [
      {
        name: 'UI Design Kit',
        price: '₹19,999',
        description: 'Modern interface design for your app idea.',
        features: ['Up to 5 Screens', 'Modern Visual Style', 'Source Figma File', 'Icon Set', 'Prototyping'],
        popular: false,
        icon: <Zap className="w-6 h-6 text-cyan-400" />
      },
      {
        name: 'Full UX/UI System',
        price: '₹54,999',
        description: 'End-to-end design focused on user success.',
        features: ['Full App/Web Design', 'User Research', 'Wireframing', 'Interactive Prototype', 'Design System'],
        popular: true,
        icon: <Shield className="w-6 h-6 text-orange-400" />
      },
      {
        name: 'UX Transformation',
        price: '₹89,999',
        description: 'Scale your product with expert design.',
        features: ['Product Audit', 'Complex Flows', 'Micro-interactions', 'Developer Handover', 'User Testing'],
        popular: false,
        icon: <Crown className="w-6 h-6 text-purple-400" />
      }
    ],
    marketing: [
      {
        name: 'Basic Growth',
        price: '₹9,999',
        description: 'Ideal for small businesses starting their digital journey.',
        features: ['Social Media Setup', 'Basic SEO', '2 Ads Campaigns', 'Monthly Report', 'Community Management'],
        popular: false,
        icon: <Zap className="w-6 h-6 text-cyan-400" />
      },
      {
        name: 'Business Accelerator',
        price: '₹24,999',
        description: 'Comprehensive marketing to scale your brand presence.',
        features: ['Full Social Media Management', 'Advanced SEO', 'Google & Meta Ads', 'Content Strategy', 'Email Marketing'],
        popular: true,
        icon: <Shield className="w-6 h-6 text-orange-400" />
      },
      {
        name: 'Market Dominance',
        price: '₹59,999',
        description: 'Ultimate strategy for industry leadership.',
        features: ['Omni-channel Marketing', 'Influencer Outreach', 'High-end Content Creation', 'Brand Positioning', 'Real-time Analytics'],
        popular: false,
        icon: <Crown className="w-6 h-6 text-purple-400" />
      }
    ]
  };

  const handleBuy = (plan: any) => {
    const serviceLabel = services.find(s => s.id === activeService)?.label || activeService;
    sendWhatsAppMessage(plan.name, serviceLabel, plan.price);
  };

  return (
    <PageTransition>
      <div className="bg-[#030712] min-h-screen pt-32 pb-20 overflow-hidden relative">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-bold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Our Services</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Service Plans</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Explore our premium service tiers designed to scale with your ambition. Contact us to find the perfect fit for your budget.
            </p>
          </div>

          {/* Service Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold transition-all duration-500 ${
                  activeService === service.id
                    ? 'bg-cyan-400 text-gray-900 shadow-[0_0_30px_rgba(34,211,238,0.3)] scale-105'
                    : 'bg-gray-900/50 text-gray-400 border border-gray-800 hover:border-cyan-400/30'
                }`}
              >
                <span className="text-xl">{service.icon}</span>
                <span>{service.label}</span>
              </button>
            ))}
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {servicesData[activeService].map((plan, index) => (
                <motion.div
                  key={`${activeService}-${plan.name}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative group glass-panel rounded-[40px] p-10 border transition-all duration-500 hover:-translate-y-2 ${
                    plan.popular 
                      ? 'border-cyan-400/50 bg-gray-900/80 shadow-[0_20px_50px_rgba(34,211,238,0.1)]' 
                      : 'border-gray-800 bg-gray-900/40 hover:border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center mb-6 border border-gray-700 group-hover:scale-110 transition-transform duration-500">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="mb-10 py-2 border-y border-gray-800/50">
                    <span className="text-cyan-400 font-black uppercase text-xs tracking-[0.2em]">Tailored Solution</span>
                  </div>

                  <div className="space-y-4 mb-12">
                    {plan.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-center space-x-3 group/item">
                        <div className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover/item:bg-cyan-400 group-hover/item:text-gray-900 transition-colors">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-gray-400 text-sm font-medium group-hover/item:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col space-y-4">
                    <button
                      onClick={() => handleBuy(plan)}
                      className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-500 flex items-center justify-center space-x-3 ${
                        plan.popular
                          ? 'bg-cyan-400 text-gray-900 hover:bg-cyan-300 shadow-[0_10px_30px_rgba(34,211,238,0.3)]'
                          : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                      }`}
                    >
                      <span>Buy Service</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={() => window.location.href = '/contact'}
                      className="w-full py-4 rounded-2xl font-bold text-sm text-gray-500 hover:text-cyan-400 transition-colors flex items-center justify-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Request Custom Quote</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
