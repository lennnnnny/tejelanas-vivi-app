// src/components/ProductCarousel/ProductCarousel.jsx
import React from 'react';
// Importa los componentes de Swiper y los estilos CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'; // Módulos para navegación, paginación, autoplay, y accesibilidad

// Importa los estilos base de Swiper
import 'swiper/css';
// Importa los estilos de los módulos que usarás (opcional, pero recomendado para control granular)
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/autoplay'; // Si quieres estilos específicos para autoplay

import styles from './ProductCarousel.module.css';

function ProductCarousel({ images }) {
  // images es un array de objetos: [{ src: 'url_imagen', alt: 'descripción' }]
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]} // Activa los módulos
        spaceBetween={30} // Espacio entre slides
        slidesPerView={1} // Cuántos slides se ven a la vez
        navigation // Activa las flechas de navegación
        pagination={{ clickable: true }} // Activa la paginación con puntos cliqueables
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay cada 3 segundos, no se detiene al interactuar
        loop={true} // Bucle infinito del carrusel
        a11y={{
          prevSlideMessage: 'Slide anterior',
          nextSlideMessage: 'Siguiente slide',
          // Puedes personalizar más mensajes aquí para lectores de pantalla
        }}
        breakpoints={{
          // Configuración responsive
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideContent}>
              <img src={image.src} alt={image.alt} className={styles.carouselImage} />
              {image.caption && <p className={styles.imageCaption}>{image.caption}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;