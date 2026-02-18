import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import { experiences, education, skills } from '../data/portfolio';

const CV = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="cv" className="min-h-screen py-20 bg-gradient-to-b from-dark/95 to-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mi <span className="gradient-text">Trayectoria</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experiencia profesional, educación y habilidades que me definen como desarrollador
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-primary text-3xl" />
              <h3 className="text-3xl font-bold">Experiencia</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl hover:scale-102 transition-transform"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-primary">{exp.position}</h4>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-3">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <span className="text-secondary mt-1">▸</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-secondary text-3xl" />
              <h3 className="text-3xl font-bold">Educación</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl hover:scale-102 transition-transform"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-secondary">{edu.degree}</h4>
                    <span className="text-sm text-gray-400">{edu.period}</span>
                  </div>
                  <p className="text-gray-300 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-400">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <FaCode className="text-green-500 text-3xl" />
            <h3 className="text-3xl font-bold">Habilidades Técnicas</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {['frontend', 'backend', 'tools', 'other'].map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              const categoryLabels: Record<string, string> = {
                frontend: 'Frontend',
                backend: 'Backend',
                tools: 'Herramientas',
                other: 'Otros'
              };

              if (categorySkills.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-effect p-6 rounded-xl"
                >
                  <h4 className="text-xl font-bold mb-4 gradient-text">
                    {categoryLabels[category]}
                  </h4>
                  <div className="space-y-4">
                    {categorySkills.map((skill, index) => (
                      <div key={skill.id}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-primary font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/cv.pdf"
            download
            className="inline-block bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
          >
            Descargar CV en PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CV;
