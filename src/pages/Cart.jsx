import { Container, Button } from 'react-bootstrap';
import { useCart } from '../components/organisms/CartContext';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) 
    return <Container className="my-5"><h2>Carrito vacío</h2></Container>;

  // Calcular total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="my-5">
      <h2>Carrito</h2>
      {cart.map(item => (
        <div key={item.id} className="d-flex justify-content-between align-items-center my-2">
          <span>{item.name} x {item.quantity} = ${item.price * item.quantity}</span>
          <Button variant="danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
        </div>
      ))}
      <h4 className="mt-3">Total: ${total}</h4>
      <Button variant="secondary" onClick={clearCart} className="mt-3">Vaciar carrito</Button>
    </Container>
  );
}

export default Cart;
