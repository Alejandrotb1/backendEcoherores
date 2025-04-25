import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por ahora, simplemente redirigimos sin validación
    navigate('/admin/perfiles');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Formulario */}
          <div className="w-full lg:w-3/5 p-8 lg:p-12">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Inicio de sesión</h2>
              <p className="mt-2 text-gray-600">Bienvenido de vuelta a EcoHeroes</p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out text-gray-900"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu.email@ejemplo.com"
                />
              </div>

              {/* Contraseña */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out text-gray-900"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>

              {/* Botón de Inicio de Sesión */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-150 ease-in-out font-medium text-lg shadow-md hover:shadow-lg"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>

            {/* Enlace a Registro */}
            <div className="text-center mt-6">
              <span className="text-sm text-gray-600">¿Aún no tienes una cuenta? </span>
              <Link to="/registro" className="text-green-600 hover:text-green-700 font-medium">
                Haz click Aquí
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div className="hidden lg:flex lg:w-2/5 items-center justify-center p-12">
            <div className="w-full max-w-md">
              <img
                src="/logo-imagen.svg"
                alt="EcoHeroes Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 