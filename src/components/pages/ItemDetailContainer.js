import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(productos){
    
    const [productos, setProductos] = useState ([])
    const getProductos = async () => {
        const data = await fetch('../JSON/Dataitem.json')
        const respuestaData = await data.json()
        console.log("data jason: ", respuestaData)
        setProductos (respuestaData)
    }

    useEffect (()=> {
        setTimeout(() => getProductos(), 2000)    
        }, [])

    return (
        <section className="todosproductos">
             <ItemDetail productos ={productos}/>
        </section>
    )

}