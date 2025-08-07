import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../api/api.js"; 
import "./navbar.css";

const Navbar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    api
      .get("/products/categories")
      .then((res) => {
        setCategorias(res.data);
      })
      .catch((err) => {
        console.error("Error al obtener categorías:", err);
      });
  }, []);

  console.log(categorias)

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quienes-somos">Quienes somos</Link>
        <div className="dropdown">
          <p className="nav-link">Productos ▾</p>
          <div className="dropdown-content">
            <Link to="/productos">Todos</Link>
            {categorias.map((cat) => (
              <Link key={cat.slug} to={`/categoria/${cat.name}`}>
                  
              </Link>
            ))}
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
