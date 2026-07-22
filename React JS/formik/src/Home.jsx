import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'


function Home() {
    const [ini, setIni] = useState({
        name:'',
        surname:''
    })

    const[list, setList] = useState([])

    const handlesubmit =((values,{resetForm}) =>{
        // console.log(values)
        setList([...list,values])
        resetForm()
    })

  return (
    <div>
        <Formik
        initialValues={ini}
        onSubmit={handlesubmit}        
        >

            
            <Form>
                NAME:<Field name="name"></Field>
                <br /><br />
                SURNAME:<Field name="surname"></Field>
                <br /><br />
                <button type='submit'>SUBMIT</button>
                 <br /><br />
            </Form>
        </Formik>

        <table border={1}>
            <thead>
                <tr>
                    <td>NAME</td>
                    <td>SURNAME</td>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i,index) =>(
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
