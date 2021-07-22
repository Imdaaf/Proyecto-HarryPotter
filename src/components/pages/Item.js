import React from 'react'
import ItemCount from './ItemCount';



export default function Producto (props){
   
    const {titulo, descripcion, precio, img} = props.producto;
    return(
        <section className="producto">
            <h1 className="nombreProducto">{titulo}</h1>
            <h2 className="descripcionProducto">{descripcion}</h2>
            <h2 className="precioProducto">{precio}</h2>
            <img src={img} className="fotoProducto"/>
            <ItemCount />
            
        </section>
    )
}
