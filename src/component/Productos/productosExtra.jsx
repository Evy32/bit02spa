import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

import React from 'react'

const ProductosExtra = () => {
    const { dataExtra, comprarProducto } = useContext(dataContext);


    return dataExtra.map((producto) => {
        return (
            <div className="card" key={producto.id}>
                <img src={producto.img} alt="imagen" />
                <h3>{producto.name}</h3>
                <h4>{producto.price}$</h4>
                <button onClick={() => comprarProducto(producto)}>Agregar</button>
            </div>
        );
    });
};

export default ProductosExtra