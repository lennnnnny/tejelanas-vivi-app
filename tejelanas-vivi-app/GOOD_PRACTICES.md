# Guía de Buenas Prácticas - Desarrollo Frontend Tejelanas Vivi

Este documento describe las convenciones y prácticas recomendadas para el desarrollo frontend del proyecto Tejelanas Vivi, utilizando React y Vite. Nuestro objetivo es fomentar la consistencia del código, la mantenibilidad, la accesibilidad y la usabilidad.

---

## 1. Convenciones de Nomenclatura

La consistencia en la nomenclatura es crucial para la legibilidad y comprensión del código.

* **Componentes React:** Utilizar `PascalCase`.
    * Ejemplos: `ServiceCard`, `ProductCarousel`, `ContactForm`, `HomePage`.
* **Archivos de Componentes:** Nombrar el archivo igual que el componente principal, con la extensión `.jsx`.
    * Ejemplos: `ServiceCard.jsx`, `ProductCarousel.jsx`.
* **Carpetas de Componentes:** Nombrar la carpeta con `PascalCase` y coincidiendo con el nombre del componente principal que contiene.
    * Ejemplos: `components/ServiceCard/`, `components/ProductCarousel/`.
* **Funciones y Variables (JavaScript/React):** Utilizar `camelCase`.
    * Ejemplos: `handleClick`, `totalItems`, `formData`, `toggleMenu`.
* **Archivos CSS/Módulos CSS:** Utilizar `kebab-case`.
    * Ejemplos: `service-card.module.css`, `navbar.module.css`.
* **Clases CSS (dentro de módulos):** Utilizar `camelCase` o `kebab-case` según preferencia del equipo (se recomienda `camelCase` para ser consistente con JS).
    * Ejemplos: `styles.serviceCard`, `styles.cardImage`.

---

## 2. Estructura de Archivos y Carpetas

Una estructura organizada facilita la navegación y la escalabilidad del proyecto.

---

## 3. Uso de Variables y Manejo de Estado

* **Declaración de Variables:** Preferir `const` por defecto. Usar `let` solo cuando la variable necesite ser reasignada. Evitar `var`.
* **Estado Local (Componentes):** Usar `useState` para el estado interno de los componentes.
* **Efectos Secundarios:** Utilizar `useEffect` para operaciones con efectos secundarios (peticiones a API, manipulación del DOM, suscripciones). Asegurarse de especificar correctamente el array de dependencias.
* **Estado Global (opcional):** Para proyectos de mayor complejidad, se podría considerar el Context API o librerías como Redux/Zustand para estados compartidos por muchos componentes.

---

## 4. Accesibilidad (A11y) y Usabilidad (UX)

Nos esforzamos por crear una interfaz inclusiva e intuitiva para todos los usuarios.

* **HTML Semántico:** Utilizar elementos HTML con su propósito semántico (ej. `<nav>`, `<main>`, `<section>`, `<footer>`, `<button>`, `<h1>` a `<h6>`). Esto mejora la comprensión por parte de los navegadores y tecnologías de asistencia.
* **Atributos `alt` en Imágenes:** Todas las imágenes (`<img>`) deben tener un atributo `alt` descriptivo. Si una imagen es puramente decorativa y no añade significado, se puede usar `alt=""`.
* **Etiquetas (`<label>`) para Formularios:** Asociar siempre las etiquetas con sus campos de formulario usando el atributo `htmlFor` y el `id` del campo. Esto es crucial para la navegación con teclado y lectores de pantalla.
* **Estados de Foco:** Asegurar que los elementos interactivos (botones, enlaces, campos de formulario) tengan estados de foco visibles y claros (anillos de foco).
* **Atributos `aria-*`:** Utilizar atributos ARIA (Accessible Rich Internet Applications) cuando los elementos HTML nativos no proporcionan la semántica necesaria (ej. `aria-expanded` para acordeones, `aria-label` para botones sin texto visible).
* **Navegación por Teclado:** Asegurarse de que todos los elementos interactivos sean accesibles y navegables mediante el teclado (usando `Tab` y `Shift+Tab`).
* **Contraste de Color:** Garantizar un contraste de color suficiente entre el texto y el fondo para que el contenido sea legible para usuarios con baja visión.
* **Diseño Responsivo:** La interfaz debe adaptarse y ser funcional en diferentes tamaños de pantalla (escritorio, tabletas, móviles) utilizando media queries y layouts flexibles (Flexbox, Grid).
* **Mensajes de Error Claros:** Proporcionar mensajes de error claros y útiles en los formularios para guiar al usuario.
* **Feedback Visual:** Ofrecer feedback visual a las interacciones del usuario (ej. cambios de estado al pasar el ratón, al hacer clic, al enviar un formulario).

---

## 5. Optimización Avanzada

El rendimiento es clave para una buena experiencia de usuario.

* **Compresión de Imágenes:** Antes de subir imágenes al proyecto o usarlas desde una CDN, asegúrate de que estén comprimidas para reducir su tamaño de archivo sin perder calidad perceptible. Herramientas como TinyPNG o ImageOptim son recomendadas.
* **Carga Perezosa (Lazy Loading):** Implementar `loading="lazy"` en las etiquetas `<img>` para que las imágenes fuera del viewport inicial se carguen solo cuando el usuario se desplaza hacia ellas. Para componentes, usar `React.lazy` y `Suspense`.
* **`React.memo`:** Usar `React.memo` para optimizar componentes funcionales que no necesitan re-renderizarse si sus props no han cambiado.
* **`useCallback` y `useMemo`:** Para funciones y valores computados costosos, usar `useCallback` y `useMemo` para memorizar sus resultados y evitar recálculos innecesarios en cada re-render.
* **Minificación y Bundling:** Vite (nuestro bundler) se encarga automáticamente de minificar y empaquetar el código para producción, lo que reduce el tamaño del archivo final.

---

## 6. Integración con CMS y Consumo de Endpoints

* **Separación de Responsabilidades:** La lógica para consumir APIs debe estar separada en un directorio `services` (ej. `src/services/api.js`). Los componentes deben enfocarse en presentar los datos.
* **Manejo de Estados de Petición:** Implementar estados de `loading` (cargando) y `error` (error) al hacer peticiones a la API para informar al usuario sobre el estado de los datos.
* **Postman para CMS:** Para la gestión de contenido, los datos serán consumidos de los endpoints proporcionados. Postman se utilizará como una herramienta para simular la interacción con esos endpoints y verificar la estructura de los datos que la aplicación espera recibir, demostrando cómo un "equipo de contenido" podría trabajar.

---

## 7. Estrategias de Seguridad Avanzada (en Formularios)

Aunque gran parte de la seguridad reside en el backend, el frontend tiene un rol importante.

* **Validación del Lado del Cliente:** Implementar validación rigurosa de los campos de formulario (ej. formato de email, campos requeridos) antes de enviar los datos al servidor. Esto mejora la experiencia del usuario y reduce carga innecesaria en el servidor.
* **Protección contra Ataques de Robots (`Honeypot`):** Utilizar un campo `honeypot` (un campo oculto que solo los bots rellenarían) para detectar y descartar envíos de formularios automatizados. Esto ayuda a mitigar spam y ataques básicos.
* **Validación del Lado del Servidor (Concepto):** Es crucial mencionar que, en una aplicación real, **todas las validaciones del lado del cliente deben ser replicadas y reforzadas en el lado del servidor**. El frontend es solo para la experiencia del usuario; el servidor es la verdadera línea de defensa contra datos maliciosos o ataques. (No aplica implementar backend en esta evaluación, pero se reconoce la necesidad).

---

## 8. Colaboración y Control de Versiones (Git y GitHub)

* **Flujo de Trabajo de Ramas:** Utilizar un flujo de trabajo basado en ramas (ej. `main` o `develop` para el código estable, ramas de `feature/` para nuevas funcionalidades, `fix/` para correcciones de errores).
* **Commits Significativos:** Escribir mensajes de commit claros y concisos que describan el propósito del cambio (siguiendo, por ejemplo, la convención de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)).
    * `feat:` (Nueva funcionalidad)
    * `fix:` (Corrección de error)
    * `docs:` (Cambios en la documentación)
    * `style:` (Cambios de formato, sin afectar la lógica)
    * `refactor:` (Refactorización de código)
    * `perf:` (Mejora de rendimiento)
    * `test:` (Añadir o corregir tests)
    * `chore:` (Tareas de mantenimiento, sin cambios en el código de producción)
* **Pull Requests (PRs):** Para cada nueva funcionalidad o corrección, crear un Pull Request en GitHub. Esto permite la revisión de código por parte de los compañeros de equipo, asegurando la calidad y detectando posibles problemas.
* **`README.md` Completo:** Mantener un archivo `README.md` actualizado en la raíz del repositorio de GitHub que incluya:
    * Descripción del proyecto.
    * Instrucciones de instalación y ejecución.
    * Estructura del proyecto.
    * Guía de uso de los componentes principales con ejemplos de código.
    * Tecnologías utilizadas.
    * Colaboradores.

---

## 9. Liderazgo en la Mejora Continua y Retrospectivas

Fomentar un ambiente de aprendizaje y optimización constante.

* **Sesiones de Retrospectiva:** Planificar y liderar sesiones de retrospectiva periódicas con el equipo de desarrollo para identificar:
    * Qué funcionó bien (`Start`).
    * Qué se debería dejar de hacer (`Stop`).
    * Qué se debería seguir haciendo (`Continue`).
    * Qué se debería intentar hacer (`Try`).
* **Plan de Acción:** A partir de las retrospectivas, proponer y documentar un plan de acción con pasos concretos para abordar las áreas de mejora identificadas (ej. "Mejorar la cobertura de tests unitarios", "Refinar el proceso de revisión de PRs", "Explorar nuevas optimizaciones de rendimiento").
* **Compartir Conocimiento:** Fomentar la difusión del conocimiento dentro del equipo y documentar soluciones a problemas comunes.
