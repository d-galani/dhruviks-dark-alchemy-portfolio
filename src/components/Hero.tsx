
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer | Flutter | React | .NET';
  
  // Mouse interaction values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [30, -30]);
  const rotateY = useTransform(x, [-300, 300], [-30, 30]);
  
  const springX = useSpring(rotateX);
  const springY = useSpring(rotateY);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Darker gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      
      {/* Floating particles with purple theme */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div 
        className="container mx-auto px-6 text-center relative z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            rotateX: springX,
            rotateY: springY,
            transformStyle: "preserve-3d"
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1, 
            type: "spring", 
            stiffness: 100,
            damping: 15
          }}
          className="mb-8"
        >
          <div className="relative w-64 h-64 mx-auto perspective-1000">
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, 360]
              }}
              transition={{
                scale: { duration: 3, repeat: Infinity },
                rotate: { duration: 25, repeat: Infinity, ease: "linear" }
              }}
            />
            <img
              src="/lovable-uploads/fb3e353d-aeb1-4af3-9791-8a8d19c786b4.png"
              alt="Dhruvik Galani"
              className="relative w-60 h-60 rounded-full object-cover border-4 border-white/20 shadow-2xl mx-auto mt-2 hover:shadow-purple-500/50 transition-shadow duration-300"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: 0.3, 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent">
            DHRUVIK
          </span>
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-white bg-clip-text text-transparent">
            GALANI
          </span>
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: 0.6, 
            duration: 0.6,
            type: "spring",
            stiffness: 80
          }}
          className="mb-8"
        >
          <div className="text-2xl md:text-3xl text-purple-400 font-mono h-12 flex items-center justify-center">
            {text}
            <span className="animate-pulse ml-1">|</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: 0.9, 
            duration: 0.6,
            type: "spring",
            stiffness: 60
          }}
          className="flex items-center justify-center space-x-6"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              z: 50
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              onClick={() => window.open('https://github.com/DhruvikGalani/', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotateY: -10,
              z: 50
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/dhruvik-galani-821447295/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
