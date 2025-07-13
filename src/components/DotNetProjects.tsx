
import { motion } from 'framer-motion';
import { Github, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DotNetProjects = () => {
  const dotnetProjects = [
    {
      title: 'Hospital Management System',
      description: 'Comprehensive hospital management system with patient records, appointment scheduling, and medical history tracking.',
      githubUrl: 'https://github.com/DhruvikGalani/hospital_management.git',
      technologies: ['.NET', 'C#', 'SQL Server', 'Windows Forms', 'Entity Framework']
    }
  ];

  return (
    <section id="dotnet" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Database className="w-12 h-12 text-purple-400" />
            </motion.div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              .NET Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {dotnetProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                z: 50
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors flex items-center space-x-3">
                    <Database className="w-6 h-6" />
                    <span>{project.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 flex flex-col flex-grow">
                  <p className="text-gray-300 text-lg flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded text-purple-400 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 mt-auto">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 w-full"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </Button>
                    </motion.div>
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

export default DotNetProjects;
