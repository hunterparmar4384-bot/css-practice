 import React from 'react'
 import { useDispatch,useSelector } from 'react-redux'
 import { decre,incre } from './Buttonslice';
 
 
 function ButtonUI() {

    const data = useSelector((state) =>state.counter.no)
    console.log(data);

   // action call => useDispatch
    const dis = useDispatch()
   return (
     <>

     <div>

        <h1>{data}</h1>
        <button onClick={() => dis(incre())}>+++++</button>
        <button onClick={()=>dis(decre())}>-----</button>
       
     </div>
     </>
   )
 }
 
 export default ButtonUI
 
