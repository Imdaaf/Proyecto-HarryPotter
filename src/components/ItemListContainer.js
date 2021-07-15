export default function ItemListContainer(props){
    return(
        <div>
            <h1 style={{color: '#76B3A9'}} className="titulo">{props.titulo}</h1>
            <h2 style={{color: 'violet'}} className="titulo">{props.greeting}</h2>
        </div>
    )
}