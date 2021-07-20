import React, {useState, useEffect} from 'react';
import Item from './Item'

export default function ItemList(){
    const [items, setItems] = useState([])
    
    useEffect(() => {
        const tarea = new Promise ((resolve, reject) => {
            const listaProductos = [
                {
                    titulo: "Campera Harry Potter",
                    descripcion: "Campera de HP",
                    precio: 2599
                }, 
                {
                    titulo: "Body Hogwarts",
                    descripcion: "Body con escudo de Hogwarts",
                    precio: 1059
                },
                {
                    titulo: "Bola'Harry'",
                    descripcion: "Bola de nieve de Harry Potter",
                    precio: 799
                },
                {
                    titulo: "Buzo Griffindor",
                    descripcion: "Buzo con escudo de Griffindor",
                    precio: 2599
                },
                {
                    titulo: "Buzo Harry Potter",
                    descripcion: "Buzo rayo y lentes 'Harry Potter'",
                    precio: 2599
                }]
            console.log(listaProductos)

            setTimeout (() => {
                resolve(listaProductos)
            }, 2000);
        });

        tarea
            .then(
                resolve => {
                    setItems(resolve)
                }, 
                reject => {
                    console.log ("Error", reject)
                }
            )
    }, []);

    return(
        <div>
            {items.map(item => {
                <Item 
                titulo = {item.titulo}
                descripcion = {item.descripcion}
                precio = {item.precio} />
            })}
        </div>
        
    );
}
