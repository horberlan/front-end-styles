import React, {useState} from "react";
import {Button, Card, ListGroup,ListGroupItem, Row, Container,Col,Modal} from 'react-bootstrap';
import ItemUm from '../img/unnamed 1.png';
import ItemDois from '../img/unnamed-1 1.png';
import ItemTres from '../img/unnamed-2 1.png';
import ItemQuatro from '../img/unnamed-3 1.png';
import AOS from 'aos';



AOS.init();

export default function Cards() {
    
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
        <>
<Container >
<Row className='mt-5 itens' id="produtos"  data-aos="fade-right">
    <Col>
<Card  className="cards" style={{ width: '18rem',borderRadius:'10px' }}>
  <Card.Img variant="top" 
  src={ItemUm}
  style={{ width: 'auto' }}
  />
  <Card.Body>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="cards">NFT 1</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#" className="TypePrice">Fixed Price</Card.Link>
    <Card.Link href="#"><button className="PriceItem" onClick={handleShow} >0.0007ETH</button></Card.Link>
  </Card.Body>
</Card>
</Col>
<Col >
<Card className="cards" style={{ width: '18rem',borderRadius:'10px' }}>
  <Card.Img variant="top" 
  src={ItemDois}
  style={{ width: 'auto' }}
  />
  <Card.Body>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="cards">NFT 1</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#" className="TypePrice">Fixed Price</Card.Link>
    <Card.Link href="#"><button className="PriceItem">0.0007ETH</button></Card.Link>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="cards" style={{ width: '18rem',borderRadius:'10px' }}>
  <Card.Img variant="top" 
  src={ItemTres}
  style={{ width: 'auto' }}
  />
  <Card.Body>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="cards">NFT 1</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#" className="TypePrice">Fixed Price</Card.Link>
    <Card.Link href="#"><button className="PriceItem">0.0007ETH</button></Card.Link>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="cards" style={{ width: '18rem',borderRadius:'10px' }}>
  <Card.Img variant="top" 
  src={ItemQuatro}
  style={{ width: 'auto' }}
  />
  <Card.Body>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="cards">NFT 1</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#" className="TypePrice">Fixed Price</Card.Link>
    <Card.Link href="#"><button className="PriceItem">0.0007ETH</button></Card.Link>
  </Card.Body>
</Card>
</Col>
</Row>

<Row className='mt-5 itens abaixo'  data-aos="fade-left">
    <Col>
<Card  className="cards" style={{ width: '18rem',borderRadius:'10px' }}>
  <Card.Img variant="top" 
  src={ItemUm}
  style={{ width: 'auto' }}
  />
  <Card.Body>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="cards">Fixed Price</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#" className="TypePrice">Fixed Price</Card.Link>
    <Card.Link href="#"><button className="PriceItem">0.0007ETH</button></Card.Link>
  </Card.Body>
</Card>
</Col>
<Col >
<Card className="cards" style={{ width: '18rem',borderRadius:'10px' }}>
  <Card.Img variant="top" 
  src={ItemDois}
  style={{ width: 'auto' }}
  />
  <Card.Body>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="cards">NFT 1</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#" className="TypePrice">Fixed Price</Card.Link>
    <Card.Link href="#"><button className="PriceItem">0.0007ETH</button></Card.Link>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="cards" style={{ width: '18rem',borderRadius:'10px' }}>
  <Card.Img variant="top" 
  src={ItemTres}
  style={{ width: 'auto' }}
  />
  <Card.Body>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="cards">NFT 1</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#" className="TypePrice">Fixed Price</Card.Link>
    <Card.Link href="#"><button className="PriceItem">0.0007ETH</button></Card.Link>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="cards" style={{ width: '18rem',borderRadius:'10px' }}>
  <Card.Img variant="top" 
  src={ItemQuatro}
  style={{ width: 'auto' }}
  />
  <Card.Body>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="cards">NFT 1</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#" className="TypePrice">Fixed Price</Card.Link>
    <Card.Link href="#"><button className="PriceItem">0.0007ETH</button></Card.Link>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>
    )
}

