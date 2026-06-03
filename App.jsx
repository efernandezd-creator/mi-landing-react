import React, { useState } from 'react';
import './App.css';

const misTemas = [
  { id: 1, titulo: "Lógica con JavaScript", desc: "Uso de arreglos, funciones y manipulación del DOM.", icono: "🌸", apuntes: "Estudiamos estructuras de control, métodos avanzados de arreglos como .map() y .filter(), y cómo dar vida a elementos HTML dinámicamente." },
  { id: 2, titulo: "Componentes en React", desc: "Creación de interfaces modulares y reutilizables.", icono: "✨", apuntes: "Aprendimos a dividir la interfaz en bloques de código independientes, el paso de información mediante props y la gestión de estados con useState." },
  { id: 3, titulo: "Estilos Modulares", desc: "Estructuras visuales limpias usando CSS personalizado.", icono: "🎀", apuntes: "Exploramos el diseño responsivo, uso de flexbox, gradientes lineales estéticos y animaciones suaves para mejorar la experiencia de usuario." }
];

function App() {
  const [corazones, setCorazones] = useState(0);
  // Estado para controlar qué tarjeta se está visualizando en la ventana flotante
  const [temaActivo, setTemaActivo] = useState(null);

  return (
    <div className="app-container">
      
      <header className="navbar">
        <div className="logo">💻 Emily's Dev Space</div>
        <nav className="nav-links">
          <span>Inicio</span>
          <span>Proyectos</span>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <span className="badge">✨ Proyecto Práctico</span>
          <h1>Desarrollo Web con React</h1>
          <p>
            Bienvenido a mi espacio de ingeniería de software. Esta es una landing page básica
            diseñada para demostrar el uso de componentes, manejo de estados y renderizado dinámico.
          </p>
          
          <button className="btn-corazon" onClick={() => setCorazones(corazones + 1)}>
            💖 Apoya mi proyecto: {corazones}
          </button>
        </div>
      </section>

      <main className="cards-container">
        <h2>📚 Lo que aprendimos en este ciclo</h2>
        <div className="cards-grid">
          {misTemas.map((item) => (
            <div key={item.id} className="tarjeta-estudiante">
              <div className="tarjeta-icono">{item.icono}</div>
              <h3>{item.titulo}</h3>
              <p>{item.desc}</p>
              {/* Al dar clic, guardamos todo el objeto del tema actual */}
              <button className="btn-detalle" onClick={() => setTemaActivo(item)}>
                Ver apuntes ✨
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* VENTANA FLOTANTE ESTÉTICA (Solo se muestra si temaActivo tiene datos) */}
      {temaActivo && (
        <div className="modal-overlay" onClick={() => setTemaActivo(null)}>r
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-icono">{temaActivo.icono}</span>
              <h3>{temaActivo.titulo}</h3>
            </div>
            <div className="modal-body">
              <h4>📝 Mis apuntes de clase:</h4>
              <p>{temaActivo.apuntes}</p>
            </div>
            <button className="btn-cerrar-modal" onClick={() => setTemaActivo(null)}>
              Entendido ✨
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© 2026 - Creado con 💖 por Emily Fernández Davila</p>
        <p>Universidad Estatal de Milagro • Software Engineering</p>
      </footer>

    </div>
  );
}

export default App;