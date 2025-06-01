import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; 

function ProductsPage() {
 
  const dummyServices = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x180?text=Lanas+Naturales',
      title: 'Lanas Naturales',
      description: 'Amplia variedad de lanas 100% naturales para tus proyectos.',
      productName: 'Lanas Naturales',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x180?text=Vellon+de+Oveja',
      title: 'Vellón de Oveja',
      description: 'Suave vellón para fieltro y otros trabajos artesanales.',
      productName: 'Vellón de Oveja',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x180?text=Talleres+de+Crochet',
      title: 'Talleres de Crochet',
      description: 'Aprende y perfecciona tus técnicas de crochet en nuestros talleres.',
      productName: 'Taller de Crochet',
    },
  ];

  return (
    <div>
      <h2>Nuestros Productos y Servicios</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {dummyServices.map(service => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            productName={service.productName}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;