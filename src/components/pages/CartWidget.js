import React, {Component} from 'react'
import carrito from '../img/carrito.png'

export default class ClassComponent extends Component{

    render() {
        return(
            <img src={carrito} className="imgCarrito" alt="#" />
            
        )

    }
}