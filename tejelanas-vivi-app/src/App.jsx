// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import ContactPage from './pages/ContactPage'; 
import AboutUsPage from './pages/AboutUsPage'; 
import ProductsPage from './pages/ProductsPage'; 
import FaqPage from './pages/FaqPage'; 
import Navbar from './components/Navbar/Navbar'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <Navbar /> {/* Tu barra de navegación */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Puedes añadir una ruta para 404 Not Found */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;