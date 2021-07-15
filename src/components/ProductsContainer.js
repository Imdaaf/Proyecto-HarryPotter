import React from 'react'
import {useState, useEffect, useRef} from 'react'
import Products from './Products'

export default function ProductsContainer() {
    const [cart, setCart] = useState ([])
    const primerRender = useRef(true);

    const getProduct = (form, producto) =>{
        form.preventDefault()
         let item = {
             producto : producto.title,
             imagen : producto.image,
             precio: producto.price,
             itemCount: form.target[1].value

         }
         setCart([...cart, item]);
    }
    useEffect(() =>{
        if (!primerRender.current){
            alert("El item se agregó correctamente")
            primerRender.current = false; 
        }
       
    }, [cart])

    return(
        <div>
            <Products
            title = "Potus"
            image = "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/256/857/products/_r6a21541-e6ab079b527708e84915954375522635-1024-1024.png"
            price = "70.50"
            addCart = {getProduct}/>
        </div>

    )


}
