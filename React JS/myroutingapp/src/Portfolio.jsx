import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                   <Card.Title>Card Title</Card.Title>
                   <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
           </Card>        
        </Col>

       </Container>
      
    </div>
  )
}

export default Portfolio
