// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarBrand}>
        Tejelanas Vivi
      </Link>
      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle navigation">
        ☰
      </button>
      <ul className={`${styles.navbarNav} ${isOpen ? styles.show : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)} onClick={() => setIsOpen(false)}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)} onClick={() => setIsOpen(false)}>
            Quiénes Somos
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)} onClick={() => setIsOpen(false)}>
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)} onClick={() => setIsOpen(false)}>
            Preguntas Frecuentes
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)} onClick={() => setIsOpen(false)}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;