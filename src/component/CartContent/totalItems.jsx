import React from 'react'
import { useContext } from 'react';
import { dataContext } from "../Context/dataContext";


const TotalItems = () => {
    const { cart } = useContext(dataContext);

    const itemCantidad = cart.reduce((acumulador, elemento) => acumulador + elemento.cant, 0);

    return (
        <>
            <p className='itemsTotal'>{itemCantidad}</p>
        </>
    )
}

export default TotalItems