import React from 'react';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';

import lanasNaturalesImg from '../assets/carousel/lanas-naturales.jpg';
import vellonArtesanalImg from '../assets/carousel/vellon-artesanal.jpg';
import tallerCrochetImg from '../assets/carousel/taller-crochet.jpg';
import insumosTejidoImg from '../assets/carousel/insumos-tejido.jpg';

function HomePage() {
  const carouselImages = [
    { src: lanasNaturalesImg, alt: 'Lanas 100% naturales de colores suaves', caption: 'Lanas 100% naturales para tus proyectos.' },
    { src: vellonArtesanalImg, alt: 'Vellón de oveja suave y sin procesar', caption: 'Vellón de oveja para hilado y fieltro.' },
    { src: tallerCrochetImg, alt: 'Personas aprendiendo a tejer en un taller de crochet', caption: 'Aprende nuevas técnicas en nuestros talleres.' },
    { src: insumosTejidoImg, alt: 'Variedad de insumos para tejer: lanas, agujas, ganchos', caption: 'Todo lo que necesitas para tejer.' },
  ];

  return (
    <div style={{ paddingTop: '80px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.8em', color: 'var(--color-secondary)', marginBottom: '20px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>Bienvenido a Tejelanas Vivi</h2>
      <p style={{ fontSize: '1.3em', color: 'var(--color-text)', maxWidth: '800px', margin: '0 auto 40px' }}>
        Tu lugar para insumos de tejido, lanas naturales y talleres de crochet en Laguna de Zapallar.
      </p>

      <ProductCarousel images={carouselImages} />
    </div>
  );
}

export default HomePage;