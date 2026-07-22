import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';

function App() {

    const[list, setList] = useState([])
    const [editid, setEditId] = useState(null)

    const key ="ylxGFG6VAQJgT5hm"


  const [ini, setIni] = useState({
    Id:'',
    Name:'',
   From:'',
   Gender:''
  })
  
useEffect(()=>{
  DataView()
},[])

function valueSet(){
  setIni({
    Id:'',
    Name:'',
   From:'',
   Gender:''
    
  })
}

const handlesubmit = (values,{resetForm}) =>{
  console.log(values);

  const{_id, ...rest} = values

  if(editid != null)
  {
    axios.patch(`https://generateapi.techsnack.online/api/mydata/${editid}`,rest,{
      headers:{
        Authorization: key
      }
    })
    .then(()=>{
      console.log("Data update success")
      DataView()
      valueSet()
        resetForm();
      setEditId(null)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  else
  {
    axios.post('https://generateapi.techsnack.online/api/mydata',values,{
      headers:{
        Authorization: key
      }
    })
    .then(() => {
  console.log("data create success");
  DataView();
  resetForm();
  valueSet();
})
.catch((error) => {
  console.log(error);
});
  }
}

const DataView =() =>{
  axios.get('https://generateapi.techsnack.online/api/mydata',{
    headers:{
      Authorization: key
    }
  })
  .then((res)=>{
    console.log(res.data)
    setList(res.data.Data)
  })
  .catch((error)=>{
    console.log(error)
  })
}

const deleteData = (id) =>{
  axios.delete(`https://generateapi.techsnack.online/api/mydata/${id}`,{
    headers:{
      Authorization: key
    }
  })
  .then(()=>{
    console.log("data deleted successfully")
    DataView()
  })
  .catch((error)=>{
    console.log(error)
  })
}
 const updatedate = (i) =>{
  console.log("==========",i);
  
  setIni(i)
  setEditId(i._id)

 }
  return (
    <div className="App">
      <Formik
      enableReinitialize
      initialValues={ini}
      onSubmit={handlesubmit}

      >
        <Form>
         ID: <Field name='Id' type="number" ></Field><br /><br />
          NAME:<Field name='Name'></Field><br /><br />
         FROM: <Field name='From'></Field><br /><br />
          GENDER:<Field name='Gender'></Field><br /><br />
            <button type='submit'>SUBMIT</button>
        </Form>
      </Formik>

      <table border={1}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>FROM</td>
            <td>GENDER</td>
            <td>DELETE</td>
            <td>UPdate</td>
          </tr>
        </thead>
        <tbody>
          {
            list.map((i,index)=>(
              <tr key={i._id}>
                <td>{i.Id}</td>
                <td>{i.Name}</td>
                <td>{i.From}</td>
                <td>{i.Gender}</td>
                <td>
                  <button onClick={()=>deleteData(i._id)}>DELETE</button>
                </td>
                <td>
                  <button onClick={()=>updatedate(i)}>UPDATE</button>
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>
      
      
    </div>
  );
}

export default App;
