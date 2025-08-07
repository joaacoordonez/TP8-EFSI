import ProductoDetallado from "../ProductoDetallado/ProductoDetallado.jsx";
import api from "../../../api/api.js"; 
import { useEffect, useState } from "react";

const CardXId = ({ id }) => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        setProducto(res.data);  
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener el producto:", err);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Cargando producto...</p>
      ) : producto ? (
        <ul className="lista-productos">
          <ProductoDetallado key={producto.id} producto={producto} />
        </ul>
      ) : (
        <p>No se encontró el producto.</p>
      )}
    </>
  );
};

export default CardXId;
