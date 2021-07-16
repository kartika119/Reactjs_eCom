import React, { Component } from 'react'
import {Card,CardGroup} from 'react-bootstrap'
import slide3 from '../images/slide3.jpg';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.webp';
import '../bootstrapcom/cssFiles/navbar.css';


export default class ImgCards extends Component {
    render() {
        return (
            <div style={{margin: "1em"}}>
                <CardGroup>
  <Card >
    <Card.Img variant="top" src={slide3}   className="Zoom" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={slide1}    className="Zoom" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={slide2}   className="Zoom"  />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>
            </div>
        )
    }
}
