import React from "react";
import "./loginform.css"


const Loginform = () => {

    return (
        
        <div className="cover">
           

            <h3>Inicia Sesión</h3>
            <p>Ingrese su correo electrónico: </p>
            <input type="text" placeholder="email"/>
            <p>Ingrese su contraseña: </p>
            <input type="password" placeholder="password"/>
            
            <div className="login-btn">Iniciar</div>

            <p>¿Aún no tienes cuenta? <a href="">Crea una aquí</a></p>
        </div>
    )
}

export default Loginform