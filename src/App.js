import './App.css'; 
import Navegador from './components/pages/NavBar'
import ItemList from './components/pages/ItemList';


function App() {
  return (
    <div>
      <header className="navegador">
        <Navegador />
      </header>
      <h1 style= {{color: 'white'}} className= "titulo">Tienda Expeliarmus</h1>
      <h2 style= {{color: 'white'}} className= "subtitulo">Productos oficiales de Harry Potter</h2>
      <div className="contenedor">
        <ItemList/>
      </div>
   </div>

  );
}

export default App;
