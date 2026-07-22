import React, { useState } from 'react'

function Home() {

    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [data, setdata] = useState([])
    const[editid, seteditid] = useState(null)


    const obj = {name, surname}
    // console.log(obj);


    const handlesubmit = () =>{
        console.log(name)
        console.log(surname)

        const obj ={name,surname}
        console.log(obj)

        if(editid != null)
        {
            let copydata = [...data]
            copydata [editid] = obj
            setdata (copydata)
            seteditid(null)
        }
        else
        {
            setdata([...data, obj])            
        }

        setname ('')
        setsurname('')
    }
   const  handledelete = (index) =>{
    let copydata = [...data]
    copydata.splice(index,1)
    setdata(copydata)
   }

   const handleupdate =(i,index) =>{
    setname(i.name)
    setsurname(i.surname)
    seteditid(index)

   }



  return (
    <>
   NAME: <input type='text' name='' id='' value={name} onChange={(e) =>setname(e.target.value)} />
   <br/><br/>
   SURNAME: <input type='text' name='' id='' value={surname} onChange={(e) =>setsurname(e.target.value)} />
   <br/><br/>
   <button onClick={handlesubmit}>SUBMIT</button>
   <br/><br/>

   <table border={1}>
    <thead>
        <tr>
            <td>NAME</td>
            <td>SURNAME</td>
            <td>DELETE</td>
            <td>UPDATE</td>
        </tr>
    </thead>
    <tbody>
        {
        data.map((i,index) =>(
            <tr key={index}>
                <td>{i.name}</td>
                <td>{i.surname}</td>
                <td>
                    <button onClick={()=>handledelete(index)}>DELETE</button>
                </td>
                <td>
                    <button onClick={()=>handleupdate(i,index)}>UPDATAE</button>
                </td>
            </tr>
        ))
    }
    </tbody>

   </table>    
    </>
  )
}

export default Home