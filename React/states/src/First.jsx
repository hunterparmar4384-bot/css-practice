// import { useState } from "react"



// const First = () =>{
//     const[text,SetText] = useState("hello")
//     const[count,Setcount] = useState(0)

//     const handlecount =() =>{
//         Setcount(count-1)
//         SetText("Set by text function")
//     }
//     return(
//         <>
//         <h1>{text}</h1>
//         <button onClick = {()=>SetText(' welcome to React JS class')}>click</button>

//         <h2>{count}</h2>
//         <button onClick={()=>Setcount(count+1)}>++</button>
//         <button onClick={handlecount}>--</button>
        
//         </>
//     )
// }
import { useState } from "react";
const First = () =>{
    const[text,setText] = useState("hello")
    const[count,Setcount] = useState(0)

    const min = () =>{
        Setcount(count-1)
        setText("hello and wel come to React js")
    }

    return(
        <>
        <h1>{text}</h1>
        <button onClick={() =>setText("welcome to React js")}>click to change text</button>

        <h1>{count}</h1>
        <button onClick={()=>Setcount(count+1)}>++</button>
        <button onClick={min}>--</button>
        </>
    )
}
export default First;
