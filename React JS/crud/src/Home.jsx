import React, { useState } from 'react'

function Home() {
    const[data, setdata] = useState([])
    const [name, setname] = useState('')
    const [surname, setsurname] = useState('')


    const handlesubmit = () =>{
        console.log(handlesubmit)
        console.log(name);
        console.log(surname);

        const obj={name,surname}
        console.log(obj);

        setname('')
        setsurname('')
        setdata([...data, obj])
    }
  return (
    <div>
        NAME: <input type='text' name='' id='' value={name} onChange={(e)=>setname(e.target.value)} />
        <br/><br/>
        SURNAME: <input type='text' name='' id='' value={surname} onChange={(e)=>setsurname(e.target.value)}/>
        <br/><br/>
        <button onClick={handlesubmit}>SUBMIT</button>
        
         <br/><br/>

         <table border={1}>
            <thead>
                <tr>
                    <td>NAME</td>
                    <td>SURNAME</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((i,index) =>(
                        <tr key={index}>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                        </tr>
                    ))
                }
            </tbody>

         </table>
      
    </div>
  )
}

export default Home
