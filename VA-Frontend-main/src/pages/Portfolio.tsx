import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Clients from '../components/Clients';

const Portfolio = () => {
  return (
    <PageTransition>
      <div className="bg-[#030712] min-h-screen pt-32 pb-20 overflow-hidden relative">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-bold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Our Success Stories</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Industry Leaders</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Explore our latest projects and see how we help brands stand out in the digital landscape.
            </p>
          </div>

          <Clients hideTitle={true} />

        {/* ============== TESTIMONIALS SECTION ============== */}
        <section id="testimonials">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Real stories from satisfied partners who achieved their dreams with us.
            </p>
          </div>

          {/* Testimonial Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            {/* --- TESTIMONIAL 1 --- */}
            <div className="lg:col-span-2 card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex items-center">
              <p className="text-gray-300 italic text-xl">
                "Hi Neeraj, I really liked the design and pitch deck you made. The way you matched it with my brand identity was great. I loved your work and will surely give you more projects with Visuorke."
              </p>
            </div>
            <div className="card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex flex-col justify-center items-center text-center" style={{ animationDelay: '0.1s' }}>
              <img className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-400" src="/img/Sunil.png" alt="Client Photo" />
              <h3 className="font-semibold text-lg text-cyan-400">Sunil Soni</h3>
              <p className="text-gray-400">Chief Executive Officer</p>
              <p className="text-gray-500 text-sm">Satlaa Pvt. Ltd.</p>
            </div>

            {/* --- TESTIMONIAL 2 --- */}
            <div className="card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex flex-col justify-center items-center text-center" style={{ animationDelay: '0.2s' }}>
              <img className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-400" src="/img/Dipanshu.png" alt="Client Photo" />
              <h3 className="font-semibold text-lg text-cyan-400">Dipanshu Verma</h3>
              <p className="text-gray-400">Product Manager</p>
              <p className="text-gray-500 text-sm">Tech Frigate</p>
            </div>
            <div className="lg:col-span-2 card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex items-center" style={{ animationDelay: '0.3s' }}>
              <p className="text-gray-300 italic text-xl">
                "The UI/UX design process was incredibly collaborative and insightful. Visuorke transformed our complex requirements into an intuitive and beautiful interface that our users love. We saw a 40% increase in user engagement."
              </p>
            </div>
            
            {/* --- TESTIMONIAL 3 --- */}
            <div className="lg:col-span-2 card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex items-center" style={{ animationDelay: '0.4s' }}>
              <p className="text-gray-300 italic text-xl">
                "From graphic design to the final video edit, the attention to detail was impeccable. Visuorke is not just a digital agency; they are true partners in success. I highly recommend them to anyone looking for top-tier digital services."
              </p>
            </div>
            <div className="card-hover backdrop-blur-fallback rounded-xl p-8 border border-gray-700/50 animate-fadeInUp flex flex-col justify-center items-center text-center" style={{ animationDelay: '0.5s' }}>
              <img className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-400" src="/img/Vikash.jpg" alt="Client Photo" />
              <h3 className="font-semibold text-lg text-cyan-400">Vikash Vaishnav</h3>
              <p className="text-gray-400">Chief Executive Officer</p>
              <p className="text-gray-500 text-sm">Vagwiin IT Solutions</p>
            </div>

          </div>
        </section>
      </div>
    </div>
  </PageTransition>
);
};

export default Portfolio;