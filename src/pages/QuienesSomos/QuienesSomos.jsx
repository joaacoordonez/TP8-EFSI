import "./QuienesSomos.css";
import oficina2 from "../../assets/quienesSomos/oficina2.webp";
import oficina3 from "../../assets/quienesSomos/oficina3.webp";

const QuienesSomos = () => {
  return (
    <div className="quienes-container">
      <section className="presentacion">
        <h1>Somos líderes en venta de productos online en Latinoamérica</h1>
        <p>
          Somos una tienda online creada con el objetivo de acercarte productos
          de calidad, al mejor precio y con la comodidad de recibirlos donde
          estés. Creemos que comprar por internet tiene que ser simple, seguro y
          rápido, por eso trabajamos cada día para ofrecerte una experiencia
          ágil, transparente y confiable. Detrás de cada pedido hay un equipo
          comprometido con la atención al cliente, la selección de buenos
          productos y el envío a tiempo. Nos apasiona lo que hacemos y queremos
          que lo notes en cada detalle. Gracias por elegirnos. ¡Estamos para
          ayudarte!
        </p>
      </section>

      <section className="oficinas">
        <h2>Nuestras oficinas comerciales</h2>
        <div className="galeria">
          <img src={oficina2} alt="Oficina 2" />
          <img src={oficina3} alt="Oficina 3" />
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
