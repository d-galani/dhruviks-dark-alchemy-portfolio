
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import FlutterProjects from '@/components/FlutterProjects';
import DotNetProjects from '@/components/DotNetProjects';
import Footer from '@/components/Footer';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Optimized Animated Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-emerald-900/10 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      </motion.div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Flutter Projects */}
      <FlutterProjects />

      {/* .NET Projects */}
      <DotNetProjects />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
