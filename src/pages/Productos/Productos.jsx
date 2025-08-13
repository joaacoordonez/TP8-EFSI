import CardProducto from "../../components/CardProducto/CardProducto";
import api from "../../../api/api.js";
import { useEffect, useState } from "react";
import "./productos.css";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProductos(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener los productos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <>
        <h1 className="title">Todos nuestros productos</h1>
          <ul className="lista-productos">
            {productos.map((producto) => (
              <CardProducto key={producto.id} producto={producto} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Productos;
