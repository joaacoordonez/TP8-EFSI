import { useNavigate } from "react-router-dom";

const BotonVer = ({ id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/producto/${id}`);
    };

    return (
        <button className="btnVerProducto" onClick={handleClick}>
            Ver Producto
        </button>
    );
};

export default BotonVer;
