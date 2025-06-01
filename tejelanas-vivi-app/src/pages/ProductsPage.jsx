// src/pages/ProductsPage.jsx
import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard.jsx';
import { getProductsServices } from '../services/api.js';

function ProductsPage() {
  const [items, setItems] = useState([]); // Usaremos 'items' para productos y servicios combinados
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsAndServices = async () => {
      try {
        const data = await getProductsServices(); // data ahora es { productos: [...], servicios: [...] }
        
        // Combina productos y servicios, mapeando a un formato común para ServiceCard
        const combinedItems = [];

        if (data.productos) {
          data.productos.forEach(p => {
            combinedItems.push({
              id: `prod-${p.id}`, // Prefijo para asegurar IDs únicos entre productos y servicios
              image: p.imgs && p.imgs.length > 0 ? p.imgs[0] : 'https://via.placeholder.com/300x180?text=Producto', // Toma la primera imagen
              title: p.nombre,
              description: p.descripcion,
              productName: p.nombre, // Para el formulario de contacto
              type: 'producto' // Puedes usar esto si necesitas diferenciar
            });
          });
        }

        if (data.servicios) {
          data.servicios.forEach(s => {
            combinedItems.push({
              id: `serv-${s.id}`, // Prefijo para asegurar IDs únicos
              image: s.imgs && s.imgs.length > 0 ? s.imgs[0] : 'https://via.placeholder.com/300x180?text=Servicio', // Toma la primera imagen
              title: s.nombre,
              description: `Ubicación: ${s.ubicacion}, Fecha: ${s.fecha}, Cupos: ${s.cupos}`, // Construye la descripción
              productName: s.nombre, // Para el formulario de contacto
              type: 'servicio' // Puedes usar esto si necesitas diferenciar
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
    return <p style={{ textAlign: 'center', marginTop: '100px', fontSize: '1.2em' }}>Cargando nuestros productos y servicios...</p>;
  }

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center', marginTop: '100px', fontSize: '1.2em' }}>{error}</p>;
  }

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5em', color: '#3f51b5' }}>Nuestros Productos y Servicios</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}> {/* Añadido 'gap' para mejor espaciado */}
        {items.length > 0 ? (
          items.map(item => (
            <ServiceCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              productName={item.productName}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.1em' }}>No hay productos o servicios disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;