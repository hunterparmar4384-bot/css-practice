import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebook,FaLinkedinIn } from "react-icons/fa";
import { Link } from '@mui/material';



function Footer() {
  return (
    <>  
     <Container fluid className='bg'> 
      <Container className='footer'>       
       <Row>
        <Col className='sm = {6} xs={3}'>© Copyright Workfolio All Rights Reserved  <br />Designed by<span className='coler'> BootstrapMade</span></Col>
        <Col className='d-flex gap-2 justify-content-end  sm = {6} xs={3}'  >
       <button className='font d-flex justify-content-center  align-items-center ' ><a href='https://x.com/' target='blank' style={{color: "#7BB100"}}> <FaXTwitter /></a> </button>

       <button className='font d-flex justify-content-center  align-items-center'><a href='https://www.facebook.com/' target='blank' style={{color: "#7BB100"}}>  <FaFacebook /></a></button>

       <button className='font d-flex justify-content-center  align-items-center '><a href='http://instagram.com/?hl=en' target='blank' style={{color: "#7BB100"}}> <FaInstagram /></a> </button>

        <button className='font d-flex justify-content-center  align-items-center '><a href='https://in.linkedin.com/' target='blank' style={{color: "#7BB100"}}>  <FaLinkedinIn /></a> </button>
           
           
        </Col>
      </Row>      
    </Container>
    </Container>

    
    
    </>
     
  )
}

export default Footer
