import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';
import { getProductsServices } from '../../services/api';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productService: '',
    message: ''
  });

  const [productsServicesList, setProductsServicesList] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(null);

  useEffect(() => {
    const fetchProductsAndServices = async () => {
      try {
        const data = await getProductsServices();
        const combinedList = [];
        if (data.productos) {
          data.productos.forEach(p => combinedList.push(p.nombre));
        }
        if (data.servicios) {
          data.servicios.forEach(s => combinedList.push(s.nombre));
        }
        setProductsServicesList(combinedList);
        setLoadingProducts(false);
      } catch (err) {
        console.error('Error al cargar la lista de productos/servicios:', err);
        setErrorProducts('No se pudo cargar la lista de productos/servicios.');
        setLoadingProducts(false);
      }
    };
    fetchProductsAndServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado con éxito! (Simulado)');
    setFormData({ name: '', email: '', phone: '', productService: '', message: '' });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Contáctanos</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        {/* Campo Nombre Completo */}
        <div className={styles.formGroup}> {/* <-- CLASE AÑADIDA AQUÍ */}
          <label htmlFor="name" className={styles.label}>Nombre Completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Campo Correo Electrónico */}
        <div className={styles.formGroup}> {/* <-- CLASE AÑADIDA AQUÍ */}
          <label htmlFor="email" className={styles.label}>Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Campo Número de Teléfono */}
        <div className={styles.formGroup}> {/* <-- CLASE AÑADIDA AQUÍ */}
          <label htmlFor="phone" className={styles.label}>Número de Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Campo Producto/Servicio de Interés (ahora un select) */}
        <div className={styles.formGroup}> {/* <-- CLASE AÑADIDA AQUÍ */}
          <label htmlFor="productService" className={styles.label}>Producto/Servicio de Interés:</label>
          {loadingProducts ? (
            <p>Cargando opciones...</p>
          ) : errorProducts ? (
            <p className={styles.errorMessage}>{errorProducts}</p>
          ) : (
            <select
              id="productService"
              name="productService"
              value={formData.productService}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Selecciona un producto o servicio</option>
              {productsServicesList.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          )}
        </div>

        {/* Campo Mensaje */}
        <div className={styles.formGroup}> {/* <-- CLASE AÑADIDA AQUÍ */}
          <label htmlFor="message" className={styles.label}>Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default ContactForm;