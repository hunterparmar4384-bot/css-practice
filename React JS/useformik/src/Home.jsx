import { useFormik } from 'formik'
import React, { useState } from 'react'
 import * as Yup from 'yup';

function Home() {
    
    const[ini, setIni] = useState({
        name:'',
        age:''
    })
    const [list, setList] = useState([])
    const[editid, seteditId] = useState(null)


    const f = useFormik({
        enableReinitialize: true,
        initialValues:ini,

        validationSchema:Yup.object({
            name:Yup.string()
            .required("enter name"),

            age:Yup.number()
            .required("enter age")
        }),

        onSubmit:(values, {resetForm})=>{
            console.log(values);

            if(editid!=null)
            {
                let copydata = [...list]
                copydata[editid] = values
                setList(copydata)
                seteditId(null)

                setIni({
                    name:'',
                    age:''
                })
            }
            else
            {
                setList([...list,values])
            }
            resetForm()
        }
    })
    const editdata = (i,index) =>{
        setIni(i)
        seteditId(index)
    }
    const deletdata = (index)=>{
        let data = [...list]
        data.splice(index,1)
        setList(data)
    }
    

  return (
    <>
    <div>
      <form action="" onSubmit={f.handleSubmit}>  
        NAME=<input type='text' name='name'  value={f.values.name} onChange={f.handleChange}/>
        {
            f.touched.name && f.errors.name?<p>{f.errors.name}</p>:null
        }
        <br /><br />
        AGE=<input type='number' name='age' value={f.values.age} onChange={f.handleChange}/>
        {
            f.touched.age && f.errors.age?<p>{f.errors.age}</p>:null
        }
        <br /><br />
        <button type='submit'>SUBMIT</button>
        <br /><br />        
      </form>
      
      <table border={2}>
        <thead>
            <tr>
                <td>NAME</td>
                <td>AGE</td>
                <td>UPDATE</td>
                <td>DELETE</td>
            </tr>
        </thead>
        <tbody>
            {
                list.map((i,index)=>(
                    <tr key={index}>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>
                            <button onClick={()=>editdata(i,index)}>UPDATE</button>
                        </td>
                        <td>
                            <button onClick={()=>deletdata(index)}> DELETE</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>      
    </div>
    </>
  )
}
export default Home