import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>          
             <Route path="/about">
               <About />
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
