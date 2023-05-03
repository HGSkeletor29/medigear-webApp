import React from "react";
import "./loginform.css"
import { Link } from "react-router-dom";


const Loginform = () => {

    return (


        <div className="cover">


            <h3>Inicia Sesión</h3>
            <p>Ingrese su correo electrónico: </p>
            <input type="text" placeholder="email" />
            <p>Ingrese su contraseña: </p>
            <input type="password" placeholder="password" />

            <Link to="/register" className="login-btn">Iniciar</Link>

            <p>¿Aún no tienes cuenta? <a href="">Crea una aquí</a></p>
        </div>
    )
}

export default Loginform