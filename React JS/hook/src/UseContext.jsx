import React, { createContext, useState } from 'react'
import Firstcon from './Firstcon'
import Secondcon from './Seconscon'


export const CounterContext = createContext()

const  UseContext = () => {
    const[no,setNo] = useState(0)
    const incre = () =>{
        setNo(no+1)
    }
    const decre = () =>{
        setNo(no-1)
    }    
  return (
    <>
    <div>
        <CounterContext provider value={{no,incre,decre}}>
            <Firstcon></Firstcon>
            <Secondcon></Secondcon>
        </CounterContext>      
    </div>
    </>    
  )
}
export default UseContext;