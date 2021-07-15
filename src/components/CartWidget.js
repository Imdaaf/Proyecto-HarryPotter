import React, {Component} from 'react'
import carrito from './carrito.png'

export default class ClassComponent extends Component{

    render() {
        return(
            <img src={carrito} className="imgCarrito" />
            
        )

    }
}