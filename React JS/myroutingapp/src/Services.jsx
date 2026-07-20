import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { GoArrowRight } from "react-icons/go";


function Services() {
  return (
    <div className='about'>
       <Container>
          <Col className="text-center about-sub">        
                <div className="about-title">Services</div>
                <div style={{fontSize:'16px',color:'#E5E6EA'}} className='line'> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</div>        
           </Col>  
       </Container>

       <Container className='Services'>
        <Row className="justify-content-center">

         <Col lg={4} md={6} xs={12} className="mb-4 d-flex justify-content-center"> 
          <Card className='me-3 ' style={{ width: '350px', background:'#0e1022',borderBottom:'1px solid' }} md={4} >            
           <Card.Body className="d-flex">
               <div className="me-3 line"><h6>01</h6></div>
               <div>
                  <Card.Title className='family' style={{fontSize:'24px', color:'#EEEFF7'}}>Brand Identity Design</Card.Title>                   
                      <Card.Text className='line'>
                       Donec vel sapien augue integer urna vel turpis cursus porta aliquam ligula eget ultricies sed magna.
                      </Card.Text>
                      <Button  style={{background:'none',color:' #7BB100',fontWeight:'500',borderRadius:'25px',border:'1px solid #263503',fontSize:'12px'}}>Most Popular</Button>                     
                     <span className='hfour ms-1'>Discover more <GoArrowRight className="logo" /></span>
               </div>   
           </Card.Body>             
        </Card> 
      </Col>  

       <Col lg={4} md={6} xs={12} className="mb-4 d-flex justify-content-center"> 
         <Card className='me-3 ' style={{ width: '350px', background:'#0e1022',borderBottom:'1px solid' }} md={4} >            
           <Card.Body className="d-flex">
               <div className="me-3 line"><h6>02</h6></div>
               <div>
                      <Card.Title className='family' style={{fontSize:'24px', color:'#EEEFF7'}}>
                         UI/UX Design
                       </Card.Title>                   
                      <Card.Text className='line'>
                       Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum tellus pellentesque eu feugiat.
                      </Card.Text>                      
                     <span className='hfour ms-1'>Discover more <GoArrowRight className="logo" /></span>
               </div>   
           </Card.Body>             
        </Card> 
      </Col>
       
      <Col lg={4} md={6} xs={12} className="mb-4 d-flex justify-content-center"> 
        <Card className='me-3 ' style={{ width: '350px', background:'#0e1022',borderBottom:'1px solid' }} md={4} >            
           <Card.Body className="d-flex">
               <div className="me-3 line"><h6>03</h6></div>
               <div>
                    <Card.Title className='family' style={{fontSize:'24px', color:'#EEEFF7'}}> 
                      Web Development
                    </Card.Title>                   
                      <Card.Text className='line'>                       
                         Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae sed viverra.                         
                      </Card.Text>                      
                     <span className='hfour ms-1'>Discover more <GoArrowRight className="logo" /></span>
               </div>   
           </Card.Body>             
        </Card> 
      </Col>   

      <Col lg={4} md={6} xs={12} className="mb-4 d-flex justify-content-center"> 
         <Card className='me-3 ' style={{ width: '350px', background:'#0e1022',borderBottom:'1px solid' }} md={4} >            
           <Card.Body className="d-flex">
               <div className="me-3 line"><h6>04</h6></div>
               <div>
                    <Card.Title className='family' style={{fontSize:'24px', color:'#EEEFF7'}}> 
                      Mobile App Design
                    </Card.Title>                   
                      <Card.Text className='line'>                       
                        Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu.                        
                      </Card.Text>                      
                     <span className='hfour ms-1'>Discover more <GoArrowRight className="logo" /></span>
               </div>  
           </Card.Body>             
        </Card> 
      </Col>  

        <Col lg={4} md={6} xs={12} className="mb-4 d-flex justify-content-center"> 
          <Card className='me-3 ' style={{ width: '350px', background:'#0e1022',borderBottom:'1px solid' }} md={4} >            
           <Card.Body className="d-flex">
               <div className="me-3 line"><h6>05</h6></div>
               <div>
                    <Card.Title className='family' style={{fontSize:'24px', color:'#EEEFF7'}}> 
                     Digital Marketing
                    </Card.Title>                   
                      <Card.Text className='line'>                       
                          Sed porttitor lectus nibh donec sollicitudin molestie malesuada proin eget tortor risus nunc.                        
                      </Card.Text>                      
                     <span className='hfour ms-1'>Discover more <GoArrowRight className="logo" /></span>
               </div>  
           </Card.Body>             
          </Card> 
        </Col>

        <Col lg={4} md={6} xs={12} className="mb-4 d-flex justify-content-center"> 
          <Card className='me-3 ' style={{ width: '350px', background:'#0e1022',borderBottom:'1px solid' }} md={4} >            
           <Card.Body className="d-flex " style={{backgroundColor:'none'}}>
               <div className="me-3 line"><h6>06</h6></div>
               <div>
                    <Card.Title className='family' style={{fontSize:'24px', color:'#EEEFF7'}}> 
                      SEO Optimization
                    </Card.Title>                   
                      <Card.Text className='line'>                       
                         Curabitur arcu erat accumsan id imperdiet et porttitor at sem pellentesque habitant morbi tristique.                       
                      </Card.Text>                      
                     <span className='hfour ms-1'>Discover more <GoArrowRight className="logo" /></span>
               </div>  
           </Card.Body>             
         </Card>
       
       
       </Col> 

       </Row>
     </Container>

     <Container style={{marginTop:'50px'}}>
        <Row>
           <Col style={{borderTop:'1px solid',paddingTop:'50px'}} lg={6} md={12}>
           <h3 className='family' style={{color:'#EEEFF7'}}>Ready to elevate your digital presence?</h3>
           <p  className='line'>Let's collaborate on your next project and craft something remarkable together.</p>
           </Col>
           <Col style={{paddingTop:'50px'}} lg={6} md={12} className="pt-3 text-lg-end text-start">
            <Button className='rounded-pill  b me-4' size="lg" style={{fontWeight:'500'}}>Start a Project</Button>
           </Col>
      </Row>
     </Container>      
    </div>
  )
}

export default Services
