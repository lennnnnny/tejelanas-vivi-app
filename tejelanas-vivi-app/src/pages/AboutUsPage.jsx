import React, { useEffect, useState } from 'react';
import { getAboutUs } from '../services/api.js';

function AboutUsPage() {
  const [aboutUsContent, setAboutUsContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const data = await getAboutUs();
        setAboutUsContent(data);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar datos de "Quiénes Somos":', err);
        setError('No se pudo cargar la información de "Quiénes Somos" en este momento.');
        setLoading(false);
      }
    };
    fetchAboutUs();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '100px', fontSize: '1.2em', color: 'var(--color-text)' }}>Cargando información sobre nosotros...</p>;
  }

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center', marginTop: '100px', fontSize: '1.2em' }}>{error}</p>;
  }

  return (
    <div style={{ paddingTop: '80px', maxWidth: '800px', margin: '0 auto', paddingBottom: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5em', color: 'var(--color-secondary)' }}>Quiénes Somos</h2>
      {aboutUsContent ? (
        <div
          dangerouslySetInnerHTML={{ __html: aboutUsContent }}
          style={{
            lineHeight: '1.8',
            fontSize: '1.1em',
            backgroundColor: 'var(--color-light-background)',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            color: 'var(--color-text)'
          }}
        />
      ) : (
        <p style={{ textAlign: 'center', fontSize: '1.1em', color: 'var(--color-text)' }}>No hay información disponible sobre "Quiénes Somos".</p>
      )}
    </div>
  );
}

export default AboutUsPage;