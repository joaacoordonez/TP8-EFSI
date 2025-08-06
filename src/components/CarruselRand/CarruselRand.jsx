import React, { useEffect, useState } from "react";
import "./carruselRand.css";
import CardProducto from "../CardProducto/CardProducto";
import api from "../../../api/api"; 

const CarruselRand = () => {
    const [randomProducts, setRandomProducts] = useState([]);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        const arrayRandoms = [];
        while (arrayRandoms.length < 6) {
            const randomId = getRndInteger(1, 16);
            if (!arrayRandoms.includes(randomId)) {
                arrayRandoms.push(randomId);
            }
        }
        api.get("/products")
            .then(res => {
                const todosLosProductos = res.data.products;
                const seleccionados = todosLosProductos.filter(producto =>
                    arrayRandoms.includes(producto.id)
                );
                setRandomProducts(seleccionados);
            })
            .catch(err => {
                console.error("Error al obtener productos:", err);
            });
    }, []);

    return (
        <div className="carrusel-container">
            <h2>Productos recomendados</h2>
            <div className="carrusel">
                {randomProducts.map(producto => (
                    <CardProducto key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

export default CarruselRand;
