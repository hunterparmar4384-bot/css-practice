import logo from './logo.svg';
import './App.css';
import Sec from './Sec'

function App() {
  return (
    <>
    {/* <Sec val ="hello"></Sec> */}
    {/* <Sec val={{name:"demo" , age:23}}></Sec> */}

    <Sec val ={[{name:"demo1",age:15},{name:"demo2",age:20},{name:"demo3",age:25},{name:"demo4",age:30},{name:"demo5",age:35},]}></Sec>
    
    
    </>
  );
}
export default App;
