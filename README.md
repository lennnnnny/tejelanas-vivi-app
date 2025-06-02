React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh
Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the TS template for information on how to integrate TypeScript and typescript-eslint in your project.

Tejelanas Vivi App
Tejelanas Vivi es una aplicación web dinámica desarrollada con React, diseñada para mostrar productos y servicios relacionados con lanas naturales, vellón artesanal y talleres de tejido en Laguna de Zapallar. La aplicación proporciona una experiencia de usuario intuitiva, permitiendo a los visitantes explorar la oferta, conocer la empresa y contactar directamente.

🚀 Tecnologías Utilizadas
React: Biblioteca de JavaScript para construir interfaces de usuario.
CSS Modules: Para una estilización modular y evitar conflictos de clases.
Swiper.js: Para la implementación de un carrusel de imágenes moderno y responsivo.
Figma: Herramienta utilizada para el diseño UI/UX (si aplica, puedes mencionar otras como Adobe XD, etc.).
Node.js: Entorno de ejecución para la aplicación (para la API simulada).
Express: Framework web para Node.js (para la API simulada).
✨ Características Principales
Página de Inicio (Home): Un mensaje de bienvenida y un carrusel de imágenes destacadas con productos y talleres.
Página "Quiénes Somos": Información detallada sobre la empresa, cargada dinámicamente desde una API.
Página de Productos y Servicios: Una galería interactiva de productos y servicios ofrecidos, con la capacidad de cargar dinámicamente sus detalles desde una API.
Página de Preguntas Frecuentes (FAQ): Una sección de preguntas y respuestas en formato de acordeón, con contenido dinámico cargado desde una API.
Formulario de Contacto: Un formulario completo con validación y un selector dinámico de productos/servicios de interés, ideal para consultas de clientes.
Navegación Responsiva: Una barra de navegación adaptable que funciona tanto en dispositivos de escritorio como móviles (menú hamburguesa).
Diseño con Paleta de Colores Otoñal: Una estética visual cálida y cohesiva, utilizando variables CSS para fácil mantenimiento.
Manejo de Estados de Carga y Error: Retroalimentación visual al usuario mientras se cargan datos o en caso de fallos en la conexión con la API.
⚙️ Configuración y Ejecución Local
Sigue estos pasos para poner en marcha el proyecto en tu máquina local.

Prerrequisitos
Asegúrate de tener instalado Node.js (que incluye npm).

Instalación
Clona el repositorio:
git clone [https://github.com/lennnnnny/tejelanas-vivi-app.git](https://github.com/lennnnnny/tejelanas-vivi-app.git)
Navega al directorio del proyecto:
cd tejelanas-vivi-app
Instala las dependencias:
npm install
(Esto instalará todas las dependencias necesarias, incluyendo React, Swiper, etc.)
Ejecución de la API Simulada
Para que la aplicación funcione correctamente, necesitarás ejecutar el servidor de la API simulada.

Navega a la carpeta api:
cd api
Instala las dependencias de la API:
npm install
Inicia el servidor de la API:
npm start
La API estará disponible en http://localhost:3001.
Ejecución de la Aplicación React
Una vez que la API esté corriendo en un terminal separado:

Abre una nueva terminal y navega de nuevo a la raíz del proyecto (tejelanas-vivi-app).
Inicia la aplicación React:
npm start
La aplicación se abrirá automáticamente en tu navegador predeterminado en http://localhost:3000.
📂 Estructura del Proyecto
¡Claro que sí! Aquí tienes un borrador completo y profesional para tu archivo README.md, incluyendo el enlace a tu repositorio. Está diseñado para ser claro y útil tanto para evaluadores como para futuros colaboradores.

Markdown

Tejelanas Vivi App
Tejelanas Vivi es una aplicación web dinámica desarrollada con React, diseñada para mostrar productos y servicios relacionados con lanas naturales, vellón artesanal y talleres de tejido en Laguna de Zapallar. La aplicación proporciona una experiencia de usuario intuitiva, permitiendo a los visitantes explorar la oferta, conocer la empresa y contactar directamente.

🚀 Tecnologías Utilizadas
React: Biblioteca de JavaScript para construir interfaces de usuario.
CSS Modules: Para una estilización modular y evitar conflictos de clases.
Swiper.js: Para la implementación de un carrusel de imágenes moderno y responsivo.
Figma: Herramienta utilizada para el diseño UI/UX (si aplica, puedes mencionar otras como Adobe XD, etc.).
Node.js: Entorno de ejecución para la aplicación (para la API simulada).
Express: Framework web para Node.js (para la API simulada).
✨ Características Principales
Página de Inicio (Home): Un mensaje de bienvenida y un carrusel de imágenes destacadas con productos y talleres.
Página "Quiénes Somos": Información detallada sobre la empresa, cargada dinámicamente desde una API.
Página de Productos y Servicios: Una galería interactiva de productos y servicios ofrecidos, con la capacidad de cargar dinámicamente sus detalles desde una API.
Página de Preguntas Frecuentes (FAQ): Una sección de preguntas y respuestas en formato de acordeón, con contenido dinámico cargado desde una API.
Formulario de Contacto: Un formulario completo con validación y un selector dinámico de productos/servicios de interés, ideal para consultas de clientes.
Navegación Responsiva: Una barra de navegación adaptable que funciona tanto en dispositivos de escritorio como móviles (menú hamburguesa).
Diseño con Paleta de Colores Otoñal: Una estética visual cálida y cohesiva, utilizando variables CSS para fácil mantenimiento.
Manejo de Estados de Carga y Error: Retroalimentación visual al usuario mientras se cargan datos o en caso de fallos en la conexión con la API.
⚙️ Configuración y Ejecución Local
Sigue estos pasos para poner en marcha el proyecto en tu máquina local.

Prerrequisitos
Asegúrate de tener instalado Node.js (que incluye npm).

Instalación
Clona el repositorio:
git clone [https://github.com/lennnnnny/tejelanas-vivi-app.git](https://github.com/lennnnnny/tejelanas-vivi-app.git)
Navega al directorio del proyecto:
cd tejelanas-vivi-app
Instala las dependencias:
npm install
(Esto instalará todas las dependencias necesarias, incluyendo React, Swiper, etc.)
Ejecución de la API Simulada
Para que la aplicación funcione correctamente, necesitarás ejecutar el servidor de la API simulada.

Navega a la carpeta api:
cd api
Instala las dependencias de la API:
npm install
Inicia el servidor de la API:
npm start
La API estará disponible en http://localhost:3001.
Ejecución de la Aplicación React
Una vez que la API esté corriendo en un terminal separado:

Abre una nueva terminal y navega de nuevo a la raíz del proyecto (tejelanas-vivi-app).
Inicia la aplicación React:
npm start
La aplicación se abrirá automáticamente en tu navegador predeterminado en http://localhost:3000.
📂 Estructura del Proyecto
tejelanas-vivi-app/ ├── public/ # Archivos públicos (index.html, imágenes, etc.) │ └── images/ # Imágenes para el carrusel, etc. ├── src/ │ ├── assets/ # Recursos estáticos (imágenes de fondo, etc.) │ ├── components/ # Componentes reutilizables de UI (Accordion, ContactForm, Navbar, etc.) │ │ ├── Accordion/ │ │ ├── ContactForm/ │ │ ├── Navbar/ │ │ ├── ProductCarousel/ │ │ └── ServiceCard/ │ ├── pages/ # Componentes de página (Home, AboutUs, Contact, Products, FAQ) │ │ ├── AboutUsPage.jsx │ │ ├── ContactPage.jsx │ │ ├── FaqPage.jsx │ │ ├── HomePage.jsx │ │ └── ProductsPage.jsx │ ├── services/ # Lógica para interactuar con la API │ │ └── api.js │ ├── App.css │ ├── App.jsx # Componente principal de la aplicación │ ├── index.css # Estilos globales y variables CSS │ └── index.js # Punto de entrada de la aplicación ├── api/ # Servidor de API simulada (Node.js/Express) │ ├── data/ # Archivos JSON con datos simulados │ ├── index.js # Lógica del servidor de la API │ └── package.json ├── .gitignore ├── package.json # Dependencias del proyecto y scripts ├── README.md # Este archivo └── ...

🤝 Contribuciones
Las contribuciones son bienvenidas. Si encuentras un error o tienes una sugerencia, por favor, abre un "issue" o envía un "pull request".

📄 Licencia
Este proyecto está bajo la licencia MIT.
