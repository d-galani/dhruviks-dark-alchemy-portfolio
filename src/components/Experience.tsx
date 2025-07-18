
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'React.js Full Stack Developer',
      company: 'Shashwat Technology',
      period: '2025 - Present',
      description: 'Contributing to end-to-end application development and integration using React.js, Node.js, and modern web technologies. Working on scalable web applications and delivering high-performance solutions for various client projects.',
      technologies: ['React.js', 'Node.js', 'JavaScript', 'MongoDB', 'Express.js']
    },
    {
      title: 'WordPress Developer Intern',
      company: 'Shashwat Technology',
      period: '2025',
      description: 'Gained hands-on experience in WordPress development, theme customization, and plugin development. Worked on multiple client websites and learned best practices in web development and content management systems.',
      technologies: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 2,
                z: 20
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="mb-8"
            >
              <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300 hover:border-purple-400/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-white mb-2">{exp.title}</CardTitle>
                      <p className="text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded text-purple-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
