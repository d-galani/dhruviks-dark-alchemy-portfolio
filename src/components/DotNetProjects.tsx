
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
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

  // .NET logo SVG component
  const DotNetLogo = () => (
    <svg className="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.868 0 0 1-.869.693.868.868 0 0 1-.868-.693.868.868 0 0 1 .868-.692.868.868 0 0 1 .869.692z"/>
    </svg>
  );

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
              <DotNetLogo />
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
                    <DotNetLogo />
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
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 w-full"
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
