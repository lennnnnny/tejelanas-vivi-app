import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard.jsx';
import { getProductsServices } from '../services/api.js';

function ProductsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsAndServices = async () => {
      try {
        const data = await getProductsServices();

        const combinedItems = [];

        if (data.productos) {
          data.productos.forEach(p => {
            combinedItems.push({
              id: `prod-${p.id}`,
              image: p.imgs && p.imgs.length > 0 ? p.imgs[0] : 'https://via.placeholder.com/300x180?text=Producto',
              title: p.nombre,
              description: p.descripcion,
              productName: p.nombre,
              type: 'producto'
            });
          });
        }

        if (data.servicios) {
          data.servicios.forEach(s => {
            combinedItems.push({
              id: `serv-${s.id}`,
              image: s.imgs && s.imgs.length > 0 ? s.imgs[0] : 'https://via.placeholder.com/300x180?text=Servicio',
              title: s.nombre,
              description: `Ubicación: ${s.ubicacion}, Fecha: ${s.fecha}, Cupos: ${s.cupos}`,
              productName: s.nombre,
              type: 'servicio'
            });
          });
        }

        setItems(combinedItems);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar productos y servicios:', err);
        setError('No se pudieron cargar los productos y servicios en este momento. Inténtalo de nuevo más tarde.');
        setLoading(false);
      }
    };
    fetchProductsAndServices();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '100px', fontSize: '1.2em', color: 'var(--color-text)' }}>Cargando nuestros productos y servicios...</p>;
  }

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center', marginTop: '100px', fontSize: '1.2em' }}>{error}</p>;
  }

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.8em', color: 'var(--color-secondary)', marginBottom: '40px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>Nuestros Productos y Servicios</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.length > 0 ? (
          items.map(item => (
            <ServiceCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              productName={item.productName}
              type={item.type}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.1em', color: 'var(--color-text)' }}>No hay productos o servicios disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;