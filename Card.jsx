import React from 'react';

export default function Card({ titulo, descripcion, icono }) {
const alertarServicio = () => {
    alert(`Has seleccionado el servicio de: ${titulo}`);
};

return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', margin: '15px', width: '280px', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
    <span style={{ fontSize: '3rem' }}>{icono}</span>
    <h3 style={{ color: '#222', marginTop: '10px' }}>{titulo}</h3>
    <p style={{ color: '#666', fontSize: '0.95rem' }}>{descripcion}</p>
    <button
        onClick={alertarServicio}
        style={{ marginTop: '15px', padding: '8px 16px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
    >
        Ver detalles
    </button>
    </div>
);
}