import React from 'react'
import { useContext } from "react";
import { dataContext } from "../Context/dataContext";


const CartItemCount = ({ product }) => {
    const { cart, setCart, comprarProducto } = useContext(dataContext);

    const restar = () => {
        const productoResta = cart.find((item) => item.id === product.id);

        productoResta.cant !== 1 && setCart(cart.map((item) => (item.id === product.id ? { ...product, cant: productoResta.cant - 1 } : item)));


    }

    return (
        <>
            <p className='btnContador' onClick={() => restar(product)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                </svg>
            </p>
            <p>{product.cant}</p>
            <p className='btnContador' onClick={() => comprarProducto(product)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                </svg>
            </p>
        </>
    )
}

export default CartItemCount