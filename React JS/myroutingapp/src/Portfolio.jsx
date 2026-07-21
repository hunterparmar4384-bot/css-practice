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

       <Container className='mt-5' >
        <Row>

        <Col xl={6} lg={6} md={12} className="mb-4">
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

        <Col xl={6} lg={6} md={12} className="mb-4">
          <Card style={{width:'546px'}}  className="my-card ">
              <Card.Img  className="card-img" variant="top"
               src="https://bootstrapmade.com/content/demo/Rival/assets/img/portfolio/portfolio-5.webp"
                />
              <Card.Body style={{backgroundColor:'#0e1022'}}>
                
                   <Card.Title style={{fontSize:'24px', color:'#EEEFF7'}} className='family mt-4'>Intelligent Task Manager</Card.Title>
                   <Card.Text className='line'>
                     Nulla porttitor accumsan tincidunt donec rutrum congue leo eget malesuada vivamus suscipit.
                  </Card.Text>
                 <span className='spn'>Flutter</span>
                 <span className='spn'>Firebase</span>
                 <span className='spn'>AI</span>
                 <br />
                 <br />
                 <span className='hfour'>View project <GoArrowRight className="logo" /></span>
              </Card.Body>
           </Card>        
        </Col>

         <Col xl={6} lg={6} md={12} className="mb-4">
          <Card style={{width:'546px'}}  className="my-card ">
              <Card.Img  className="card-img" variant="top"
               src="https://bootstrapmade.com/content/demo/Rival/assets/img/portfolio/portfolio-1.webp"
                />
              <Card.Body style={{backgroundColor:'#0e1022'}}>
                
                   <Card.Title style={{fontSize:'24px', color:'#EEEFF7'}} className='family mt-4'>Contemporary Visual Identity</Card.Title>
                   <Card.Text className='line'>
                      Quisque velit nisi pretium ut lacinia in elementum id enim sed porttitor lectus nibh.
                  </Card.Text>
                 <span className='spn'>Illustrator</span>
                 <span className='spn'>Figma</span>
                 <span className='spn'>Brand</span>
                 <br />
                 <br />
                 <span className='hfour'>View project <GoArrowRight className="logo" /></span>
              </Card.Body>
           </Card>        
        </Col>

        <Col xl={6} lg={6} md={12} className="mb-4">
          <Card style={{width:'546px'}}  className="my-card ">
              <Card.Img  className="card-img" variant="top"
               src="https://bootstrapmade.com/content/demo/Rival/assets/img/portfolio/portfolio-6.webp"
                />
              <Card.Body style={{backgroundColor:'#0e1022'}}>
                
                   <Card.Title style={{fontSize:'24px', color:'#EEEFF7'}} className='family mt-4'>Analytics Dashboard Interface</Card.Title>
                   <Card.Text className='line'>
                      Vivamus magna justo lacinia eget consectetur sed convallis at tellus curabitur non nulla.
                  </Card.Text>
                 <span className='spn'>Figma</span>
                 <span className='spn'>Prototyping</span>
                 <span className='spn'>UX</span>
                 <br />
                 <br />
                 <span className='hfour'>View project <GoArrowRight className="logo" /></span>
              </Card.Body>
           </Card>        
        </Col>

        <Col xl={6} lg={6} md={12} className="mb-4">
          <Card style={{width:'546px'}}  className="my-card ">
              <Card.Img  className="card-img" variant="top"
               src="https://bootstrapmade.com/content/demo/Rival/assets/img/portfolio/portfolio-2.webp"
                />
              <Card.Body style={{backgroundColor:'#0e1022'}}>
                
                   <Card.Title style={{fontSize:'24px', color:'#EEEFF7'}} className='family mt-4'>Online Retail Experience</Card.Title>
                   <Card.Text className='line'>
                       Donec sollicitudin molestie malesuada sed porttitor lectus nibh nulla quis lorem ut libero.
                  </Card.Text>
                 <span className='spn'>Shopify</span>
                 <span className='spn'>React</span>
                 <span className='spn'>API</span>
                 <br />
                 <br />
                 <span className='hfour'>View project <GoArrowRight className="logo" /></span>
              </Card.Body>
           </Card>        
        </Col>

         <Col xl={6} lg={6} md={12} className="mb-4">
          <Card style={{width:'546px'}}  className="my-card ">
              <Card.Img  className="card-img" variant="top"
               src="https://bootstrapmade.com/content/demo/Rival/assets/img/portfolio/portfolio-4.webp"
                />
              <Card.Body style={{backgroundColor:'#0e1022'}}>
                
                   <Card.Title style={{fontSize:'24px', color:'#EEEFF7'}} className='family mt-4'>Banking App Reimagined</Card.Title>
                   <Card.Text className='line'>
                      Curabitur aliquet quam id dui posuere blandit nulla quis lorem ut libero malesuada feugiat.
                  </Card.Text>
                 <span className='spn'>Shopify</span>
                 <span className='spn'>React</span>
                 <span className='spn'>API</span>
                 <br />
                 <br />
                 <span className='hfour'>View project <GoArrowRight className="logo" /></span>
              </Card.Body>
           </Card>        
        </Col>
      </Row>        
   </Container>



   <Container style={{marginTop:'50px'}}>
        <Row>
           <Col style={{borderTop:'1px solid',paddingTop:'50px'}} lg={6} md={12}>
           <h3 className='family' style={{color:'#EEEFF7'}}>Have a project in mind?</h3>
           <p  className='line'>Let's collaborate and craft something remarkable together.</p>
           </Col>
           <Col style={{paddingTop:'50px'}} lg={6} md={12} className="text-lg-end text-start " >            
                <Button className='rounded-pill  b me-4' size="lg">Begin a conversation</Button>
                  <span className='hfour'>Explore All work <GoArrowRight className="logo" /></span>
                 
           </Col>
      </Row>
     </Container>      
      
    </div>
  )
}

export default Portfolio
