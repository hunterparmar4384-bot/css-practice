import React, { useState } from 'react'

function Result() {
  

  const [data, setdata] = useState([]);
  const [name, setname] = useState('');
  const [S1, setS1] = useState('');
  const [S2, setS2] = useState('');
  const [S3, setS3] = useState('');
  const [editid, seteditid] = useState(null);
  const [total, settotal] = useState('');
  const [per, setper] = useState('');
  const [min, setmin] = useState('');
  const [max, setmax] = useState('');
  

  const handlesubmit = () =>{
    let total = Number(S1) + Number(S2) + Number(S3);
    let per = (total / 3)
    let min = Math.min(Number(S1),Number(S2),Number(S3))
    let max = Math.max(Number(S1),Number(S2),Number(S3))
    const obj = {name,S1,S2,S3,total,per,min,max}
    console.log(obj)

    if(editid != null)
    {
      let copydata = [...data]
      copydata [editid] = obj
      setdata (copydata)
      seteditid (null)
    }
    else
    {
      setdata([...data,obj])

    }
    setname('')
    setS1 ('')
    setS2('')
    setS3('')   
  }

  const handledelete = (index) =>{
    let copydata = [...data]
    copydata.splice(index,1)
    setdata(copydata)
  }

  const handleupdate = (i,index) =>{
    setname(i.name)
    setS1(i.S1)
    setS2(i.S2)
    setS3(i.S3)
    seteditid(index)
  }

  return (
    <>
    
    NAME:<input type='text' name='' id='' value={name} onChange={(e) =>setname(e.target.value)}/>
    <br/><br/>
    S1: <input type='text' name='' id='' value={S1} onChange={(e)=>setS1(e.target.value)} />
     <br/><br/>
    S2: <input type='text' name='' id='' value={S2} onChange={(e)=>setS2(e.target.value)} />
     <br/><br/>
    S3: <input type='text' name='' id='' value={S3} onChange={(e)=>setS3(e.target.value)} />
    <br/><br/>
    <button onClick={handlesubmit}>SUBMIT</button>
    <br/>
    <br/>

    <table border={1}>
      <thead>
        <tr>
          <td>NAME</td>
          <td>S1</td>
          <td>S2</td>
          <td>S3</td>
          <td>TOTAL</td>
          <td>PER</td>
          <td>MIN</td>
          <td>MAX</td>
          <td>DELETE</td>
          <td>UPDATE</td>
        </tr>
      </thead>
      <tbody>
        {
          data.map((i,index) =>(
            <tr key={index}>
              <td>{i.name}</td>
              <td>{i.S1}</td>
              <td>{i.S2}</td>
              <td>{i.S3}</td>
              <td>{i.total}</td>
              <td>{i.per}</td>
              <td>{i.min}</td>
              <td>{i.max}</td>
              <td>
                <button onClick={()=>handledelete(index)}>DELETE</button>
              </td>
              <td>
                <button onClick={()=>handleupdate(i,index)}>UPDATE</button>
              </td>
  
            </tr>
          ))       
        }            
      </tbody>
    </table>   
    
    </>
 
  )
}
export default Result