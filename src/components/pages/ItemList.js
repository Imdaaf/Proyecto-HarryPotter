import Item from './Item'

export default function ItemList({productos}){
    return(
        <div className='containerItemList'>
            {productos.map(producto =>{
                return(
                    <Item
                        key = {producto.id}
                        id = {producto.id}
                        titulo = {producto.titulo}
                        descripcion = {producto.descripcion}
                        precio = {producto.precio}               
                        img = {producto.img}
                        categoria = {producto.categoria}
                        stock = {producto.stock}
                    />
                )
            })}
        
        </div>
    )
}