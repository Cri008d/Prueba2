import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/NavBar';
import Home from './pages/Home';
import Producto from './pages/Producto';
import ProdDetalles from './pages/ProdDetalles';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from "./pages/Cart";
import { CartProvider } from "./components/organisms/CartContext";


function App() {
 return (
   <>
    <CartProvider>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Productos" element={<Producto />} />
       <Route path="/products/:id" element={<ProdDetalles />} />
       <Route path="/blog" element={<Blog />} />
       <Route path="/contacto" element={<Contacto />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/cart" element={<Cart />} />
     </Routes>
    </CartProvider>
   </>
 );
}
export default App;


