# Sodería App

## Objetivos

El objetivo de la app de la **Sodería** es crear una Single Page Application (SPA) para gestionar una sodería, permitiendo la administración de productos, clientes, stock y ventas. La aplicación incluye un sistema de autenticación con dos roles de usuario:

- **Clientes**: Pueden visualizar productos disponibles y gestionar sus pedidos.
- **Administradores**: Tienen acceso completo para gestionar productos, clientes, ventas y usuarios.

La aplicación está diseñada para ser moderna, responsiva y cumplir con estándares web, utilizando una API simulada para operaciones CRUD.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo frontend para una experiencia rápida y optimizada.
- **JSON Server**: API simulada para manejar datos de usuarios, productos, clientes y ventas.
- **React Router DOM**: Gestión de rutas para navegación en la SPA.
- **Zustand**: Gestión de estado global para manejar sesión, carrito y tipo de usuario.
- **Bootstrap**: Framework CSS para un diseño responsivo y moderno.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
- **React Hooks**: Incluye `useState`, `useEffect`, `useParams`, `useNavigate` y un hook personalizado (`useHttp`) para operaciones HTTP.

## Instrucciones de Instalación y Uso

### Prerrequisitos

- **Node.js**: Versión 16 o superior.
- **npm**: Incluido con Node.js.
- **Git**: Para clonar el repositorio (opcional).

### Instalación

1. **Clona el repositorio** (si está en un repositorio Git, si no, crea una carpeta para el proyecto):
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd soderia-app
   ```

2. **Instala las dependencias**:
   Dentro de la carpeta del proyecto (`soderia-app`), ejecuta:
   ```bash
   npm install
   ```

3. **Instala JSON Server globalmente** (si no lo tienes instalado):
   ```bash
   npm install -g json-server
   ```

4. **Crea el archivo `db.json`**:
   En la raíz del proyecto, crea un archivo `db.json` con el siguiente contenido:

   ```json
   {
     "users": [
       { "id": 1, "email": "admin@soderia.com", "password": "admin123", "role": "admin" },
       { "id": 2, "email": "cliente@soderia.com", "password": "cliente123", "role": "cliente" }
     ],
     "products": [
       { "id": 1, "name": "Soda de Cola 1L", "price": 2.5, "stock": 100 },
       { "id": 2, "name": "Soda de Naranja 1L", "price": 2.5, "stock": 80 }
     ],
     "clients": [
       { "id": 1, "name": "Juan Pérez", "email": "juan@example.com", "phone": "123456789" }
     ],
     "sales": [
       { "id": 1, "clientId": 1, "productId": 1, "quantity": 2, "total": 5.0, "date": "2025-06-14" }
     ]
   }
   ```

### Ejecución

1. **Inicia JSON Server**:
   En una terminal, en la raíz del proyecto, ejecuta:
   ```bash
   json-server --watch db.json --port 3001
   ```
   Esto iniciará la API simulada en `http://localhost:3001`. Verifica que la API esté activa accediendo a `http://localhost:3001/users` en un navegador.

2. **Inicia la aplicación React**:
   En otra terminal, dentro de la carpeta `soderia-app`, ejecuta:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

### Uso

1. **Accede a la aplicación**:
   Abre un navegador y ve a `http://localhost:5173`. La página inicial mostrará una landing page moderna y responsiva.

2. **Inicia sesión**:
   - Dirígete a `/login` o haz clic en el enlace "Iniciar Sesión" en la barra de navegación.
   - Usa las siguientes credenciales de prueba:
     - **Admin**: `admin@soderia.com` / `admin123`
     - **Cliente**: `cliente@soderia.com` / `cliente123`
   - Los administradores serán redirigidos a `/admin` (panel de administración).
   - Los clientes serán redirigidos a `/client` (panel de cliente).

3. **Funcionalidades**:
   - **Clientes**:
     - Visualizar productos disponibles.
     - Agregar productos al carrito.
   - **Administradores**:
     - Gestionar productos (agregar nuevos productos).
     - Visualizar lista de clientes.
     - Visualizar lista de ventas.

4. **Cerrar sesión**:
   - Usa el botón "Logout" en la barra de navegación para cerrar la sesión y volver a la página inicial.

### Notas

- **Caché del navegador**: Si no ves los cambios esperados, limpia la caché del navegador o usa una ventana de incógnito.
- **Errores de red**: Asegúrate de que JSON Server esté corriendo en `http://localhost:3001` antes de iniciar la aplicación React.
- **Extensiones de archivos**: Todos los archivos con JSX deben tener la extensión `.jsx` (por ejemplo, `AdminDashboard.jsx`).
- **Personalización**: Puedes extender la aplicación agregando más rutas, funcionalidades CRUD completas (editar/eliminar), o mejorando los estilos.
