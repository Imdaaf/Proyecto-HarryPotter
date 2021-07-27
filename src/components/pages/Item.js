import React from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import '../css/Item.css'


export default function Item ({id, titulo, descripcion, precio, img, stock}){
 
    return(
        <div className="producto">
            <Link to='/' className='linkCard'>
                <h2 className="nombreProducto">{titulo}</h2>
                <h2 className="descripcionProducto">{descripcion}</h2>
                <h2 className="precioProducto">{precio}</h2>
                <img src={img} className="fotoProducto" alt="Foto"/>
            </Link>
            <ItemCount stock = {stock} initial = {1}/>
            
        </div>
    )
}
