import ProductoDetallado from "../ProductoDetalle/ProductoDetalle.jsx";
import api from "../../../../api/api.js"; 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Categoria = () => {
  const { nombreCategoria } = useParams();
  console.log("nombreCategoria:", nombreCategoria);

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`products/category/${nombreCategoria}`)
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
      {loading ? (
        <p>Cargando productos...</p>
      ) : productos.length > 0 ? (
        <ul className="lista-productos">
          {productos.map((producto) => (
            <ProductoDetallado key={producto.id} producto={producto} />
          ))}
        </ul>
      ) : (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </>
  );
};

export default Categoria;
