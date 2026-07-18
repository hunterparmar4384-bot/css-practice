import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { GoArrowRight } from "react-icons/go";
import { FaStar,FaArrowRight } from "react-icons/fa";
import { BsFillLightningChargeFill, BsGraphUpArrow} from "react-icons/bs";
import { IoShieldCheckmarkOutline, IoPlayCircleOutline} from "react-icons/io5";
import Card from 'react-bootstrap/Card';



function Home() {
  return (
    <> 

                                                      {/* Home page    */}
  <div className='header'>      
     <Container className='home'>
         <Row className="align-items-center">
            <Col lg={6} xs={12}>
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
    
            <Col lg={6} xs={12} className="img-box text-center" >
              <div className='img'>
                <img src='https://bootstrapmade.com/content/demo/Rival/assets/img/svg/creative-digital-agency.svg'
                className="img-fluid"
                />
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

                                                          {/* About page */}

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

              <div className="d-flex gap-4 box2" style={{borderBottom: "1px dotted #666"}} >
                  <div className='icon2'>
                       <BsFillLightningChargeFill  size={20} />
                  </div>
                  <div>
                     <h5 style={{color:"#EEEFF7"}}>Instant Deployment</h5>
                     <p className='hthird'>Temporibus autem quibusdam debitis rerum necessitatibus.</p>
                  </div>       
              </div>
            

               <div className="d-flex gap-4 box2"  style={{ borderBottom: "1px dotted #666"}} >
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
            <Col lg={6} xs={12} className="text-center" >
                <div className='about-img'>
                   <img src='https://bootstrapmade.com/content/demo/Rival/assets/img/about/about-wide-3.webp'
                   width="100%"                
                   />
               </div>
            </Col>
      </Row>
   </Container>

      <Container>
        <Row className='about-footer'>
             <Col>
               <div className='family' style={{fontSize:"42px", color:"#c6e975c4", fontWeight:"bold",textAlign:"center"}}>15+</div>
               <div  style={{color:"#ccccd6fa",textAlign:"center"}}>Years Innovating</div>
             </Col>
   
             <Col>
               <div className='family' style={{fontSize:"42px", color:"#c6e975c4", fontWeight:"bold",textAlign:"center"}}>830+</div>
               <div  style={{color:"#ccccd6fa",textAlign:"center"}}>Products Launched</div>
             </Col>
   
             <Col>
               <div className='family' style={{fontSize:"42px", color:"#c6e975c4", fontWeight:"bold",textAlign:"center"}}>99.9%</div>
               <div  style={{color:"#ccccd6fa",textAlign:"center"}}>Uptime Guarantee</div>
             </Col>
   
             <Col>
               <div className='family' style={{fontSize:"42px", color:"#c6e975c4", fontWeight:"bold",textAlign:"center"}}>4.9/5</div>
               <div  style={{color:"#ccccd6fa",textAlign:"center"}}>Customer Rating</div>
             </Col>          
        </Row>
     </Container>
 </div>  


                                                              {/* Services page */}

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
           <Card.Body className="d-flex">
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






</>












  

  
    
  )
}

export default Home
