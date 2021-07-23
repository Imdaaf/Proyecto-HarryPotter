import React from 'react'
import '../css/NavBar.css'
import Carrito from './CartWidget'
import logo from '../img/hp.png'

export default function Navegador() {
    return(
        <header className="navegador">
            <nav className="containerNavegador">
            <ul className="listaAnclas">
                <img className= "brand" src={logo} alt="#"/>
                <li className= "lista"><a className= "ancla" href="#">Home</a></li>
                <li className= "lista"><a className= "ancla" href="#">Productos</a></li>
                <li className= "lista"><a className= "ancla" href="#">Contacto</a></li>
                <li className= "lista"><Carrito /></li>
            </ul>  
            
        </nav>
        </header>
        

    )
    
}
