import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from "../components/organisms/Footer";


function Home() {
 return (
    <div>
      {/* Imagen de portada */}
      <div
        style={{
          backgroundImage: "url('https://cdn.kiwilimon.com/articuloimagen/30131/28243.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
        }}
      >
        <h1>🌱 Bienvenido a Plantita</h1>
      </div>

      {/* Contenido de bienvenida */}
      <Container className="my-5">
        <h2>¿Quienes somos?</h2>
        <p>a</p>
        <p>
          🌱Plantita - Tu espacio para disfrutar y cuidar tus plantas.
             Encuentra productos frescos, tips y novedades en nuestro blog.
             Síguenos y mantente conectado.
            © 2025 Plantita. Todos los derechos reservados.
            Contacto: info@plantita.cl | Tel: +56 9 1234 5678
        </p>
      </Container>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Home;