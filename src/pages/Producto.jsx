import { Container,Row } from 'react-bootstrap';
import products from '../data/Producto';
import ProductCard from '../components/organisms/ProductCard';


function Producto() {
 return (
   <Container className="my-5">
     <h1>Productos</h1>
     <Row>
       {products.map((product) => (
         <ProductCard key={product.id} product={product} />
       ))}
     </Row>
   </Container>

 );
}


export default Producto;