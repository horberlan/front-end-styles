import React,{useState} from "react";
import { Card, ListGroup,ListGroupItem, Row, Container,Col} from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse'
import ItemUm from '../img/unnamed 1.png';
import ItemDois from '../img/unnamed-1 1.png';
import ItemTres from '../img/unnamed-2 1.png';
import ItemQuatro from '../img/unnamed-3 1.png';
import AOS from 'aos';



AOS.init();

export default function Cards() {
  const [open, setOpen] = useState(false);

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
<button className="More mt-5 "
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Mostrar mais
      </button>
      <Collapse in={open}>
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
      </Collapse>
</Container>


</>
    )
}

