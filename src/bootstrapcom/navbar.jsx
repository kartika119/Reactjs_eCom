import React, { Component } from 'react';
import {Nav ,Form ,Button ,FormControl}from 'react-bootstrap';
import '../bootstrapcom/cssFiles/navbar.css';
import Signupmodel from '../bootstrapcom/Signupmodel';
import Loginmodal from '../bootstrapcom/Loginmodal';




export default class navbar extends Component {
    render() {
        return (<>
            <div className="main_nav">
                <h1 className="shop_name">Shopwoop</h1>
                <Signupmodel />
                <Loginmodal />


            </div>


            <div className="first_nav">
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
                    <Nav.Item   className="nav_sec">
                    <Nav.Link >
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search "
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        </Nav.Link> 
                    </Nav.Item>

                </Nav>

            </div>
        </>

        )
    }
}
