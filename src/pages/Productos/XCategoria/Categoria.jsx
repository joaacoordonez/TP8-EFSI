import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProducto from "../../../components/CardProducto/CardProducto.jsx";
import api from "../../../../api/api.js";
import "./categoria.css"

const Categoria = () => {
  const { nombreCategoria } = useParams(); 
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!nombreCategoria) return;

    api
      .get(`/products/category/${nombreCategoria}`)
      .then((res) => {
        setProductos(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener los productos:", err);
        setLoading(false);
      });
  }, [nombreCategoria]);

  return (
    <>
      <h1 className="title">Productos de {nombreCategoria}</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : productos.length > 0 ? (
        <div className="lista-productos">
          {productos.map((producto) => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </>
  );
};

export default Categoria;
