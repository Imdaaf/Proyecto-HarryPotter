import React from 'react'
import {useState} from 'react'

export default function Item(props){
    const [itemCount, setItemCount] = useState (1);
    return (
        <div>
            <h1 className="nombre">{props.titulo}</h1>
            <p className="precio">{props.descripcion}</p>
            <p className="descripcion">{props.precio}</p>
            <button type="button"className="resta" onClick = {() => {setItemCount(itemCount - 1)}}>-</button>
            <input type="number" className="cantidadSeleccionada"  disabled value = {itemCount} />
            <button className="suma" onClick = {() => {setItemCount(itemCount + 1)}}>+</button>
            

        </div>
    )
}

