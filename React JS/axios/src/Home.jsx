import React, { useState, useEffect } from 'react'
import axios from 'axios';



function Home() {
    const [list, setList] = useState([])
    const[no, setNo] = useState(0)
    
    useEffect(() => {        
    dataview();
},[]);

    function dataview (){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res.data)
            setList(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
        <div>
            <button onClick={()=>setNo(no+1)}>CLICK</button>                  
            <table border={1} className='mt-5'>
                <thead>
                <tr>
                    <td>Userid</td>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
                </thead>
                <tbody>
                    {
                    list.map((i,index) =>(
                        <tr key={index}>
                            <td>{i.userId}</td>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.body}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>      
    </div>
  )
}
export default Home