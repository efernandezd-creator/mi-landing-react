import React, { useState } from 'react';

export default function Hero() {
const [likes, setLikes] = useState(0);

return (
    <header style={{ textAlign: 'center', padding: '60px 20px', background: '#f4f7f6', borderBottom: '1px solid #e0e0e0' }}>
    <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Desarrollo Web con React</h1>
    <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '10px auto 30px' }}>
        Esta es una landing page básica dividida en componentes reutilizables e interactivos.
    </p>
    
    <button
        onClick={() => setLikes(likes + 1)}
        style={{ padding: '12px 24px', fontSize: '1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
    >
        👍 ¡Apoya este proyecto! Likes: {likes}
    </button>
    </header>
);
}