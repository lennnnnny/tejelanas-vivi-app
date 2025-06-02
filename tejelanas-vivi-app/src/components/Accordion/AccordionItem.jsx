import React, { useState } from 'react';
import styles from './Accordion.module.css';

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button
        className={styles.accordionHeader}
        onClick={toggleOpen}
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls={`accordion-content-${question.replace(/\s/g, '-')}`}
      >
        {question}
        <span className={styles.accordionIcon}>{isOpen ? '−' : '+'}</span>
      </button>
      <div
        id={`accordion-content-${question.replace(/\s/g, '-')}`}
        className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}
        aria-hidden={isOpen ? "false" : "true"}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default AccordionItem;