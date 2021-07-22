import React, {useState, useEffect} from 'react';
import Producto from './Item'

const listaProductos = [
                {
                    titulo: "Campera Harry Potter",
                    descripcion: "Campera de HP",
                    img: "https://i.pinimg.com/736x/6a/ee/2a/6aee2a9a125ff5f48cf1f1b56163f03c.jpg",
                    precio: 2599
                }, 
                {
                    titulo: "Body Hogwarts",
                    descripcion: "Body con escudo de Hogwarts",
                    img: "https://m.media-amazon.com/images/I/61vTW3PpckL._AC_UL1000_.jpg",
                    precio: 1059
                },
                {
                    titulo: "Bola'Hogwarts'",
                    descripcion: "Bola de nieve de Hogwarts",
                    img: " https://m.media-amazon.com/images/I/81ElxJbMuxL._AC_SX425_.jpg",
                    precio: 799
                },
                {
                    titulo: "Buzo Griffindor",
                    descripcion: "Buzo con escudo de Griffindor",
                    img: "https://images-ext-2.discordapp.net/external/P3gIJHH_pSaZVXPNxlcndPvVLuGP4ZgeVe9kseWJkxE/https/d3ugyf2ht6aenh.cloudfront.net/stores/535/056/products/campera-gryffindor-ml-20191-88372f5c22006cb00e15655761809925-1024-1024.jpg?width=670&height=670",
                    precio: 2599
                },
                {
                    titulo: "Buzo Harry Potter",
                    descripcion: "Buzo rayo y lentes 'Harry Potter'",
                    img: "https://http2.mlstatic.com/D_NQ_NP_940809-MLA46778892792_072021-O.webp", 
                    precio: 2599
}]





export default function ListadoProductos (){
    return (
        <section className="todosproductos">
            {listaProductos.map((producto)=>{
                return (
                   <Producto producto= {producto}/>
                );
            })}
        </section>
    )
}
