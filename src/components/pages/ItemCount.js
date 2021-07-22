import {useState} from 'react'


export default function ItemCount(){
    const [itemCount, setItemCount] = useState (1);
    return(
        <div className="contador">
            <button type="button"className="resta" onClick = {() => {setItemCount(itemCount - 1)}}>-</button>
            <input type="number" className="cantidadSeleccionada"  disabled value = {itemCount} />
            <button className="suma" onClick = {() => {setItemCount(itemCount + 1)}}>+</button>
        </div>
        
    )
    
}