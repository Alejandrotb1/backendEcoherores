import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white py-8 w-full">
      <div className="max-w-7xl mx-auto pl-0 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Copyright y Redes Sociales */}
        <div className="flex flex-col gap-4 pl-4">
          <div className="text-gray-400 text-sm">
            <p>Copyright © 2025 ActualizacionII</p>
            <p>Todos los derechos reservados</p>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="#" className="!text-gray-400 hover:text-[#4db6ac] transition-colors" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="!text-gray-400 hover:text-[#4db6ac] transition-colors" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="!text-gray-400 hover:text-[#4db6ac] transition-colors" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="!text-gray-400 hover:text-[#4db6ac] transition-colors" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2 pl-4">
          <h3 className="text-[#4db6ac] text-lg font-medium mb-2">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="!text-gray-400 hover:text-[#4db6ac] transition-colors">About us</Link>
            </li>
            <li>
              <Link to="/blog" className="!text-gray-400 hover:text-[#4db6ac] transition-colors">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="!text-gray-400 hover:text-[#4db6ac] transition-colors">Contact us</Link>
            </li>
            <li>
              <Link to="/photos" className="!text-gray-400 hover:text-[#4db6ac] transition-colors">Photos</Link>
            </li>
            <li>
              <Link to="/terminals" className="!text-gray-400 hover:text-[#4db6ac] transition-colors">Terminals</Link>
            </li>
          </ul>
        </div>

        {/* Soporte */}
        <div className="flex flex-col gap-2 pl-4">
          <h3 className="text-[#4db6ac] text-lg font-medium mb-2">Soporte</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="!text-gray-400 hover:text-[#4db6ac] transition-colors">Help owner</Link>
            </li>
            <li>
              <Link to="/terms" className="!text-gray-400 hover:text-[#4db6ac] transition-colors">Terms of service</Link>
            </li>
            <li>
              <Link to="/legal" className="!text-gray-400 hover:text-[#4db6ac] transition-colors">Legal</Link>
            </li>
            <li>
              <Link to="/privacy" className="!text-gray-400 hover:text-[#4db6ac] transition-colors">Privacy policy</Link>
            </li>
            <li>
              <Link to="/status" className="!text-gray-400 hover:text-[#4db6ac] transition-colors">Status</Link>
            </li>
          </ul>
        </div>

        {/* Contáctanos */}
        <div className="flex flex-col gap-2 pl-4">
          <h3 className="text-[#4db6ac] text-lg font-medium mb-2">Contáctanos</h3>
          <div className="flex gap-2 max-w-[300px]">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-3 py-2 bg-[#2d2d2d] border border-[#3d3d3d] rounded text-white text-sm focus:outline-none focus:border-[#4db6ac]"
            />
            <button className="text-[#4db6ac] hover:text-white transition-colors text-xl px-2">
              ➔
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;