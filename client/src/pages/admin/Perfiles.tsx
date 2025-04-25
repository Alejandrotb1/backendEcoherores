import React, { useState } from 'react';

interface Usuario {
  id: string;
  fechaAlta: string;
  nombre: string;
  apellidos: string;
  email: string;
  activo: boolean;
  servicios: number;
  inscripciones: number;
}

const Perfiles = () => {
  const [usuarios] = useState<Usuario[]>([
    {
      id: '4',
      fechaAlta: '14/6/19',
      nombre: 'Usuario',
      apellidos: 'Alumno',
      email: 'usuario+alumno@foxize.com',
      activo: true,
      servicios: 0,
      inscripciones: 1
    },
    {
      id: '3',
      fechaAlta: '10/6/19',
      nombre: 'Equipo',
      apellidos: 'Foxize Cloud',
      email: 'usuario+equipo@foxize.com',
      activo: true,
      servicios: 0,
      inscripciones: 0
    },
    // ... más usuarios de ejemplo
  ]);

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header con botones */}
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md">
            <span className="mr-2">🔍</span>
            Filtrar
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md">
            <span className="mr-2">➕</span>
            Añadir columnas
          </button>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
          <span className="mr-2">👤</span>
          Crear nuevo usuario
        </button>
      </div>

      {/* Tabla Responsiva */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha Alta</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Apellidos</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Activo</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Servicios para empresas</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Inscripciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {usuarios.map((usuario) => (
              <tr key={usuario.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-gray-600">⋮</button>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{usuario.id}</td>
                <td className="px-4 py-3 whitespace-nowrap">{usuario.fechaAlta}</td>
                <td className="px-4 py-3 whitespace-nowrap">{usuario.nombre}</td>
                <td className="px-4 py-3 whitespace-nowrap">{usuario.apellidos}</td>
                <td className="px-4 py-3 whitespace-nowrap">{usuario.email}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    usuario.activo ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {usuario.activo ? 'Sí' : 'No'}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-center">{usuario.servicios}</td>
                <td className="px-4 py-3 whitespace-nowrap text-center">{usuario.inscripciones}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer con botón de exportar */}
      <div className="p-4 border-t">
        <button className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md">
          <span className="mr-2">📥</span>
          Exportar
        </button>
      </div>
    </div>
  );
};

export default Perfiles; 