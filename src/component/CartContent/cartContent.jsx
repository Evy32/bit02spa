import React from 'react'
import CartElement from './cartElement'
import NavBar from '../navBar/navBar'
import CartTotal from './cartTotal'
import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

const CartContent = () => {
    const { cart } = useContext(dataContext);



    return cart.length > 0 ? (
        <>
            <NavBar />
            <div className='cartContenedor'>
                <div className='cartLista'>
                    <h2>Carrito de Compras</h2>
                    <CartElement />
                    <CartTotal />
                </div>

            </div>

        </>
    ) : (
        <>
            <NavBar />
            <div className='cartContenedor'>
                <div className='cartLista'>
                    <h2>El carrito esta vacio</h2>

                </div>

            </div>
        </>
    )
}

export default CartContent