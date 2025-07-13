
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  const downloadResume = () => {
    // Create a sample resume content - in real scenario, you'd link to actual PDF
    const resumeContent = `
DHRUVIK GALANI
Full Stack Developer | Flutter | React | .NET

Email: dhruvikgalaniumb0110@gmail.com
Phone: +91 82381 45933
Location: Umra, Velanja, Surat

PROFESSIONAL SUMMARY
Results-driven Full Stack Developer with specialization in Flutter, React.js, and .NET technologies.
Extensive hands-on experience in building and deploying scalable, high-performance applications.

EXPERIENCE
React.js Full Stack Developer - Shashwat Technology (2024 - Present)
WordPress Developer Intern - Web Development Agency (2023)

EDUCATION
BSc.IT (2023-2026) - MTB campus - Shree Ramkrishna Institute
HSC 12th - Matric Global School - 83.45%
SSC 10th - Matric Global School - 82.33%

SKILLS
Dart, Flutter, React.js, .NET, GitHub, WordPress, APIs, State Management, Problem Solving
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dhruvik_Galani_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
          >
            Dhruvik Galani
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={downloadResume}
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
