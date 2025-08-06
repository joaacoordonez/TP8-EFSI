import { useParams } from "react-router-dom";
import CardXId from "../../../components/CardXId/CardXId";

const VerProducto = () => {

    const {id} = useParams();
    return(
        <CardXId id={id}/>
    )
}

export default VerProducto;