import { Children, createContext, useEffect, useState } from "react";


export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [dataHogar, setDataHogar] = useState([]);
    const [dataMovil, setDataMovil] = useState([]);
    const [dataExtra, setDataExtra] = useState([]);


    // Parte del carrito
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseHogar = await fetch("../../../public/dataHogar.json");
                const jsonDataHogar = await responseHogar.json();
                setDataHogar(jsonDataHogar);

                const responseMovil = await fetch("../../../public/dataMovil.json");
                const jsonDataMovil = await responseMovil.json();
                setDataMovil(jsonDataMovil);

                const responseExtra = await fetch("../../../public/dataExtra.json");
                const jsonDataExtra = await responseExtra.json();
                setDataExtra(jsonDataExtra);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const comprarProducto = (producto) => {
        const productoRepetido = cart.find((item) => item.id === producto.id);

        if (productoRepetido) {
            setCart(cart.map((item) => (item.id === producto.id ? { ...producto, cant: productoRepetido.cant + 1 } : item)))
        } else {
            setCart([...cart, producto])
        }
    }

    return (
        <dataContext.Provider value={{ dataHogar, dataExtra, dataMovil, cart, setCart, comprarProducto }}>
            {children}
        </dataContext.Provider>
    );
};

export default DataProvider;