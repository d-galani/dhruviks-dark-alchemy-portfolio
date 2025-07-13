
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsMobileMenuOpen(false), 600); // matches scroll duration

    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Flutter_Resume.pdf'; // assumes the file is in /public
    link.download = 'Dhruvik_Galani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMobileMenuOpen(false); // Close mobile menu after download
  };


  const navItems = [
    { label: 'About Me', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Flutter Apps', id: 'flutter' },
    { label: 'React Projects', id: 'projects' },
    { label: '.NET Projects', id: 'dotnet' },
    { label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter] duration-100 ease-in-out ${isScrolled ? 'bg-black/40 backdrop-blur-md' : 'bg-transparent'
        }`}

    >

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Dhruvik Galani
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}

            <a
              href="/Flutter_Resume.pdf"
              download="Dhruvik_Galani_Resume.pdf"
              className="relative inline-flex items-center justify-center overflow-hidden px-5 py-2 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md group shadow-lg hover:shadow-pink-500/40"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
              <Download className="w-4 h-4 mr-2 z-10" />
              <span className="z-10">Resume</span>
            </a>


          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/90 rounded-lg mt-4"
        >
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-left py-2"
              >
                {item.label}
              </button>
            ))}

            <a
              href="/Flutter_Resume.pdf"
              download="Dhruvik_Galani_Resume.pdf"
              className="relative inline-flex items-center justify-center overflow-hidden px-5 py-2 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md group shadow-lg hover:shadow-pink-500/40"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
              <Download className="w-4 h-4 mr-2 z-10" />
              <span className="z-10">Resume</span>
            </a>


          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
