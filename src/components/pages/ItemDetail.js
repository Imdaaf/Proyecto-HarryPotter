export default function ItemDetail(productos){
    return(
        <div className='containerItemDetail'>
            {productos.map(producto =>{
                return(
                    <div className= "vistaDetallada">
                        <img src={producto.img} className="fotoProductoDetallada" alt="Foto"/>
                        <h2 className="nombreProductoDet">{producto.titulo}</h2>
                        <h2 className="descripcionProductoDet">{producto.descripcion}</h2>
                        <h2 className="precioProductoDet">{producto.precio}</h2>
                    </div>
                )

            })}
        </div>
    )
}