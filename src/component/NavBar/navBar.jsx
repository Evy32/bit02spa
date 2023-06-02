import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'
import TotalItems from '../CartContent/totalItems';
import { useContext } from 'react';
import { dataContext } from "../Context/dataContext";


function NavBar() {
    const { cart } = useContext(dataContext);
    return (
        <div className='navContenedor'>
            <div className='navIzq'>
                <Link to={"/"}>
                    <img className='navLogo' src="https://www.creativefabrica.com/wp-content/uploads/2021/11/26/IA-logo-design-vector-Graphics-20773104-1-580x386.jpg" alt="" />
                </Link>
                <nav className='navbar'>
                    <a href="#productosHogar">Hogar</a>
                    <a href="#productosMovil">Movil</a>
                    <a href="#productosExtra">Extras</a>
                </nav>
            </div>

            <div className='navDer'>
                <Link className='btnCarrito' to={"/cart"}>
                    <svg svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <TotalItems />

                </Link>
                <Link className='login' to={"/login2"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <p>Ingresa</p>
                </Link>
            </div>

        </div >
    );
}
export default NavBar; 