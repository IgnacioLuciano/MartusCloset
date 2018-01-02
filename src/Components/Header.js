import React from 'react';

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <a href="/Inicio">Inicio</a>
    <a href="/SobreNosotros">Sobre Nosotros</a>
    <a href="/Servicios">Servicios</a>
    <a href="/Contacto">Contacto</a>
    <a href="/Galeria">Galeria de Fotos</a>
    <a href="/Bruma">Bruma</a>
  </div>
);

export default Header;
