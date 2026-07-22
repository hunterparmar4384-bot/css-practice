import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
    const [list, setList] = useState([])

    const token = "ylxGFG6VAQJgT5hm";

    function DataView(){
        
        axios.get('https://generateapi.techsnack.online/api/mydata', {
    headers: {
        // Authorization: `${token}`
        Authorization : token
    }
})
.then((res) => {
    console.log(res.data);
    setList(res.data.Data)
  
})
.catch((error) => {
    console.log(error);
});
    }

    useEffect (()=>{
        DataView()
    },[])

      console.log(list)

  return (
    <div>
      <table border={1}>
        <thead>
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>FROM</td>
                <td>GENDER</td>
                
            </tr>
        </thead>
        <tbody>
            {
                list.map((i,index)=>(
                    <tr key={index}>
                        <td>{i.Id}</td>
                        <td>{i.Name}</td>
                        <td>{i.From}</td>
                         <td>{i.Gender}</td>
                        
                

                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}
export default Home
