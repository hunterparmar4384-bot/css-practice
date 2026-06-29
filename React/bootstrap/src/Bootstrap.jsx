import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';



function ContainerExample() {
  return (
    <>

    <div className='myw' >
    <Container className='mycol'>      
        <div className='bg1'>Clarity</div>


        <div className='bg2'> 
           <Nav className="me-auto" >
            <Nav.Link href="#features" className='line'>Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Team</Nav.Link>     
             
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dropdown 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dropdown 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dropdown 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Dropdown 4
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav> 

        </div>
        <div className='bg3'>Get started </div>              
    </Container>
    </div> 

    <div className='fullw'>
      <Container  className='mycol2'>
      <Row>
        <Col className='mybg'>
        <Stack direction="vertical" gap={3}>
      <div className="p-2 mydiv1">Transform Your Digital Presence</div>
      <div className="p-2 mydiv2">We create innovative digital solutions that drive growth and elevate your brand. From web development to digital marketing, we're your partners in digital transformation.</div>
      <div className="p-2 ">
        <div className="d-flex gap-4 mb-2">
        <Button className='bt1' size="lg rounded-pill">
          Get started
        </Button>

        <Button className='bt2' size="lg rounded-pill">
          Our work
        </Button>
      </div>
      </div>
      <div className="p-2">
        <Row>
        <Col>
        <div className='sub'>150</div>
        <div className='text'>Projects Completed</div>
        </Col>
        <Col>
        <div className='sub'>95</div>
        <div className='text'>Client Satisfaction</div>
        </Col>
        <Col>
        <div className='sub'>24</div>
        <div className='text'>Team Members</div>
        </Col>
      </Row>
      </div>
    </Stack>
        </Col>

       <Col className='mybg2' lg={6}>
        <div className='myimg'>
          <img src='https://bootstrapmade.com/content/demo/Clarity/assets/img/misc/misc-16.webp'></img>
        </div>
                       
        </Col>
      </Row>
    </Container> 
    </div>
    </>
  );
}

export default ContainerExample;