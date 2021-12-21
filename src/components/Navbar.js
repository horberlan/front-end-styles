import React from 'react';

import { Navbar, Nav, Container,Carousel } from 'react-bootstrap';
import Logo from '../img/logo.webp';
import CarouselImg from '../img/download.png'




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
  <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={CarouselImg}
      height={500}
      alt="First slide"
    />
     <Carousel.Caption>
      <h3>Somos um NFT marketplace</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={CarouselImg}
      height={500}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Somos um NFT marketplace</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={CarouselImg}
      height={500}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Somos um NFT marketplace</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
)
}
export default Navigation;