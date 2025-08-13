import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/pages/layouts/MainLayout.jsx';
import Home from '../src/pages/Home/Home.jsx';
import Productos from './pages/Productos/Productos.jsx';
import VerProducto from './pages/Productos/ProductoDetalle/ProductoDetalle.jsx';
import QuienesSomos from './pages/QuienesSomos/QuienesSomos.jsx';
import Categoria from './pages/Productos/XCategoria/categoria.jsx';
import Contacto from './pages/Contacto/Contacto.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route path="/producto/:id" element={<VerProducto />}></Route>
          <Route path="/categoria/:nombreCategoria" element={<Categoria />} />
          <Route path="/quienes-somos" element={<QuienesSomos />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;