import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'tu@email.com'
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        type: 'success',
        message: '¡Mensaje enviado correctamente! Te responderé pronto.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-dark to-dark/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4 glass-effect p-4 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope className="text-primary text-2xl mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:tu@email.com" className="text-gray-300 hover:text-primary transition-colors">
                      tu@email.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 glass-effect p-4 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaUser className="text-secondary text-2xl mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Redes Sociales</h4>
                    <div className="space-y-1">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-secondary transition-colors">
                        GitHub
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-secondary transition-colors">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8"
              >
                <h4 className="text-xl font-bold mb-4">¿Por qué trabajar conmigo?</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Código limpio y mantenible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Comunicación clara y constante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Entrega en tiempo y forma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Pasión por la innovación</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-xl">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Asunto del mensaje"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-4 p-4 rounded-lg ${
                      status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    'Enviando...'
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
