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
import { GoGraph } from "react-icons/go";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsFillPaletteFill } from "react-icons/bs";
import { FaAward, FaPlus } from "react-icons/fa6"
import Image from 'react-bootstrap/Image';
import { TbHexagonNumber1Filled, TbHexagonNumber2Filled,  TbHexagonNumber3Filled} from "react-icons/tb";



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


                                                          {/* portfolio page */}

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


                                                                {/* Why-us page */}
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
                className="img-fluid"
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

                                                                {/* Testimonials page */}

  <div className="about">
      <Container>
        <Col className="text-center about-sub">
          <div className="about-title">Testimonials</div>
          <div
            className="line"
            style={{ fontSize: "16px", color: "#E5E6EA" }}
          >
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </div>
        </Col>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col lg={6} md={6} xs={12}>
            <Card className='me-3' style={{background:'#0e1022', border:'1px solid'}}>
              <Card.Img
                variant="top"
                src="https://bootstrapmade.com/content/demo/Rival/assets/img/person/person-f-12.webp"
                 className="testimonial-img mx-auto mt-4 rounded-pill"

              />
              <Card.Body>
                <Card.Title className='family ' style={{fontSize:'40px', color:'#EEEFF7',textAlign:'center'}}>
                  Jennifer Martinez
                </Card.Title>
                <Card.Subtitle  className="mb-3  text-center" style={{color:'#E5E6EA'}}>
                  Product Designer - TechCorp
                </Card.Subtitle>
                <div className="text-center mb-3">
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                </div>
                <Card.Text style={{fontSize:'16px',color:'#E5E6EA'}}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum consectetur
                  adipiscing elit sed do eiusmod tempor.
                </Card.Text>
              </Card.Body>
              <Card.Footer  className="text-center" style={{borderTop:'1px solid'}}>
                <small style={{fontSize:'16px',color:'#E5E6EA'}}>
                  Last updated 3 mins ago
                </small>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg={6} md={6} xs={12}>
            <Card className='me-3' style={{background:'#0e1022', border:'1px solid'}}>
              <Card.Img
                variant="top"
                src="https://bootstrapmade.com/content/demo/Rival/assets/img/person/person-m-11.webp"
                 className="testimonial-img mx-auto mt-4 rounded-pill"

              />
              <Card.Body>
                <Card.Title className='family ' style={{fontSize:'40px', color:'#EEEFF7',textAlign:'center'}}>
                  Alexander Chen
                </Card.Title>
                <Card.Subtitle  className="mb-3  text-center" style={{color:'#E5E6EA'}}>
                  Frontend Engineer - InnovateLab
                </Card.Subtitle>
                <div className="text-center mb-3">
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                </div>
                <Card.Text style={{fontSize:'16px',color:'#E5E6EA'}}>
                   Sed do eiusmod tempor incididunt ut laboure et dolore magna aliqua. Ut enim ad minim veniam, dolore magna alique. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </Card.Text>
              </Card.Body>
              <Card.Footer  className="text-center" style={{borderTop:'1px solid'}}>
                <small style={{fontSize:'16px',color:'#E5E6EA'}}>
                  Last updated 2 mins ago
                </small>
              </Card.Footer>
            </Card>
          </Col>

           <Col lg={6} md={6} xs={12} className="mt-5">
            <Card className='me-3' style={{background:'#0e1022', border:'1px solid'}}>
              <Card.Img
                variant="top"
                src="https://bootstrapmade.com/content/demo/Rival/assets/img/person/person-f-8.webp"
                 className="testimonial-img mx-auto mt-4 rounded-pill"
              />
              <Card.Body>
                <Card.Title className='family ' style={{fontSize:'40px', color:'#EEEFF7',textAlign:'center'}}>
                  Rachel Taylor
                </Card.Title>
                <Card.Subtitle  className="mb-3  text-center" style={{color:'#E5E6EA'}}>
                  Marketing Lead - GrowthCo
                </Card.Subtitle>
                <div className="text-center mb-3">
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                </div>
                <Card.Text style={{fontSize:'16px',color:'#E5E6EA'}}>
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor eu fugiat pariatur excepteur sint occaecat cupidatat non proident.
                </Card.Text>
              </Card.Body>
              <Card.Footer  className="text-center" style={{borderTop:'1px solid'}}>
                <small style={{fontSize:'16px',color:'#E5E6EA'}}>
                  Last updated 1 mins ago
                </small>
              </Card.Footer>
            </Card>
          </Col>


           <Col lg={6} md={6} xs={12} className="mt-5">
            <Card className='me-3' style={{background:'#0e1022', border:'1px solid'}}>
              <Card.Img
                variant="top"
                src="https://bootstrapmade.com/content/demo/Rival/assets/img/person/person-m-14.webp"
                 className="testimonial-img mx-auto mt-4 rounded-pill"                
              />
              <Card.Body>
                <Card.Title className='family ' style={{fontSize:'40px', color:'#EEEFF7',textAlign:'center'}}>
                  Christopher Lee
                </Card.Title>
                <Card.Subtitle  className="mb-3  text-center" style={{color:'#E5E6EA'}}>
                    VP Engineering- Devstream
                </Card.Subtitle>
                <div className="text-center mb-3">
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                </div>
                <Card.Text style={{fontSize:'16px',color:'#E5E6EA'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna alique enim ad minim veniam. 
                </Card.Text>
              </Card.Body>
              <Card.Footer  className="text-center" style={{borderTop:'1px solid'}}>
                <small style={{fontSize:'16px',color:'#E5E6EA'}}>
                  Last updated 3 days ago
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
</>     
  )
}
export default Home
