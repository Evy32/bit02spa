import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

import React from 'react'

const CartTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((acumulador, elemento) => acumulador + (elemento.price * elemento.cant), 0);
    return (
        <div className="cartTotal">
            <h3>Total a pagar: {total} $</h3>

        </div>
    )
}

export default CartTotal