# Instrucciones para Ejecutar el Cliente

Este documento proporciona una guía paso a paso para instalar y ejecutar el cliente de la aplicación.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

1. **Node.js**: Necesitarás Node.js para ejecutar el cliente. Puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).

2. **npm**: Node.js viene con npm, que es el gestor de paquetes que utilizaremos para instalar las dependencias del proyecto.

## Pasos para Ejecutar el Cliente

Sigue estos pasos para configurar y ejecutar el cliente:

1. **Clonar el Repositorio**

   Si aún no lo has hecho, clona el repositorio del proyecto en tu máquina local.

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Navegar al Directorio del Cliente**

   Cambia al directorio del cliente:

   ```bash
   cd client
   ```

3. **Instalar Dependencias**

   Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

   ```bash
   npm install
   ```

4. **Ejecutar el Cliente en Modo de Desarrollo**

   Una vez que las dependencias estén instaladas, puedes iniciar el cliente en modo de desarrollo con el siguiente comando:

   ```bash
   npm run dev
   ```

   Esto abrirá el cliente en tu navegador predeterminado. Si no se abre automáticamente, puedes acceder manualmente a través de la URL que se muestra en la terminal (normalmente `http://localhost:3000`).

## Notas Adicionales

- Si encuentras algún problema durante la instalación o ejecución, asegúrate de que todas las dependencias estén correctamente instaladas y que estás utilizando la versión correcta de Node.js.

- Para detener el servidor de desarrollo, puedes presionar `Ctrl + C` en la terminal donde se está ejecutando.
