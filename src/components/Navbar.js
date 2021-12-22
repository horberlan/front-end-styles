import React from 'react';

import { Navbar, Nav, Container, Row,Col, Card, Button } from 'react-bootstrap';
import Logo from '../img/logo.webp';
import Img from '../img/header.jpg'
// import CarouselImg2 from '../img/slide1.svg'



function Navigation() {
    return (

<>
<Navbar bg="dark" variant="dark" className="bar">
    <Container>
      <Navbar.Brand href="#home">
        <img className="logo"src={Logo} alt="style soft"
        width={40}
        >
            </img>{' '}
       
      
      </Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="#produtos">Produtos</Nav.Link>
      <Nav.Link href="#contato">Contato</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Container className='mt-5 '>
  <Row>
    <Col><h1 className='max-w mt-5'>Descubra, colete e venda NFTs extraordinários</h1>
    <p className='mt-5'>Somos o primeiro NFT marketplace do Brasil</p>
    <a href="#cards"><Button variant="primary"  className='m-5'>Explorar</Button></a>
    <a href="#contato"> <Button variant="secondary"  className='m-5'>Contato</Button></a>
    </Col>


    <Col>
    <Card className='CardHeader'style={{ width: '36rem', background:'transparent', border:'none',boxShadow: '5px 5px 4px 5px #373943' }}>
  <Card.Img variant="top" src={Img} />
  <Card.Body>
    <Card.Title>Glacial River Above #5</Card.Title>
  </Card.Body>
</Card>
    </Col>
  </Row>
  </Container>
</>
)
}
export default Navigation;