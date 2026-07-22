import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import About from './About';
import Useres from './Useres';
import Layout from './Layout';


function App() {
  return (
    <div className="App">

      <Router>
       <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/useres">
            <Useres />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>      
    </Router>         
    </div>
  );
}

export default App;
