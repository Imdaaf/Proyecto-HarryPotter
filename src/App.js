import './App.css'; 
import Home from '../src/components/pages/Home'
import Productos from '../src/components/pages/Productos'
import Navegador from './components/pages/NavBar'
import ItemList from './components/pages/ItemList';
import Greeting from './components/pages/Greeting';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navegador />
        <Greeting />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Productos" component={Productos} />
          <Route exact path="/Tienda" component={ItemList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
