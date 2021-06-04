
import './App.css';
import Menu from './components/Menu/Menu';
/* import Home from './components/Home/Home'; */
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
 } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';


function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/about" component={About}/>
      </Switch>
      
    </Router>
  );
}

export default App;
