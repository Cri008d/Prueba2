import React from "react";
import "../styles/Producto.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Productos() {
  return (
    <div className="cuerpo">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="../index.html">Verde en Casa🌿</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" href="../index.html">Inicio</a>
                <a className="nav-link active" href="../html/contacto.html">Contacto</a>
                <a className="nav-link active" href="../">Productos</a>
                <a className="nav-link active" href="../html/blog.html">Blog</a>
              </div>

              <div className="d-flex align-items-center ms-auto">
                <a className="btn btn-outline-success" href="../html/Carrito.html">
                  Carrito (<span id="carrito-count">0</span>)
                </a>
                <a className="btn btn-outline-dark" href="../html/login.html">Login</a>
                <a className="btn btn-outline-dark" href="../html/register.html">Registrarse</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="bloque">
        <img className="img-ver align-items-center ms-auto" src="../assets/img/verduras.jpg" alt="ver" />
      </div>

      <div className="contenedor">
        <div className="caja">
          <img className="imagen1" src="../assets/img/lechuga-rom.jpg" alt="img1" />
          <p>Lechuga romana</p>
          <button type="button" className="btn btn-secondary">Agregar</button>
          <button type="button" className="btn btn-secondary">Detalles</button>
        </div>

        <div className="caja">
          <img className="imagen2" src="../assets/img/Tomate.jpg" alt="img2" />
          <p>Tomate</p>
          <button type="button" className="btn btn-secondary">Agregar</button>
          <button type="button" className="btn btn-secondary">Detalles</button>
        </div>

        <div className="caja">
          <img className="imagen2" src="../assets/img/zanahoria.jpg" alt="img2" />
          <p>Zanahoria</p>
          <button type="button" className="btn btn-secondary">Agregar</button>
          <button type="button" className="btn btn-secondary">Detalles</button>
        </div>
      </div>
    </div>
  );
};

export default Productos;