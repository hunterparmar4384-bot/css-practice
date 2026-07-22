import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
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
  );
}

export default Testimonials;