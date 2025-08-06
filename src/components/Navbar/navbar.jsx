import { Link, Outlet } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quienes-somos">Quienes somos</Link>
        <div className="dropdown">
          <p className="nav-link">Productos ▾</p>
          <div className="dropdown-content">
            <Link to="/productos">Todos</Link>
          </div>
        </div>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <Outlet />

      <footer>
        <p>Todos los derechos reservados</p>
        <p>TP 8 - Venta de productos online</p>
      </footer>
    </>
  );
};

export default Navbar;