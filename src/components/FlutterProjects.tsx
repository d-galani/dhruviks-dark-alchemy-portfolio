
import { motion } from 'framer-motion';
import { Github, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Smartphone className="w-12 h-12 text-blue-400" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Flutter Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flutterProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors flex items-center space-x-2">
                    <Smartphone className="w-5 h-5" />
                    <span>{project.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded text-blue-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
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
