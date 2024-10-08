# Proyecto de Autenticación

Este proyecto implementa un sistema de autenticación completo utilizando las siguientes tecnologías:

## Backend

- Node.js
- Express
- MongoDB (base de datos)

## Frontend

- React con TypeScript
- Zustand para la gestión del estado
- Axios

## Características principales

- Registro de usuarios
- Inicio de sesión
- Cierre de sesión
- Verificación del estado de autenticación
- Protección de rutas

## Estructura del proyecto

El proyecto está dividido en dos partes principales:

### Backend (/server)

- Configuración de Express y MongoDB
- Rutas de autenticación
- Modelos de usuario
- Middleware de autenticación

### Frontend (/client)

- Componentes de React para registro e inicio de sesión
- Gestión del estado de autenticación con Zustand
- Servicios para comunicación con el backend
- Rutas protegidas

## Configuración

1. Clona el repositorio
2. Instala las dependencias del backend y frontend:
   ```
   cd server && npm install
   cd ../client && npm install
   ```
3. Configura las variables de entorno en el backend (archivo .env)
4. Inicia el servidor de desarrollo:
   ```
   # En la carpeta server
   npm run dev
   
   # En la carpeta client
   npm run dev
   ```

## Uso

- Accede a la aplicación en `http://localhost:3000`
- Regístrate como nuevo usuario o inicia sesión si ya tienes una cuenta
- Explora las funcionalidades protegidas una vez autenticado

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios propuestos antes de realizar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
