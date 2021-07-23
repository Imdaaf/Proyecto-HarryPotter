import './App.css'; 
import Navegador from './components/pages/NavBar'
import ItemList from './components/pages/ItemList';
import Greeting from './components/pages/Greeting';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Navegador />
    <Greeting />
    <ItemList/>
    </BrowserRouter>
  );
}

export default App;
