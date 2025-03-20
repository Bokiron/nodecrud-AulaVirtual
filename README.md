# nodecrud-AulaVirtual
Este Aula Virutal es una aplicación web diseñada para la gestión del software de una Escuela Superior de Informática.  Esta aplicación permite a administradores, profesores y alumnos gestionar asignaturas, software y procesos de instalación de forma eficiente.

## Funcionalidades
### **Gestión de Usuarios**
- **Administrador:**
  - Crear, modificar y eliminar usuarios.
  - Asignar roles a usuarios.
  - Crear asignaturas y asignar profesores y alumnos.
- **Profesor:**
  - Modificar información de sus asignaturas.
  - Añadir y editar instrucciones de instalación de software.
- **Alumno:**
  - Consultar el software disponible en sus asignaturas.

### **Gestión de Asignaturas**
- Asignaturas con múltiples profesores y alumnos.
- Información detallada sobre instalación de software.
- Soporte para enlaces externos (URLs).

### **Mantenimiento y Mejoras**
- **Mantenimiento Correctivo:**
  - Importación masiva de datos desde archivos CSV.
  - Gestión de planes de estudio (Grado, Máster, Doctorado).
  - Carga y descarga de archivos de software y licencias.
- **Mantenimiento Perfectivo:**
  - Notificaciones a alumnos sobre cambios en sus asignaturas.
  - Módulo de sugerencias y reportes de errores.
- **Mantenimiento Adaptativo:**
  - Diseño responsive adaptable a dispositivos móviles.
- **Mantenimiento Preventivo:**
  - Análisis del sistema y mejoras en estabilidad y rendimiento.

## Tecnologías Utilizadas
- **Backend:** Node.js, Express
- **Base de Datos:** MongoDB / MySQL
- **Autenticación:** JSON Web Tokens (JWT)
- **Frontend:** React.js / Vue.js
- **Estilos:** Tailwind CSS / Bootstrap

## Instalación y Configuración
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/esi-app-store.git
   ```
2. Instalar dependencias:
   ```sh
   cd esi-app-store
   npm install
   ```
3. Configurar variables de entorno en un archivo `.env`:
   ```env
   PORT=5000
   DB_URI=mongodb://localhost:27017/esi_app_store
   JWT_SECRET=supersecreto
   ```
4. Ejecutar el servidor:
   ```sh
   npm start
   ```
