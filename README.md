# EcoHeroes - Sistema de Recolección de Residuos

## Descripción
EcoHeroes es una aplicación web para la gestión y recolección de residuos, desarrollada con React y TypeScript. Permite a los usuarios solicitar recolecciones de residuos y visualizar su ubicación en un mapa interactivo.

## Tecnologías Utilizadas
- React 18
- TypeScript
- Vite
- React Router DOM
- Google Maps API
- React Icons

## Configuración del Proyecto

### Requisitos Previos
- Node.js (versión 14 o superior)
- npm o yarn
- Cuenta de Google Cloud Platform (para la API de Maps)

### Instalación
1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd EcoHeroes
```

2. Instalar dependencias:
```bash
cd client
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la carpeta `client` con:
```
VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aquí
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto
```
client/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── footer/
│   │   ├── RecojoForm/
│   │   └── Map/
│   ├── pages/
│   │   ├── Contacto/
│   │   └── Solicitud/
│   ├── types/
│   └── App.tsx
```

## Dependencias Instaladas

### Dependencias Principales
- `react-router-dom` - Para el enrutamiento de la aplicación
- `@types/react` - Para tipos de TypeScript
- `@types/react-dom` - Para tipos de TypeScript

### Paquetes de Iconos
- `react-icons` - Biblioteca de iconos
  - `react-icons/fa` - Iconos de Font Awesome
  - `react-icons/io5` - Iconos de Ionicons 5
  - `react-icons/md` - Iconos de Material Design

### Paquetes de Mapa
- `@react-google-maps/api` - Integración con Google Maps
- `@types/google.maps` - Tipos de TypeScript para Google Maps

### Componentes Personalizados
- `Header` - Barra de navegación superior
- `Footer` - Pie de página con información de contacto
- `RecojoForm` - Formulario de solicitud de recolección
- `Map` - Componente de mapa interactivo

## Cambios Recientes

### 1. Mejoras en la Página de Contacto
- Rediseño completo del formulario de contacto
- Implementación de un diseño de dos columnas
- Adición de iconos para información de contacto
- Mejoras en la responsividad y estilos

### 2. Formulario de Recojo
- Actualización del formulario de solicitud de recolección
- Adición del campo "Detalles de la casa"
- Mejora en los selectores de tipo y tamaño de residuo
- Implementación de validación de campos requeridos

### 3. Mapa
- Ajustes en el tamaño y posicionamiento del mapa
- Implementación de un diseño cuadrado (400x400px)
- Centrado vertical y horizontal
- Ajustes responsivos para diferentes tamaños de pantalla

### 4. Estilos y Diseño
- Aumento del border-radius en campos de formulario (12px)
- Mejoras en la consistencia visual
- Ajustes en el espaciado y márgenes
- Optimización de la experiencia móvil

## Conexión Frontend-Backend

### 1. Estructura del Proyecto

El proyecto está dividido en dos partes principales:
- **Frontend**: Aplicación React con TypeScript
- **Backend**: API REST con Laravel

### 2. Componentes Principales

#### 2.1 Frontend
- **RecojoForm**: Componente que maneja el formulario de solicitud
- **SolicitudPage**: Página que integra el formulario y el mapa
- **solicitudService**: Servicio para manejar las peticiones HTTP

#### 2.2 Backend
- **SolicitudController**: Controlador que maneja las peticiones HTTP
- **TipoResiduo**: Enum que define los tipos de residuos permitidos
- **TamanoResiduo**: Enum que define los tamaños de residuos permitidos

### 3. Flujo de Datos

#### 3.1 Formulario de Solicitud
1. El usuario llena el formulario en `RecojoForm.tsx`
2. Los datos se validan en el frontend:
   - Números de teléfono solo permiten dígitos
   - Nombres solo permiten letras y espacios
   - Referencias deben comenzar con 6 o 7

#### 3.2 Envío de Datos
1. Al enviar el formulario, los datos se transforman en `SolicitudPage.tsx`:
```typescript
const solicitudData = {
  nombre: data.nombreCompleto,
  direccion_recojo: data.direccion,
  detalles_casa: data.detallesCasa,
  tipo_residuo: data.tipoResiduo,
  tamano_residuo: data.tamañoResiduo.toLowerCase().trim(),
  numero_referencia: data.referencia,
  carnet: data.carnet,
  latitud: selectedLocation?.lat,
  longitud: selectedLocation?.lng,
  fecha_solicitud: new Date().toISOString()
};
```

#### 3.3 Servicio de Solicitud
El servicio `solicitudService.ts` maneja la comunicación con el backend:
```typescript
const API_URL = 'http://localhost:8000/api';

export const solicitudService = {
  crearSolicitud: async (data: SolicitudData) => {
    const response = await axios.post(`${API_URL}/solicitudes`, data);
    return response.data;
  }
};
```

### 4. Validaciones

#### 4.1 Frontend
- Validación de formato de números de teléfono
- Validación de formato de nombres
- Validación de referencias (deben comenzar con 6 o 7)
- Validación de campos requeridos

#### 4.2 Backend
- Validación de tipos de residuos permitidos:
  - organico
  - inorganico_reciclable
  - inorganico_no_reciclable
  - peligroso
  - sanitario
  - electronico
  - construccion
- Validación de tamaños de residuos:
  - pequeno
  - mediano
  - grande

### 5. Manejo de Errores

1. **Frontend**:
   - Captura de errores en `SolicitudPage.tsx`
   - Mostrar mensajes de error al usuario
   - Logging de errores en consola

2. **Backend**:
   - Respuestas HTTP apropiadas
   - Mensajes de error detallados
   - Validación de datos

### 6. Mejoras Implementadas

1. **Transformación de Datos**:
   - Aseguramiento de que los valores coincidan con los enums del backend
   - Conversión a minúsculas y eliminación de espacios

2. **Manejo de Estado**:
   - Estados de carga
   - Mensajes de éxito/error
   - Limpieza del formulario después del envío

### 7. Consideraciones Técnicas

1. **CORS**:
   - Configuración necesaria en el backend para permitir peticiones desde el frontend

2. **Tipos de Datos**:
   - Uso de TypeScript para asegurar la consistencia de tipos
   - Interfaces definidas para los datos de solicitud

3. **Seguridad**:
   - Validación de datos en ambos lados
   - Sanitización de entradas
   - Manejo seguro de datos sensibles

### 8. Próximos Pasos

1. Implementar autenticación
2. Agregar más validaciones
3. Mejorar el manejo de errores
4. Implementar pruebas unitarias
5. Agregar documentación de API

## Instalación y Uso

1. Clonar el repositorio
2. Instalar dependencias del frontend:
```bash
cd client
npm install
```

3. Instalar dependencias del backend:
```bash
cd server
composer install
```

4. Configurar variables de entorno
5. Iniciar servidores:
   - Frontend: `npm run dev`
   - Backend: `php artisan serve`

## Contribución

1. Fork el repositorio
2. Crear una rama para tu feature
3. Hacer commit de tus cambios
4. Push a la rama
5. Abrir un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 
