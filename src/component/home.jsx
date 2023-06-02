import React from 'react'
import Banner from './Banner/banner';
import NavBar from './navBar/navBar';
import ProductosHogar from './Productos/productosHogar';
import ProductosMovil from './Productos/productosMovil';
import ProductosExtra from './Productos/productosExtra';

export const Home = () => {
    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <div className='productCardContenedor'>
                <h2 id='productosHogar'>Hogar</h2>
                <div className='product'>
                    <ProductosHogar />
                </div>
                <h2 id='productosMovil'>Movil</h2>
                <div className='product'>

                    <ProductosMovil />
                </div>
                <h2 id='productosExtra'>Extra</h2>
                <div className='product'>

                    <ProductosExtra />
                </div>
            </div>
        </>
    )
}
export default Home;
