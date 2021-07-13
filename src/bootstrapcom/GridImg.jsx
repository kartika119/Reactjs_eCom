import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import grid1 from '../images/grid1.webp';
import grid2 from '../images/grid2.webp';
import grid3 from '../images/grid3.webp';
import grid4 from '../images/grid4.jpg';
import '../bootstrapcom/cssFiles/navbar.css';

// import CursorZoom from 'react-cursor-zoom';



export default class GridImg extends Component {
    render() {
        return (
         
             <>
                    <Row>
                        <Col  xs={{ order: 'first' }}  className="Zoom"><img src={grid1} /></Col>
                        <Col xs><img src={grid2}  className="Zoom"/></Col>
                       
                    </Row>
                    
                    <Row>
                        <Col xs={{ order: 'first' }} className="Zoom"><img src={grid3} /></Col>
                        <Col xs><img src={grid4}  className="Zoom"/></Col>
                       
                    </Row> 

</>

        )
    }
}
