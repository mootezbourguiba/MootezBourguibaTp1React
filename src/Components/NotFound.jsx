import React from 'react';
import notFoundImage from '../assets/sold_out.png'; // Remplacez par le chemin de votre image notfound.jfif

function NotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <img src={notFoundImage} alt="Not Found" style={{ maxWidth: '300px' }} />
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;