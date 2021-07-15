import './App.css'; 
import Navegador from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ProductsContainer from './components/ProductsContainer'

function App() {
  return (
    <div>
      <header className="navegador">
        <Navegador />
      </header>
   
      <div className="contenedor">
        <ItemListContainer 
          titulo = 'Vivero Las Marías'
          greeting = 'Bienvenido a nuestro vivero.'/>
      </div>
      <div className= "contenedorProductos">
        <ProductsContainer />

      </div>
   </div>

  );
}

export default App;
