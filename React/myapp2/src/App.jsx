import logo from './logo.svg';
import './App.css';
import First from './First'

function App() {  
 return(
  <>
  {/* {<First val ="hello"></First>} */}
  {/* <First val = {{name:"shaktsinh", age:25}}></First> */}

  <First val = {[{name:"demo", age:20},{name:"demo2", age:22},{name:"demo3", age:24}]}></First>
    
  </>
 );  
};
 export default App