// src/components/ContactForm/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Para leer parámetros de la URL
import styles from './ContactForm.module.css';

function ContactForm() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '', // Este campo puede venir pre-llenado
    message: '',
    honeypot: '', // Campo honeypot para bots
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'submitting'

  useEffect(() => {
    // Lee el parámetro 'product' de la URL al cargar el componente
    const params = new URLSearchParams(location.search);
    const productFromUrl = params.get('product');
    if (productFromUrl) {
      setFormData(prevData => ({ ...prevData, product: decodeURIComponent(productFromUrl) }));
    }
  }, [location.search]);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido.';
    }
    // Honeypot check: si honeypot tiene valor, es un bot
    if (formData.honeypot) {
      newErrors.honeypot = '¡Detectado como bot!';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    // Limpiar el error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prevErrors => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    if (!validate()) {
      setSubmitStatus('error');
      return;
    }

    // Si el honeypot tiene valor, es un bot, no procesar el envío
    if (formData.honeypot) {
        setSubmitStatus('error');
        console.warn('Posible ataque de bot detectado (honeypot field lleno).');
        // Opcional: Podrías redirigir o mostrar un mensaje genérico para no dar pistas al bot.
        return;
    }


    // Simular el envío de datos a un servidor
    console.log('Datos del formulario a enviar:', formData);
    try {
      // Aquí iría tu llamada a la API real para enviar el formulario
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error('Error al enviar el formulario');
      // }

      await new Promise(resolve => setTimeout(resolve, 1500)); // Simula un retraso de red
      setSubmitStatus('success');
      setFormData({ name: '', email: '', product: '', message: '', honeypot: '' }); // Limpiar formulario
      setErrors({}); // Limpiar errores
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p id="name-error" className={styles.error}>{errors.name}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <p id="email-error" className={styles.error}>{errors.email}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="product">Producto/Servicio de Interés:</label>
        <input
          type="text"
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          readOnly={!!formData.product} // Hacer solo lectura si viene pre-llenado
          className={formData.product ? styles.readOnlyField : ''}
        />
        {/* No hay error para este campo, ya que es opcional o pre-llenado */}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
             value={formData.message}
onChange={handleChange}
aria-invalid={errors.message ? "true" : "false"}
aria-describedby={errors.message ? "message-error" : undefined}
></textarea>
{errors.message && <p id="message-error" className={styles.error}>{errors.message}</p>}
</div>
  {/* Campo honeypot (oculto para usuarios, visible para bots) */}
      <div className={styles.honeypot}>
        <label htmlFor="honeypot" className="visually-hidden">No llenar este campo:</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex="-1" // Evita que los usuarios lleguen a él con el teclado
          autoComplete="off" // Evita autocompletado
        />
        {errors.honeypot && <p className={styles.error}>{errors.honeypot}</p>}
      </div>


      <button type="submit" disabled={submitStatus === 'submitting'}>
        {submitStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {submitStatus === 'success' && (
        <p className={styles.successMessage}>¡Gracias! Tu mensaje ha sido enviado.</p>
      )}
      {submitStatus === 'error' && submitStatus !== 'submitting' && (
        <p className={styles.errorMessage}>Hubo un error al enviar tu mensaje. Por favor, revisa los campos.</p>
      )}
    </form>
  );
}

export default ContactForm;