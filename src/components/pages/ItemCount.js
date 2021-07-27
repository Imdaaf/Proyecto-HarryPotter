import {useState} from 'react'


export default function ItemCount(props){
    const [cantidad, setCantidad] = useState(props.initial)

    const Sumar = () => {
        const cantidadTotal = cantidad + 1 
        if (cantidadTotal <= props.stock){
            setCantidad(cantidadTotal)
        }
    }
    const Restar = () =>{
        const cantidadTotal = cantidad - 1
        if (cantidadTotal >= props.initial){
            setCantidad(cantidadTotal)
        }
    }
    const Agregar = () =>{
        const mensaje = `Agregaste ${cantidad} producto`
        if (props.stock !== 0){
            (cantidad === 1) ? alert (mensaje) : alert(mensaje + 's')
        }
    }
    
    return(
        <div className="contador">
            <button type="button"className="resta" onClick = {Restar}>-</button>
            <input type="number" className="cantidadSeleccionada"  disabled value = {cantidad} />
            <button className="suma" onClick = {Sumar}>+</button>
            <button className="agregarCarrito" onClick = {Agregar}>Agregar al carrito</button>
        </div>
        
    )
    
}