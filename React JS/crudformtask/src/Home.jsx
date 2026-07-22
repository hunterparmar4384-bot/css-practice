import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
    const [ini, setIni] = useState({
        img:'',
        name:'',
        decription:'',
        price:'',
        orignalprice:''
    })
    const [list, setList] = useState([])
    const [ediId, seteditId] = useState(null)

    const handlesubmit = (values, {resetForm}) =>{
        console.log(values);

        if(ediId != null)
        {
            let copydata = [...list]
            copydata [ediId] = values
            setList(copydata)
            seteditId(null)

            setIni ({
                 img:'',
                 name:'',
                 decription:'',
                 price:'',
                 orignalprice:''
            })
        }
        else
        {
            setList([...list,values])
        }
        resetForm()
    }
    const deletedata = (index) =>{
        let copydata = [...list]
        copydata.splice(index)
        setList(copydata)        
    } 
    const dataset = (i,index) =>{
        setIni(i)
        seteditId(index)
    }
    const validationSchema = Yup.object({
        img:Yup.string()
        .required("enter url"),

         name:Yup.string()
        .required("enter name"),

         decription:Yup.string()
        .required("enter decription"),

          price:Yup.string()
        .required("enter price"),

         orignalprice :Yup.string()
        .required("enter orignalprice"),


     })
    
  return (
    <div>
        <Formik
        enableReinitialize
        initialValues={ini}
        onSubmit={handlesubmit}
        validationSchema={validationSchema}
        
        >
            {({errors,touched}) =>(
            <Form>
               IMG: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Field name="img" type="url" placeholder="Enter Image URL"></Field>
               {touched.img && errors.img?(<p style={{color:"red"}}>{errors.img}</p>):null}
               <br /><br />

               NAME: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Field name="name" placeholder="Enter name"></Field>
               {touched.name && errors.name?(<p style={{color:"red"}}>{errors.name}</p>):null}               
               <br /><br />

                DECRIPTION: &nbsp;&nbsp;&nbsp;&nbsp;
               <Field name="decription" placeholder="Enter decription" rows="5" cols="40"></Field>                 
               {touched.decription && errors.decription?(<p style={{color:"red"}}>{errors.decription}</p>):null}
               <br /><br />

               PRICE: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Field name="price" placeholder="Enter price"></Field>
               {touched.price && errors.price?(<p style={{color:"red"}}>{errors.price}</p>):null}
               <br /><br />

               ORIGNALPRICE: <Field name="orignalprice" placeholder="Enterorignalprice"></Field>
               {touched.orignalprice && errors.orignalprice?(<p style={{color:"red"}}>{errors.orignalprice}</p>):null}
               <br /><br />
               <button type='submit'>SUBMIT</button>            
               <br /><br /><br /><br />
            </Form>
            )}
        </Formik>

 <Container>
    <Row>
        {
            list.map((i,index) =>(
                <Col md={4} key={index} className="mb-3">
          <Card style={{ width: '18rem' }} md={4}>
              <Card.Img  className ="border" variant="top" src={i.img} />
                 <Card.Body>
                     <Card.Title className='border'>{i.name}</Card.Title>
                       <Card.Text className='border'>{i.decription}                         
                        </Card.Text>
                        <Row>
                          <Col className='border'><div>price</div>
                          {i. price}
                          </Col>
                          <Col className='border'><div>orignal price</div>
                           <spane  className="text-decoration-line-through">{i. orignalprice}</spane>
                           </Col>
                        </Row>

                        <Button variant="secondary" size="sm mt-4 me-4" onClick={()=>{deletedata(index)}}>DELETE</Button>
                        <Button variant="secondary" size="sm mt-4" onClick={()=>dataset(i,index)}>UPDATE </Button>
                </Card.Body>
         </Card>

                </Col>
            ))
        }     
         
      </Row>
 </Container>
      
    </div>
  )
}

export default Home


{/* <Card style={{ width: '18rem' }} md={4}>
              <Card.Img  className ="border" variant="top" src="holder.js/100px180" />
                 <Card.Body>
                     <Card.Title className='border'>Card Title</Card.Title>
                       <Card.Text className='border'>
                          Some quick example text to build on the card title and make up the
                             bulk of the card's content.
                        </Card.Text>
                        <Row>
                          <Col className='border'>1 of 2</Col>
                          <Col className='border'>2 of 2</Col>
                        </Row>

                        <Button variant="secondary" size="sm mt-4 me-4">DELETE</Button>
                        <Button variant="secondary" size="sm mt-4">UPDATE </Button>
                </Card.Body>
         </Card> */}