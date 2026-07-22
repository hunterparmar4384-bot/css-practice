import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Services from './Services';
import Portfolio from './Portfolio'
import WhyUs from './Why-Us'
import Testimonials from './Testimonials';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>    
             <Route path="/Testimonials">
               <Testimonials />
             </Route>        
             <Route path="/Why-Us">
               <WhyUs />
             </Route>        
             <Route path="/portfolio">
               <Portfolio />
             </Route>        
            <Route path="/services">
               <Services />
             </Route>                 
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
