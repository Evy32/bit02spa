import { useContext } from "react";
import { dataContext } from "../Context/dataContext";
import './cartContent.css'

import React from 'react'
import CartItemCount from "./cartItemCount";

const CartElement = () => {
    const { cart, setCart } = useContext(dataContext);

    const borrarProducto = (id) => {
        const buscarId = cart.find((element) => element.id === id);

        const newCart = cart.filter((element) => {
            return element !== buscarId;
        });

        setCart(newCart);
    };

    return cart.map((producto) => {
        return (
            <div className="cartObjeto" key={producto.id}>
                <img src={producto.img} alt="imagen" />
                <h3 className="nombre">{producto.name}</h3>
                <CartItemCount product={producto}></CartItemCount>
                <h4 className="price">{producto.price * producto.cant}</h4>

                <h3 className="btnBorrar" onClick={() => borrarProducto(producto.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                </h3>
            </div>
        )
    })
}

export default CartElement