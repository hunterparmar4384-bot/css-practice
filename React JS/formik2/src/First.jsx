import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

function First() {
    const [ini, setIni] = useState({
        name:'',
        surname:''
    })

    const [list, setList] = useState([])
    const [editid, setediId] = useState(null)

    const handdlesubmit = (values, {resetForm}) =>{
        console.log(values)

        if(editid != null)
        {
            let copyData = [...list]
            copyData [editid] = values
            setList(copyData)
            setediId(null)

            setIni({
                name:'',
                surname:''
            })
        }
        else
        {
            setList([...list,values])
        }
        resetForm()        
    }
    const deleteData =(index) =>{
        let copyData = [...list]
        copyData.splice(index,1)
        setList(copyData)        
    }
    const updateData = (i,index) =>{
        setIni(i)
        setediId(index)
        
    }
    const  validationSchema= Yup.object ({
        name:Yup.string()
        .required("enter name"),

        surname:Yup.string()
        .required("enter surname"),
    });
  return (
    <div>

        <Formik
        enableReinitialize
        initialValues={ini}
        onSubmit={handdlesubmit}
        validationSchema={validationSchema}        
        >
             {({ errors, touched }) => (
            <Form>
                NAME: <Field name='name'></Field>
                 {touched.name && errors.name ? (
                   <p>{errors.name}</p>
                  ) : null}
                <br /><br />
                SURNAME: <Field name='surname'></Field>
                {touched.surname && errors.surname ? (
                <p>{errors.surname}</p>
                  ) : null}
                <br /><br />
                <button type='submit'>SUBMIT</button>
                  <br /><br />
            </Form>
              )}
        </Formik>

        <table border={2}>
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
                    list.map((i,index)=>(
                        <tr key={index}>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                            <td>
                                <button onClick={()=>deleteData(index)}> DELETE</button>
                            </td>
                            <td>
                                <button onClick={()=>updateData(i,index)}>UPDATE</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>     
    </div>
  )
}
export default First