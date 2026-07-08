import { useState } from "react"
import styled from 'styled-components';

const Oddmsg = () =>{
    return(
        <>
        <H2>This is Odd number</H2>        
        </>
    )
}
const Evenmsg = () =>{
    return(
        <>
        <h1>This is Even number</h1>        
        </>
    )
}

const H1 = styled.h1`
color:red;
font-size:42px;
`
const BUTTON = styled.button`
width:50px;
height:30px;
font-size:20px;
`
const H2 = styled.h1`
color:blue;
`


const First = () =>{
    const[no,setno] = useState(0)
    return (
        
        <>
        

        <H1>{no}</H1>
        <BUTTON onClick={()=>setno(no+1)}>++</BUTTON>
        
        {
             (no%2===0)?<Evenmsg/> : <Oddmsg/>
            
        }

        </>
    );
};
export default First; 