import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <section className="w-screen bg-white py-16">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 px-4 md:px-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Transforma tu ciudad
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            ¡Conviértete en un EcoHéroe!
          </p>
          <button 
            onClick={handleLogin}
            className="!bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded"
          >
            Iniciar Sesión
          </button>
        </div>
         <div className="w-full md:w-1/2 px-4 md:px-16 relative">
         <img 
            src="/image/cabezaEcoHeroes.webp"
            alt="EcoHeroes" 
            className="w-[80%] max-md:hidden absolute left-10 -top-30 mr-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;