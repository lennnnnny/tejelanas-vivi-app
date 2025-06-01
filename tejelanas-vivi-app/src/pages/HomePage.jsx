// src/pages/HomePage.jsx
import React from 'react';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'; // Importa tu carrusel
// Si tienes imágenes en tu carpeta assets, impórtalas aquí
// import lana1 from '../assets/lana1.jpg';
// import vellon2 from '../assets/vellon2.jpg';
// import taller3 from '../assets/taller3.jpg';

function HomePage() {
  // Datos de ejemplo para el carrusel.
  // En un proyecto real, estas URLs podrían venir de una API o CMS.
  const carouselImages = [
    { src: 'https://via.placeholder.com/800x400?text=Lanas+Naturales+Premium', alt: 'Variedad de lanas naturales', caption: 'Lanas 100% naturales para tus proyectos.' },
    { src: 'https://via.placeholder.com/800x400?text=Vellon+Artesanal', alt: 'Suave vellón de oveja', caption: 'Vellón de oveja para hilado y fieltro.' },
    { src: 'https://via.placeholder.com/800x400?text=Taller+de+Crochet', alt: 'Taller de crochet en progreso', caption: 'Aprende nuevas técnicas en nuestros talleres.' },
    { src: 'https://via.placeholder.com/800x400?text=Insumos+Variados', alt: 'Herramientas y accesorios de tejido', caption: 'Todo lo que necesitas para tejer.' },
  ];

  return (
    <div style={{ paddingTop: '80px', textAlign: 'center' }}> {/* Ajusta el padding superior por el Navbar fijo */}
      <h2>Bienvenido a Tejelanas Vivi</h2>
      <p>Tu lugar para insumos de tejido, lanas naturales y talleres de crochet en Laguna de Zapallar.</p>

      <ProductCarousel images={carouselImages} /> {/* Integra el carrusel aquí */}

      {/* Puedes añadir más secciones aquí si lo deseas */}
    </div>
  );
}

export default HomePage;