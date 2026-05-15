import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Clients = ({ hideTitle = false }: { hideTitle?: boolean }) => {
  const logos = [
    { name: 'CRC GLOBAL', src: '/img/CRC GLOBAL.png' },
    { name: 'Satlaa', src: 'https://satlaa.com/_next/image?url=https%3A%2F%2Fapi.satlaa.com%2Fimages%2Fuploads%2Fcustom%2Flogo.png&w=384&q=75' },
    { name: 'Monster Detailing', src: '/img/MonsterDetailing.png' },
    { name: 'Nirdesham', src: 'https://nirdesham.com/_next/image?url=%2Fimages%2Flogo.png&w=640&q=100' },
    { name: 'Graphic Line', src: '/img/Graphic Line.png' },
    { name: 'Vagwiin', src: '/img/Vagwiinlogo.png' },
    { name: 'AND Offset', src: '/img/AND Offset.png' },
    { name: 'Techfrigate', src: '/img/TechfrigateLogo.png' },
  ];

  // Duplicate for seamless scroll
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-[#030712] overflow-hidden">
      {!hideTitle && (
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center">
            <ScrollReveal width="100%">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Industry Leaders</span>
              </h2>
            </ScrollReveal>
          </div>
        </div>
      )}

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {allLogos.map((logo, index) => (
            <div key={index} className="mx-12 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-14 object-contain w-auto max-w-[180px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#030712] to-transparent z-10"></div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;
