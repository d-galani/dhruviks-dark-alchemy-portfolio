
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaFlutter } from 'react-icons/fa6';

const FlutterProjects = () => {
  const flutterProjects = [
    {
      title: 'Shayari Hub',
      description: 'Customize and share Shayari with font/color control, categories, and social sharing features.',
      githubUrl: 'https://github.com/DhruvikGalani/shayari_hub.git',
      technologies: ['Flutter', 'Dart', 'GetX', 'Share Plus']
    },
    {
      title: 'Music App',
      description: 'Dynamic music application with audio controls, radial slider for volume, and modern UI.',
      githubUrl: 'https://github.com/DhruvikGalani/musicApp.git',
      technologies: ['Flutter', 'Audio Players', 'Just Audio', 'Radial Slider']
    },
    {
      title: 'Notes App',
      description: 'Stylish note-taking application with CRUD operations and local storage.',
      githubUrl: 'https://github.com/DhruvikGalani/notes_app.git',
      technologies: ['Flutter', 'SQLite', 'Hive', 'Local Storage']
    },
    {
      title: 'E-commerce App',
      description: 'Product listing application with API integration, authentication, and shopping features.',
      githubUrl: 'https://github.com/DhruvikGalani/ecommerce.git',
      technologies: ['Flutter', 'API Integration', 'HTTP', 'Authentication']
    },
    {
      title: 'Recipe App',
      description: 'Dynamic recipe viewing application with search functionality and detailed recipe pages.',
      githubUrl: 'https://github.com/DhruvikGalani/recipe_app.git',
      technologies: ['Flutter', 'API', 'Search', 'Dynamic UI']
    }
  ];

 

  return (
    <section id="flutter" className="py-20 relative">
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
             <FaFlutter className="w-6 h-6 text-purple-400" />

            </motion.div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Flutter Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flutterProjects.map((project, index) => (
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
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors flex items-center space-x-2">
                    <span>{project.title}</span>
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
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
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

export default FlutterProjects;
