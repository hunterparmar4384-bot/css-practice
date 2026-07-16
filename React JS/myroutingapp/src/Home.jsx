import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { GoArrowRight } from "react-icons/go";



function Home() {
  return (
    <>
  <div className='header'>      
     <Container className='home'>
         <Row>
            <Col>
             <Stack gap={3}>
                <div className="hone">Digital Studio</div>
                <div className="htwo">Elevate Your Brand Through Powerful Digital Craft</div>
                <div className="hthird">Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetursed,     convallis at tellus. Nulla porttitor accumsan tincidunt.</div>
    
                 <div >
                  <Button className='rounded-pill  b me-4' size="lg">Launch Today</Button>
                  <span className='hfour'>Explore Projects <GoArrowRight className="logo" /></span>
                 </div>
    
              </Stack>
            </Col>
    
            <Col className='img-box'>
              <div className='img'>
                <img src='https://bootstrapmade.com/content/demo/Rival/assets/img/svg/creative-digital-agency.svg'/>
              </div>
            </Col>
        </Row>
    
           <Row  className=" square border-top box mt-5 border-dark " >
           
              <Col  xs={12} md={4} className="text-center">
                 <div style={{ color: "#7BB100", fontWeight: 700, fontSize: "48px" }}>
                   280+
                 </div>
                 <div style={{ fontSize: "14px", fontWeight: 500 }} className='line'>
                   Campaigns Delivered
                 </div>
              </Col>
    
             <Col xs={12}  md={4} className="text-center">
                 <div style={{ color: "#7BB100", fontWeight: 700, fontSize: "48px" }}>
                   98%
                 </div>
                 <div style={{ fontSize: "14px", fontWeight: 500 }} className='line'>
                   Retention Rate
                 </div>
             </Col>
    
              <Col xs={12} md={4} className="text-center">
                  <div style={{ color: "#7BB100", fontWeight: 700, fontSize: "48px" }}>
                    36
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 500 }} className='line'>
                    Creative Expert
                  </div>
              </Col>
          </Row>
     </Container>    
  </div>

   
    </>
  )
}

export default Home
