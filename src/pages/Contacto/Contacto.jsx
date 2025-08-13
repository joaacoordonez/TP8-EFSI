import './contacto.css'

const Contacto = () => {
    return(
    <>
        <form>
            <label>Ingresa tu nombre</label>
            <input type="text" />
            <label>Ingresa tu email</label>
            <input type="email" />
            <label>Ingresa tu telefono</label>
            <input type="tel" />
            <label>Dejanos tu opinión</label>
            <textarea type="text"/>
            <div className='Button'> 
                <button type="submit">Enviar</button>
            </div>
            
        </form>
    </>
    
)};

export default Contacto;