import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import About from '../components/About';
import StudentCommunity from '../components/StudentCommunity';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Clients from '../components/Clients';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Clients />
      <About />
  <StudentCommunity />
      <Services />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
    </PageTransition>
  );
};

export default Home;