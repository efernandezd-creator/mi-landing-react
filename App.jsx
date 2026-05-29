import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

export default function App() {
  // Arreglo de datos en JavaScript que usaremos para clonar las tarjetas dinámicamente
  const misServicios = [
    { id: 1, titulo: "Lógica en JavaScript", descripcion: "Control de flujos y manipulación de eventos en tiempo real.", icono: "⚡" },
    { id: 2, titulo: "Componentes React", descripcion: "Estructuras modulares e independientes que optimizan el código.", icono: "⚛️" },
    { id: 3, titulo: "Estilos Modulares", descripcion: "Diseños limpios aplicados directamente mediante objetos JS.", icono: "🎨" }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fafafa' }}>
      <Navbar />
      <Hero />
      
      {/* Sección donde se renderizan las tarjetas usando un bucle .map de JavaScript */}
      <main id="servicios" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '40px 20px', flex: 1 }}>
        {misServicios.map((item) => (
          <Card
            key={item.id}
            titulo={item.titulo}
            descripcion={item.descripcion}
            icono={item.icono}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}