import React from 'react'
import { Link } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaAdjust } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
function Header() {
  return (
    <div>
         <Navbar expand="lg" className=" header d-flex justify-content-between">
            <Container className='nb '>
              <Navbar.Brand  className='font1'><span className='icon'><FaAdjust /></span>Rival</Navbar.Brand>


              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="d-flex gap-5 mrg">
                  <Link href='/' underline='none' className='  coler size ' >Home</Link>                  
                  <Link href='/About' underline='none' className='text'>About</Link>
                  <Link href='/Services' underline='none' className='text'>Services</Link> 
                  <Link href='/Portfolio' underline='none' className='text'>Portfolio</Link> 
                  <Link  href='/Team' underline='none' className='text'>Team</Link> 
                  <Link  href='/Contact' underline='none' className='text'>Contact</Link> 
                </Nav>
              </Navbar.Collapse>

               <Col xs="auto">
            <Button  className='rounded-pill background'>Get started</Button>
          </Col>

             
            </Container>
        </Navbar>
          
    </div>
  )
}
export default Header