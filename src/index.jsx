import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Estilos globales
import './index.css';

// Inicializar raíz React
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si querés medir rendimiento o enviar estadísticas
// activá esta función y pasá un callback o usá un servicio tipo Google Analytics
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);
