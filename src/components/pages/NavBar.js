import React from 'react'
import '../css/NavBar.css'
import Carrito from './CartWidget'
import logo from '../img/hp.png'
import { Link } from 'react-router-dom'

export default function Navegador() {
    return(
        <header className="navegador">
            <nav className="containerNavegador">
            <ul className="listaAnclas">
                <img className= "brand" src={logo} alt="#"/>
                <li className= "lista">
                    <Link to='/' className="ancla">Inicio</Link>
                </li>
                <li className= "lista">
                    <Link to='/Productos' className="ancla">Productos</Link>
                </li>
                <li className= "lista">
                    <Link to='/Tienda' className="ancla">Tienda</Link>
                </li>
                
                <li className= "lista"><Carrito /></li>
            </ul>  
            
        </nav>
        </header>
        

    )
    
}
