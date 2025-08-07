import CardProducto from "../../components/CardProducto/CardProducto";
import api from "../../../api/api.js";
import { useEffect, useState } from "react";
import './productos.css'
import { useParams } from "react-router-dom";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const {nombreCategoria} = useParams()

  const productosMostrar = productos.filter((p) => p.slug == nombreCategoria)

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
          <ul className="lista-productos">
            {productos.map((producto) => (
              
                <CardProducto key={producto.id} producto={productosMostrar} />
        
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Productos;
