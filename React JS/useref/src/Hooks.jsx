import React, { useRef } from 'react'

function Hooks() {
    const inputRef = useRef()
    const clickRef = useRef()

const handlechange = () =>{
    inputRef.current.style.color='green'
}
const handleclick = () =>{
    clickRef.current.style.color='red'

}

  return (    

    <div>
        <input ref={inputRef} type='text' name='' id='' onChange={handlechange}/>
        <br /><br />
        <input ref={clickRef} type='text' name='' id='' />
        <button onClick={handleclick}>CLICK NOW</button>




    </div>
  )
}
export default Hooks