import React, { useMemo, useState } from 'react'

function Hooks() {
    
    const [no, setno] = useState(0)
    const st = useMemo(()=>{
        return no * no
    })
  return (
    <div>
        <h1>{no}</h1>
        <h1>{st}</h1>
        <button onClick={()=>setno(no+1)}>+++</button>

         
    </div>
  )
}

export default Hooks
