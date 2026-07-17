import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { FaStar,FaArrowRight } from "react-icons/fa";
import { BsFillLightningChargeFill, BsGraphUpArrow} from "react-icons/bs";
import { IoShieldCheckmarkOutline, IoPlayCircleOutline} from "react-icons/io5";





function About() {
  return (
     <div className='about'>
      <Container style={{backgroundColor:"#0e1022"}}>
         <Col className="text-center about-sub">        
           <div className="about-title">About</div>
           <div style={{fontSize:'16px',color:'#E5E6EA'}} className='line'> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</div>        
        </Col>        
      </Container>

      <Container style={{backgroundColor:"#0e1022"}}>
         <Row>
          <Col>
             <Stack gap={3}>
              <span className="p-2 rounded-pill d-flex justify-content-center align-items-center " style={{ width:"250px", color:"#7bb100", fontWeight:"bold", background:"#212529"}} disabled>
                <FaStar />  Built For Modern Teams</span>               
              <div className="p-2 htwo" style={{fontSize:"44px"}}>Ship Beautiful Products at Lightning Speed</div>
              <div className="p-2 hthird" style={{fontSize:"17px"}}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>

              <div className="d-flex gap-4 box2" style={{borderBottom:"dotted"}} >
                  <div className='icon2'>
                      <BsFillLightningChargeFill  size={20} />
                  </div>
                  <div>
                     <h5 style={{color:"#EEEFF7"}}>Instant Deployment</h5>
                     <p className='hthird'>Temporibus autem quibusdam debitis rerum necessitatibus.</p>
                  </div>       
             </div>
            

               <div className="d-flex gap-4 box2"  style={{borderBottom:"dotted"}} >
                  <div className='icon2'>
                      <IoShieldCheckmarkOutline  size={20} />
                  </div>
                  <div>
                     <h5 style={{color:"#EEEFF7"}}>Enterprise-Grade Security</h5>
                     <p className='hthird '>Itaque earum rerum hic tenetur a sapiente delectus reiciendis.</p>
                  </div>       
             </div>

               <div className="d-flex gap-4 box2" >
                  <div className='icon2'>
                      <BsGraphUpArrow  size={20} />
                  </div>
                  <div>
                     <h5 style={{color:"#EEEFF7"}}>Actionable Analytics</h5>
                     <p className='hthird'>Neque porro quisquam est qui dolorem ipsum quia dolor sit.</p>
                  </div>       
             </div>               
              
              <div className="p-2">
                 <Button className='rounded-pill  b me-4' size="lg">Start Free Trial <FaArrowRight /></Button>
                  <span className='hfour'> <IoPlayCircleOutline  style={{fontSize:"22px", color:"#7bb100"}}/> Explore Projects</span>
              </div>
             </Stack>

          </Col>
           <Col >
              <div className='about-img'>
                <img src='https://bootstrapmade.com/content/demo/Rival/assets/img/about/about-wide-3.webp'
                width="100%"
                />
              </div>
            </Col>
        </Row>
      </Container>
    </div>
   
       
      
   
  )
}

export default About
