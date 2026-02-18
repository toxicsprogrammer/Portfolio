import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark/95 border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Hecho con <FaHeart className="text-red-500 animate-pulse" /> por Tu Nombre
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {currentYear} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
