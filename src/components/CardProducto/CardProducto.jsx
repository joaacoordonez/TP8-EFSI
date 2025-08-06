import './CardProducto.css'
import BotonVer from '../BotonVer/BotonVer';

const CardProducto = ({producto}) => {
    return(
        <>
        <li className="CardProducto" key={producto.id}>
            <img src={producto.images[0]} alt="" />
            <h3>{producto.title}</h3>
            <p className="Precio">${producto.price}</p>
            <h4 className="Precio">Categoria: {producto.category}</h4>
            <BotonVer id={producto.id}/>
        </li>
        </>
    )
}

export default CardProducto;
