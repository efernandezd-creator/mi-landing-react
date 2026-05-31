import React from 'react';

export default function Navbar() {
return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 40px', background: '#1e1e24', color: 'white', alignItems: 'center' }}>
    <h2 style={{ margin: 0 }}>Mi Software App</h2>
    <div>
        <a href="#inicio" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Inicio</a>
        <a href="#servicios" style={{ color: 'white', textDecoration: 'none' }}>Servicios</a>
    </div>
    </nav>
);
}