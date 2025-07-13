
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

  // React logo SVG component
  const ReactLogo = () => (
    <svg className="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6.82-2.927c0-1.54-1.5-2.943-3.77-3.718.52-2.29.29-4.093-.63-4.673-.21-.13-.46-.19-.74-.19v.75c.15 0 .27.03.37.08.43.26.62 1.25.46 2.52-.04.32-.1.66-.18 1-.68-.17-1.43-.29-2.24-.36-.48-.66-1-.28-1.5-.9-.84-.74-1.63-1.15-2.23-1.15v.75c.46 0 1.05.29 1.69.79.32.26.64.56.97.87-.32 0-.64.02-.95.04-1.27.07-2.02.15-2.24.36-.15.13-.15.31-.15.31v.75c0-.17.04-.32.1-.44.22-.42.85-.5 1.89-.56.31-.02.64-.03.98-.03.34.63.73 1.26 1.17 1.87-.44.61-.83 1.24-1.17 1.87-.34 0-.68-.01-.98-.03-1.04-.06-1.67-.14-1.89-.56-.06-.12-.1-.27-.1-.44v.75s0 .18.15.31c.22.21.97.29 2.24.36.31.02.63.04.95.04-.33.31-.65.61-.97.87-.64.5-1.23.79-1.69.79v.75c.6 0 1.39-.41 2.23-1.15.5-.44 1.02-.72 1.5-.9.81-.07 1.56-.19 2.24-.36.08.34.14.68.18 1 .16 1.27-.03 2.26-.46 2.52-.1.05-.22.08-.37.08v.75c.28 0 .53-.06.74-.19.92-.58 1.15-2.38.63-4.673 2.27-.775 3.77-2.178 3.77-3.718zm-7.32 2.447c.33-.61.61-1.24.85-1.89.24.65.52 1.28.85 1.89-.28.03-.57.05-.85.05s-.57-.02-.85-.05zm2.58-1.89c-.21-.52-.45-1.03-.72-1.52.59.08 1.15.19 1.67.32-.16.4-.34.8-.54 1.2-.14-.33-.28-.66-.41-1zm-2.58-3.58c.28 0 .57.02.85.05-.33.61-.61 1.24-.85 1.89-.24-.65-.52-1.28-.85-1.89.28-.03.57-.05.85-.05zm-2.58 1.89c-.13.34-.27.67-.41 1-.2-.4-.38-.8-.54-1.2.52-.13 1.08-.24 1.67-.32-.27.49-.51 1-.72 1.52z"/>
    </svg>
  );

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
              <ReactLogo />
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
