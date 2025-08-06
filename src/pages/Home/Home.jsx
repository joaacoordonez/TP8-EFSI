import './home.css';
import CarruselRand from '../../components/CarruselRand/CarruselRand.jsx';

const Home = () => {


    return (
        <div className='home-container'>
            <h1>Bienvenido a la mejor empresa de venta de productos online!</h1>
            
            <ul className="lista-productos">
                <CarruselRand/>
            </ul>
        
        </div>
    );
};

export default Home;
