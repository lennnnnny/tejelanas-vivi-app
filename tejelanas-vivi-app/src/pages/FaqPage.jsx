import React, { useEffect, useState } from 'react';
import { getFaq } from '../services/api.js';
import AccordionItem from '../components/Accordion/AccordionItem.jsx';

function FaqPage() {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const data = await getFaq();
        const activeFaqs = data.filter(faq => faq.activo);
        setFaqData(activeFaqs);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar FAQs:', err);
        setError('No se pudieron cargar las preguntas frecuentes en este momento. Inténtalo de nuevo más tarde.');
        setLoading(false);
      }
    };
    fetchFaq();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '100px', fontSize: '1.2em', color: 'var(--color-text)' }}>Cargando preguntas frecuentes...</p>;
  }

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center', marginTop: '100px', fontSize: '1.2em' }}>{error}</p>;
  }

  return (
    <div style={{ paddingTop: '80px', maxWidth: '800px', margin: '0 auto', paddingBottom: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5em', color: 'var(--color-secondary)' }}>Preguntas Frecuentes</h2>
      {faqData.length > 0 ? (
        faqData.map(item => (
          <AccordionItem
            key={item.id}
            question={item.titulo}
            answer={item.respuesta}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center', fontSize: '1.1em', color: 'var(--color-text)' }}>No hay preguntas frecuentes disponibles en este momento.</p>
      )}
    </div>
  );
}

export default FaqPage;