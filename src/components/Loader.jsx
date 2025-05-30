import React from 'react';
import '../styles/components/Loader.css';

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <svg className="loader-svg" viewBox="0 0 50 50">
          <circle
            className="loader-circle"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          />
        </svg>
        <div className="loader-text">Lola Pavon</div>
      </div>
    </div>
  );
}

export default Loader;