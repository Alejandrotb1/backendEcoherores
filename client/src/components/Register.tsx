import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Función para prevenir números
  const preventNumbers = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Permitir teclas de control (backspace, delete, arrows, etc)
    if (e.key.length === 1 && /[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Función para limpiar caracteres no permitidos (por si se pegan números)
  const cleanNonLetters = (value: string) => {
    return value.replace(/[0-9]/g, '');
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'nombre':
      case 'apellidos':
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
          error = 'Solo se permiten letras y espacios';
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Ingresa un correo electrónico válido';
        }
        break;
      case 'password':
        if (value.length < 8) {
          error = 'La contraseña debe tener al menos 8 caracteres';
        } else if (!/(?=.*[a-z])/.test(value)) {
          error = 'Debe incluir al menos una letra minúscula';
        } else if (!/(?=.*[A-Z])/.test(value)) {
          error = 'Debe incluir al menos una letra mayúscula';
        } else if (!/(?=.*\d)/.test(value)) {
          error = 'Debe incluir al menos un número';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Las contraseñas no coinciden';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Limpiar números si es nombre o apellidos
    const cleanedValue = (name === 'nombre' || name === 'apellidos') 
      ? cleanNonLetters(value)
      : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: cleanedValue
    }));

    const error = validateField(name, cleanedValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    if (name === 'password' && formData.confirmPassword) {
      const confirmError = cleanedValue !== formData.confirmPassword ? 'Las contraseñas no coinciden' : '';
      setErrors(prev => ({
        ...prev,
        confirmPassword: confirmError
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar todos los campos antes de enviar
    const newErrors = {
      nombre: validateField('nombre', formData.nombre),
      apellidos: validateField('apellidos', formData.apellidos),
      email: validateField('email', formData.email),
      password: validateField('password', formData.password),
      confirmPassword: validateField('confirmPassword', formData.confirmPassword)
    };

    setErrors(newErrors);

    // Verificar si hay errores
    if (Object.values(newErrors).some(error => error !== '')) {
      return; // No enviar si hay errores
    }

    // Aquí irá la lógica de registro
    console.log('Registrando usuario:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Formulario */}
          <div className="w-full lg:w-3/5 p-8 lg:p-12">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Registrate</h2>
              <p className="mt-2 text-gray-600">Únete a la comunidad de EcoHeroes</p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit} noValidate>
              {/* Nombre y Apellidos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-900 mb-2">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out text-gray-900 ${
                      errors.nombre ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.nombre}
                    onChange={handleChange}
                    onKeyDown={preventNumbers}
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="apellidos" className="block text-sm font-medium text-gray-900 mb-2">
                    Apellidos
                  </label>
                  <input
                    id="apellidos"
                    name="apellidos"
                    type="text"
                    required
                    pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out text-gray-900 ${
                      errors.apellidos ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.apellidos}
                    onChange={handleChange}
                    onKeyDown={preventNumbers}
                    placeholder="Tus apellidos"
                  />
                  {errors.apellidos && (
                    <p className="mt-1 text-sm text-red-600">{errors.apellidos}</p>
                  )}
                </div>
              </div>

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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out text-gray-900 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu.email@ejemplo.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out text-gray-900 ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Confirmar Contraseña */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 mb-2">
                  Confirmar Contraseña
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out text-gray-900 ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Botón de Registro */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-150 ease-in-out font-medium text-lg shadow-md hover:shadow-lg"
                >
                  Registrar
                </button>
              </div>
            </form>

            {/* Enlace a Login */}
            <div className="text-center mt-6">
              <span className="text-sm text-gray-600">¿Ya tienes una cuenta? </span>
              <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
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

export default Register; 