
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const skills = [
    'Dart', 'Flutter', 'React.js', '.NET', 'GitHub', 
    'WordPress', 'APIs', 'State Management', 'Problem Solving'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I am a results-driven Full Stack Developer with a specialization in Flutter, React.js, and .NET technologies. With a solid foundation in Dart programming and cross-platform mobile development, I bring extensive hands-on experience in building and deploying scalable, high-performance applications with intuitive user interfaces.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              My journey encompasses a diverse portfolio of projects developed through academic initiatives, self-driven innovation, and professional internships. I have delivered feature-rich Flutter applications, full-stack web platforms, and .NET-based enterprise solutions—all focused on performance, usability, and visual sophistication.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Currently, I am working as a React Full Stack Developer at Shashwat Technology, where I contribute to end-to-end application development and integration. I also hold practical experience in WordPress customization and .NET-based systems, enabling me to adapt across multiple development stacks.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>dhruvikgalaniumb0110@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>+91 82381 45933</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Umra, Velanja, Surat</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-emerald-400">
                  <GraduationCap className="w-5 h-5" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold">BSc.IT (2023-2026)</h4>
                  <p className="text-gray-400">MTB campus - Shree Ramkrishna Institute</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">HSC 12th</h4>
                  <p className="text-gray-400">Matric Global School - 83.45%</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">SSC 10th</h4>
                  <p className="text-gray-400">Matric Global School - 82.33%</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-emerald-400">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-full text-emerald-400 text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
