import './App.css';
import Header from './Header'
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import About from './About'
import Help from './Help'


function App() {
  return (
    <div className="App">    
      
      <Router>
        <Header></Header>
       <Switch>        
          <Route path="/about">
            <About />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer></Footer>
    </Router>

    </div>
  );
}
export default App;