import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { GoArrowRight } from "react-icons/go";

function Portfolio() {
  return (
    <div className='about'>
         <Container>
          <Col className="text-center about-sub">        
                <div className="about-title">Portfolio</div>
                <div style={{fontSize:'16px',color:'#E5E6EA'}} className='line'> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</div>        
           </Col>  
        </Container>

       <Container>
          <Row>
            <Col className='line' lg={6} xs={12}>Curated selection of recent projects spanning digital products, visual identity, and interactive experiences.</Col>
            <Col className='d-flex gap-2' lg={6} xs={12}>
            <Button   className="filter-btn" variant="dark" style={{borderRadius:'25px', padding:'10px 20px' }} >All</Button>
            <Button  className="filter-btn" variant="dark" style={{borderRadius:'25px', padding:'10px 20px' }}>Web Design</Button>
            <Button   className="filter-btn" variant="dark" style={{borderRadius:'25px', padding:'10px 20px' }}>Mobile Apps</Button>
            <Button  className="filter-btn"  variant="dark" style={{borderRadius:'25px', padding:'10px 20px' }}>Branding</Button>
            <Button   className="filter-btn" variant="dark" style={{borderRadius:'25px', padding:'10px 20px' }}>UI/UX</Button>            
            </Col>
          </Row>
       </Container>

       <Container className='mt-5'>

        <Col lg={6} xs={12}>
          <Card style={{width:'546px'}}  className="my-card ">
              <Card.Img  className="card-img" variant="top"
               src="https://bootstrapmade.com/content/demo/Rival/assets/img/portfolio/portfolio-3.webp"
                />
              <Card.Body style={{backgroundColor:'#0e1022'}}>
                
                   <Card.Title style={{fontSize:'24px', color:'#EEEFF7'}} className='family mt-4'>Digital Innovation Platform</Card.Title>
                   <Card.Text className='line'>
                    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi cras ultricies ligula.
                  </Card.Text>
                 <span className='spn'>React</span>
                 <span className='spn'>Node.js</span>
                 <span className='spn'>AWS</span>
                 <br />
                 <br />
                 <span className='hfour'>View project <GoArrowRight className="logo" /></span>
              </Card.Body>
           </Card>        
        </Col>

       </Container>
      
    </div>
  )
}

export default Portfolio
