import './ProductoDetallado.css';

const ProductoDetallado = ({ producto }) => {
  return (
    <div className="producto-detallado-container">
      <div className="producto-imagen">
        <img src={producto.images[0]} alt={producto.title} />
      </div>
      <div className="producto-info">
        <h2>{producto.title}</h2>
        <p className="descripcion">{producto.description}</p>
        <p className="precio">${producto.price}</p>
        <p className="categoria">Categoría: {producto.category}</p>
        <p className="disponibilidad">{producto.availabilityStatus}</p>
        <p className="marca">Marca: {producto.brand}</p>
        <p className="envio">Envío: {producto.shippingInformation}</p>
        <p className="garantia">Garantía: {producto.warrantyInformation}</p>
      </div>
    </div>
  );
};

export default ProductoDetallado;
