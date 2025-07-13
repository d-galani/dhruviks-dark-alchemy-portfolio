
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaReact } from "react-icons/fa6";

const Projects = () => {
  const reactProjects = [
    {
      title: 'Dwelora Vault',
      description: 'A modern property management system with advanced features for real estate professionals.',
      liveUrl: 'https://dwelora-vault.vercel.app/',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel']
    },
    {
      title: 'Stayzaa',
      description: 'Hotel booking and management platform with modern UI and seamless user experience.',
      liveUrl: 'http://stayzaa.vercel.app/',
      technologies: ['React', 'Next.js', 'CSS', 'API Integration']
    },
    {
      title: 'PropCRM',
      description: 'Customer relationship management system designed specifically for property businesses.',
      liveUrl: 'https://propcrm.vercel.app/',
      technologies: ['React', 'CRM', 'Database', 'Authentication']
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <FaReact  className="w-6 h-6 text-purple-400" />
            </motion.div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              React Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reactProjects.map((project, index) => (
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
              <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300 h-full hover:border-purple-400/50 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded text-purple-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 w-full"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
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

export default Projects;
