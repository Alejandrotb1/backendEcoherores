import React from 'react';

const Features = () => {
  return (
    <section className="w-full min-w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-8 grid place-items-center">
      <div className="w-full md:w-1/2 px-4 md:px-16 relative">
          <img 
            src="/image/cabezaEcoHeroes.webp"
            alt="EcoHeroes" 
            className="w-[90dvh] sm:hidden"
          />
        </div>
        <div className="text-center mb-16 sm:w-1/2">
          <h2 className="text-4xl font-bold mb-6">EcoHéroe</h2>
          <p className="text-lg max-w-3xl mx-auto">
            La tecnología móvil puede transformar la manera en la que gestionamos los residuos, 
            facilitando la comunicación entre ciudadanos y recolectores, optimización y promoviendo 
            el reciclaje para un futuro más sostenible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <div className="text-center">
            <div className="flex justify-center mb-12">
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Solicita un recolector fácilmente</h3>
            <p className="text-sm opacity-80">
              Agenda una recolección de materiales reciclables en tu hogar o negocio con 
              solo unos clics. Nuestro sistema asignará el recolector más cercano para 
              garantizar un servicio rápido y eficiente.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-12">
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Contribuye al medio ambiente</h3>
            <p className="text-sm opacity-80">
              Registra los materiales reciclables que deseas entregar y obtén 
              información sobre su impacto ambiental. Ayuda a reducir la 
              contaminación mientras fomentas una cultura de reciclaje en tu 
              comunidad.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-12">
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Monitorea y recibe recompensas</h3>
            <p className="text-sm opacity-80">
              Lleva un control de tus solicitudes de recolección y obtén incentivos 
              por tu compromiso con el reciclaje. Cuanto más recicles, más beneficios 
              podrás recibir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 