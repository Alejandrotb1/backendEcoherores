import React from 'react';
import personaIcon from '../assets/icons/persona.svg';
import solicitudesIcon from '../assets/icons/solicitudes.svg';

const WhiteSection = () => {
  return (
    <section className="w-full min-w-full bg-white py-16">
      <div className="flex flex-col md:flex-row justify-start items-center px-16">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-6xl font-bold text-gray-800 leading-tight mb-6">
            Cada día ayudando<br />
            mas al planeta
          </h2>
          <p className="text-xl text-gray-600">
            Muchas personas se comprometen cada dia a ayudar al planeta, tu<br />
            tambien puedes.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="text-right">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-6">
                <img src={personaIcon} alt="Miembros" className="w-8 h-8 mr-4" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-800">2,245,341</p>
                  <p className="text-sm text-gray-600">Miembros</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={solicitudesIcon} alt="Solicitudes completadas" className="w-8 h-8 mr-4" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-800">828,867</p>
                  <p className="text-sm text-gray-600">Solicitudes completadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteSection; 