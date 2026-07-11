import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebook,FaLinkedinIn } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    <>  
    <Container className='footer'>       
     
       <Row>
        <Col className='sm = {6} xs={3}'>© Copyright Workfolio All Rights Reserved  <br />Designed by<span className='coler'> BootstrapMade</span></Col>
        <Col className='d-flex gap-2 justify-content-end  sm = {6} xs={3}'  >
       <button className='font d-flex justify-content-center  align-items-center '><FaXTwitter /></button>
       <button className='font d-flex justify-content-center  align-items-center'><FaFacebook /></button>
       <button className='font d-flex justify-content-center  align-items-center'><FaInstagram /></button>
       <button className='font d-flex justify-content-center  align-items-center'><FaLinkedinIn /></button>     

        </Col>
      </Row>
     
      
    </Container>    
    </>
     
  )
}

export default Footer
