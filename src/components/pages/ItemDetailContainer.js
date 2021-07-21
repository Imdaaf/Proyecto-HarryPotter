import React, {useState, useEffect} from 'react';

export default function ItemDetailContainer(){
    const [items, getItems] = useState([])
    
    useEffect(() => {
        const tarea = new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve()
            }, 2000);
        });

        tarea
            .then(
                resolve => {
                    getItems(resolve)
                }, 
                reject => {
                    console.log ("Error", reject)
                }
            )
    })
}