import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaHeart } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hola, soy <span className="gradient-text">Tu Nombre</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Desarrollador Full Stack apasionado por crear experiencias web excepcionales
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full">
                <FaCode className="text-primary" size={24} />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full">
                <FaRocket className="text-secondary" size={24} />
                <span>Innovación</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full">
                <FaHeart className="text-red-500" size={24} />
                <span>Pasión</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
              >
                Ver Proyectos
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-effect hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
              >
                Contactar
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-4xl font-bold text-primary mb-2">5+</h3>
              <p className="text-gray-300">Años de Experiencia</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-4xl font-bold text-secondary mb-2">50+</h3>
              <p className="text-gray-300">Proyectos Completados</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-4xl font-bold text-green-500 mb-2">30+</h3>
              <p className="text-gray-300">Clientes Satisfechos</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
