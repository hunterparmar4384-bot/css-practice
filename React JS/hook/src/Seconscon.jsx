import React, { useContext } from 'react'
import { CounterContext } from './UseContext'

function Seconscon() {

    const{no,incre,decre} = useContext(CounterContext)
  return (
    <div>
        <>
        <h1>{no}</h1>
        <button onClick={incre}>+++</button>
        <button onClick={decre}>---</button>
        
        
        
        </>
      
    </div>
  )
}

export default Seconscon
