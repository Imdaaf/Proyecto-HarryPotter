import react from 'react';
import {useState, useEffect} from 'react'



export default function Products (props)  {
    const [itemCount, setItemCount] = useState (1);
    return (
            <div className="productos">
                <div className="titulo">
                    <p className="nombre"> {props.title}</p>
                </div>
                <div className="imagen">
                    <img src={props.image} alt="" className="potusImg"/> 
                </div>
                <div className="precio">
                    <p> $ {props.price} </p>
                </div>
                <div className="contador">
                    <form onSubmit= {(data, props) => {props.addCart(data, props)}}>
                    <button type="button"className="resta" onClick = {() => {setItemCount(itemCount - 1)}}>-</button>
                    <input type="number" className="cantidadSeleccionada"  disabled value = {itemCount} />
                    <button className="suma" onClick = {() => {setItemCount(itemCount + 1)}}>+</button>
                    <button type="submit">Agregar al carrito</button>
                    </form>
                </div>
            </div>
    );
    
}


