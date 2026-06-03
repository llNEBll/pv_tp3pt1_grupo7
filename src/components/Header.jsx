import React from 'react';
import '../css/styles.css';
import logo from "../assets/logo.png"
const Header = () => {
    return (
      <header>
        <div className="presentacion">
        <div className="contenendor-logo">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <div className="titulo">
          <h1>Gestión de Proyectos Educativos</h1>
        </div>
      </div>
      </header>
    )
}
export default Header;