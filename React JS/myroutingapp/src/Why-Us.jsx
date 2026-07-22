import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { GoArrowRight, GoGraph } from "react-icons/go";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsFillPaletteFill } from "react-icons/bs";
import { FaAward, FaPlus } from "react-icons/fa6"
import Image from 'react-bootstrap/Image';
import { TbHexagonNumber1Filled, TbHexagonNumber2Filled,  TbHexagonNumber3Filled} from "react-icons/tb";



function Team() {
  return (
    <div className='about'>
       <Container>
          <Col className="text-center about-sub">        
                <div className="about-title">Why Us</div>
                <div style={{fontSize:'16px',color:'#E5E6EA'}} className='line'> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</div>        
           </Col>  
        </Container>

        <Container>
            <Row>
               <Col xl={6} sx={12}>
                  <Stack gap={3}>
                       <div className="p-2 htwo" style={{fontSize:"44px"}}>What Sets Us Apart From <br/> the
                         Rest</div>                  
                  </Stack>
              </Col>           
            </Row>
            <Row>
               <Col lg={6} sx={12}>
                  <div className="p-2 hthird " style={{fontSize:"17px"}}>Duis aute irure dolor in      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint   occaecat cupidatat. </div>
               </Col>    
                <Col lg={6} sx={12} className='d-flex justify-content-start mb-5 justify-content-lg-end   align-items-center'>
                    <div>
                     <Button className='rounded-pill  b me-4' size="lg">Launch Your Project</Button>
                     <span className='hfour'>Explore Our Work <GoArrowRight className="logo" /></span>
                    </div>                    
                        
              
              </Col>
            </Row>
        </Container>

   <Container>
      <Row>
         <Col  md={4} className="mb-3 d-flex">
            <Card className='me-3 why' style={{ background:'#0e1022',
                 borderBottom:'1px solid',border:'1px solid' }} md={4} >            
               <Card.Body className="d-flex">
                   <div className="me-4 mt-2 line"><h6><BsFillPaletteFill style={{fontSize:'32px',color:'#7BB100'}}/></h6></div>
                   <div>
                    <Card.Title className='family' style={{fontSize:'40px', color:'#EEEFF7'}}>
                        95<AiOutlinePercentage  style={{fontSize:'20px', color:'#7BB100' }}/>
                    </Card.Title>                   
                    <Card.Text style={{fontSize:'16px',color:'#E5E6EA'}}>
                       Creative Excellence
                    </Card.Text>                                       
                     <span className='line ms-1' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</span>
                   </div>   
              </Card.Body>             
           </Card> 
       </Col>

       <Col  md={4} className="mb-3 d-flex">
        <Card className='me-3 why' style={{ background:'#0e1022',
                 borderBottom:'1px solid',border:'1px solid' }} md={4} >            
               <Card.Body className="d-flex">
                   <div className="me-4 mt-2 line"><h6><GoGraph style={{fontSize:'32px',color:'#7BB100'}}/></h6></div>
                   <div>
                    <Card.Title className='family' style={{fontSize:'40px', color:'#EEEFF7'}}>
                        200<AiOutlinePercentage  style={{fontSize:'20px', color:'#7BB100' }}/>
                    </Card.Title>                   
                    <Card.Text style={{fontSize:'16px',color:'#E5E6EA'}}>
                      Proven Results
                    </Card.Text>                                       
                     <span className='line ms-1' style={{textAlign:'justify'}}>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</span>
                   </div>   
              </Card.Body>             
           </Card> 
       </Col>

       <Col  md={4} className="mb-3 d-flex ">
         <Card className='me-3 why' style={{  background:'#0e1022',
                 borderBottom:'1px solid',border:'1px solid' }} md={4} >            
               <Card.Body className="d-flex">
                   <div className="me-4 mt-2 line"><h6><FaAward style={{fontSize:'32px',color:'#7BB100'}}/></h6></div>
                   <div>
                    <Card.Title className='family' style={{fontSize:'40px', color:'#EEEFF7'}}>
                        50<FaPlus   style={{fontSize:'20px', color:'#7BB100' }}/>
                    </Card.Title>                   
                    <Card.Text style={{fontSize:'16px',color:'#E5E6EA'}}>
                      Industry Accolades
                    </Card.Text>                                       
                     <span className='line ms-1' style={{textAlign:'justify'}}>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollitanim.</span>
                   </div>   
              </Card.Body>             
           </Card>        
       </Col>
      </Row>
   </Container>

   <Container className='mt-4'>
    <Row>
      
         <Col lg={6} xs={12} className="img-box text-center" >
              <div className='img'>
                <img src='https://bootstrapmade.com/content/demo/Rival/assets/img/illustration/illustration-27.webp'
                className="img-fluid "
              
                />
              </div>
            </Col>
        <Col>
           <div className="p-2 htwo" style={{fontSize:"44px"}}>
               The Pillars Behind Our Approach
           </div>
           <div className="d-flex gap-4 box2" style={{borderBottom: "1px dotted #666"}} >
                   <div className='icon2 mt-4'>
                        <TbHexagonNumber1Filled  size={20} /> 
                   </div>
                   <div className='mt-4'>
                       <h5 style={{color:"#EEEFF7"}}>Strategic Vision</h5>
                       <p className='hthird'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                  </div>       
            </div>
                      
          
           <div className="d-flex gap-4 box2 mt-4"  style={{ borderBottom: "1px dotted #666"}} >
                  <div className='icon2'>
                      <TbHexagonNumber2Filled size={20} />
                 </div>
                 <div>
                    <h5 style={{color:"#EEEFF7"}}>Insight-Led Methodology</h5>
                    <p className='hthird '>
                      Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                      
                    </p>
                </div>       
          </div>
          
          <div className="d-flex gap-4 box2 mt-4" >
                  <div className='icon2'>
                     <TbHexagonNumber3Filled  size={20} />
                  </div>
                  <div>
                     <h5 style={{color:"#EEEFF7"}}>Round-the-Clock Assistance</h5>
                     <p className='hthird'>
                        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </p>
                  </div>       
         </div>
        </Col>
      </Row>
   </Container>      
    </div>
  )
}

export default Team
