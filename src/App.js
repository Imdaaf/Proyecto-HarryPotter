import './App.css'; 
import Navegador from './components/pages/NavBar'
import ItemListContainer from './components/pages/ItemListContainer';


function App() {
  return (
    <div>
      <header className="navegador">
        <Navegador />
      </header>
      <h1 style= {{color: 'white'}} className= "titulo">Tienda Expeliarmus</h1>
      <h2 style= {{color: 'white'}} className= "subtitulo">Productos oficiales de Harry Potter</h2>
      <div className="contenedor">
        <ItemListContainer />
      </div>
   </div>

  );
}

export default App;
