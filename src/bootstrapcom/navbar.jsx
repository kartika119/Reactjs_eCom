import React, { Component } from 'react';
import { Nav, Form, Button, FormControl, Row, Col, NavDropdown } from 'react-bootstrap';
import '../bootstrapcom/cssFiles/navbar.css';
import Signupmodel from '../bootstrapcom/Signupmodel';
import Loginmodal from '../bootstrapcom/Loginmodal';
import Spinner from 'react-bootstrap/Spinner'



export default class navbar extends Component {
    render() {
        return (<>


            <Row style={{ backgroundColor: "#6dbaff" }}>
                <Col xs={1} >
                    <h1 className="shop_name">Shopwoop</h1>
                    </Col>
                    <Col xs={1} style={{ paddingTop: "13px"}} >
                    <Spinner animation="grow" variant="warning" size="sm" />
                    <Spinner animation="grow" variant="danger" size="sm" />
                    <Spinner animation="grow" variant="dark"  size="sm"/>
                </Col>
                <Col xs={8} >
                    <Nav fixed="top">

                        <Nav.Item className="nav_sec">
                            <Nav.Link href="/home">Home</Nav.Link>


                        </Nav.Item>
                        <Nav.Item className="nav_sec">
                            <Nav.Link href="/About">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav_sec">
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav_sec">
                            <Nav.Link href="/work">Work </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className="nav_sec">
                            <NavDropdown title="Types" id="nav-dropdown">
                                <NavDropdown.Item eventKey="Basic Pricing">Home Decore</NavDropdown.Item>
                                <NavDropdown.Item eventKey="Corporate Pricing">Kitchen </NavDropdown.Item>
                                <NavDropdown.Item eventKey="Corporate Pricing">Clothes </NavDropdown.Item>
                                <NavDropdown.Item eventKey="Corporate Pricing">Makeup products </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item eventKey="Enterprise pricing">Electronics</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>

                        <Nav.Item className="nav_sec">
                            <Nav.Link >
                                <Form className="d-flex">
                                    <FormControl

                                        type="search"
                                        placeholder="Search "
                                        className="mr-6"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-dark">Search</Button>
                                </Form>
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>


                </Col>

                <Col xs={1}>
                    <Signupmodel />
                </Col>
                <Col xs={1}>
                    <Loginmodal />
                </Col>


            </Row>

        </>

        )
    }
}
