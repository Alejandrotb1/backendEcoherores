import React from 'react';
import { Link } from 'react-router-dom';
import groupImage from '../assets/Group 1.png';

const BlackSection = () => {
  return (
    <section className="w-full min-w-full bg-black text-white py-24">
      <div className="flex flex-col md:flex-row items-start px-8 max-w-7xl">
        <div className="w-full md:w-1/3 md:pr-4 -mt-8 pl-16">
          <img src={groupImage} alt="Ilustración" className="w-full h-auto max-w-[220px]" />
        </div>
        <div className="w-full md:w-2/3 md:pl-0 -ml-8">
          <h2 className="text-5xl font-bold mb-6">Como usar la web</h2>
          <p className="text-lg mb-4">Solicitar un Recolector</p>
          <ul className="list-none space-y-2 text-gray-400 text-sm mb-8">
            <li>• Elige el tipo de residuos reciclables que deseas entregar (papel, plástico, vidrio, metal, etc.).</li>
            <li>• Indica la cantidad aproximada y agrega detalles adicionales si es necesario.</li>
            <li>• Selecciona la fecha y hora en la que deseas que el recolector pase por tu domicilio o negocio.</li>
          </ul>
          <button className="!bg-[#2B8B57] hover:bg-[#247548] text-white px-6 py-2 rounded text-sm">
            Saber más
          </button>
        </div>
      </div>
    </section>
  );
};

const CuidaPlaneta = () => {
  return (
    <section className="w-full min-w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-8">¡Cuida el planeta!</h2>
        <Link to="/solicitar-recojo">
          <button className="!bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md text-base font-medium">
            Solicitar Recojo →
          </button>
        </Link>
      </div>
    </section>
  );
};

export { BlackSection as default, CuidaPlaneta }; 