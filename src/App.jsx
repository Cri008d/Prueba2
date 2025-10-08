import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/NavBar';
import Home from './pages/Home';
import Producto from './pages/Producto';
import ProdDetalles from './pages/ProdDetalles';

function App() {
 return (
   <>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Productos" element={<Producto />} />
       <Route path="/products/:id" element={<ProdDetalles />} />
     </Routes>
   </>
 );
}
export default App;


