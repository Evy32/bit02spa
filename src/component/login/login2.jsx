import React, { useState } from 'react'
import { Component } from 'react'
import './login2.css'
import md5 from 'md5';
import axios from 'axios';



const baseURL = "http://localhost:3001/Usuarios";
const Login2 = () => {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [userError, setUserError] = useState(false);




    const guardarDatosUsuario = (e) => {
        e.preventDefault();
        if (userName === "" || userPassword === "" || userType === "") {
            setUserError(true);
            return
        }
        setUserError(false);
    }

    const iniciarSecion = async () => {
        await axios.get(baseURL, {
            parametros:
            {
                userName: userName,
                userPassword: md5(userPassword),
                userType: userType
            }
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error("Error fetching data:", error);
        })

    }

    return (
        <>

            <div className='login2Contenedor'>

                <form action="" onSubmit={guardarDatosUsuario}>
                    <h2>Ingresa</h2>
                    <label for="username">
                        <span>Nombre de usuario: </span>
                        <input
                            value={userName}
                            name="userName"
                            type="text"
                            onChange={e => setUserName(e.target.value)}
                        />
                    </label>

                    <label for="password">
                        <span>Contraseña:</span>
                        <input
                            value={userPassword}
                            name="password"
                            type="text"
                            onChange={e => setUserPassword(e.target.value)}
                        />
                    </label>

                    <label class="selectType" for="selectType">
                        <span>Tipo de usuario:</span>
                        <select
                            value={userType}
                            name="seleccion"
                            id='type'
                            onChange={e => setUserType(e.target.value)}
                        >
                            <option value="">--Selecciona--</option>
                            <option value="user">Usuario</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </label>

                    <button class="submit-btn" type="submit" onClick={() => iniciarSecion()}>
                        Ingresar
                    </button>
                    {userError && <p>Todos los campos son obligatorios</p>}
                </form>

            </div>
        </>
    )
}

export default Login2