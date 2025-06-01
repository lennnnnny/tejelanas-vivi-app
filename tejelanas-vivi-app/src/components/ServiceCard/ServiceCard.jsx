// src/components/ServiceCard/ServiceCard.jsx
import React from 'react';
import styles from './ServiceCard.module.css'; 
import { useNavigate } from 'react-router-dom'; 

function ServiceCard({ image, title, description, productName }) {
  const navigate = useNavigate();

  const handleContactClick = () => {
    
    navigate(`/contact?product=${encodeURIComponent(productName)}`);
  };

  return (
    <div className={styles.serviceCard}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <button onClick={handleContactClick} className={styles.contactButton}>
        Contáctanos
      </button>
    </div>
  );
}

export default ServiceCard;