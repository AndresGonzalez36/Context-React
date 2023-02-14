import Galeria from '../components/Galeria.jsx'
import React from 'react';

export default function Favoritos() {
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       <Galeria fav={true}></Galeria>
      </div>
    </div>
  );
}
