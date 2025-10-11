import { Navbar, Nav, Container } from 'react-bootstrap';
import { useCart } from "../organisms/CartContext";
import { Link } from "react-router-dom";

function NavBar() {
  const { totalItems } = useCart();

 return (
   <Navbar bg="success" variant="dark" expand="lg" className="navbar-custom-text">
     <Container>
       <Navbar.Brand href="/">Plantita</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="/">Inicio</Nav.Link>
           <Nav.Link href="/productos">Productos</Nav.Link>
           <Nav.Link href="/blog">Blog</Nav.Link>
           <Nav.Link href="/contacto">Contacto</Nav.Link>
         </Nav>
       </Navbar.Collapse>
       <Navbar.Brand href="/login">Login</Navbar.Brand>
       <Navbar.Brand href="/register">Register</Navbar.Brand>
       <Nav.Link as={Link} to="/cart">🛒 Carrito ({totalItems})</Nav.Link>
     </Container>
   </Navbar>
 );
}


export default NavBar;