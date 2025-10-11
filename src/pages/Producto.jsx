import { Container,Row } from 'react-bootstrap';
import products from '../data/Producto';
import ProductCard from '../components/organisms/ProductCard';
import Footer from "../components/organisms/Footer";

function Producto() {
 return (
   <Container className="my-5">
     <h1>Productos</h1>
     <Row>
       {products.map((product) => (
         <ProductCard key={product.id} product={product} />
       ))}
     </Row>
     <Footer/> 
   </Container>

 );
}


export default Producto;