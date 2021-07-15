import React from 'react'
import Carrito from './CartWidget'
import logo from './logo.png'

export default function Navegador() {
    return(
        <nav className="containerNavegador">
            <ul className="listaAnclas">
                <img className= "brand" src={logo} />
                <li className= "lista"><a className= "ancla" href="">Home</a></li>
                <li className= "lista"><a className= "ancla" href="">Productos</a></li>
                <li className= "lista"><a className= "ancla" href="">Contacto</a></li>
                <li className= "lista"><Carrito /></li>
            </ul>  
            
        </nav>

    )
    
}