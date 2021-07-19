
import React, { useState } from 'react'
import { Button, Modal, Form, Row, Col } from "react-bootstrap";



function Signupmodel() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <div>
            <a style={{

               
                fontFamily: 'Qahiri',
                fontSize: "34px"
            }}
                variant="primary" onClick={handleShow}>
                Sign Up
            </a>

         
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign up </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                         <Form>
                            

                         <Row className="mb-7">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter  first name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last name" />
                            </Form.Group>
                        </Row>



                             <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>
                    

                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Submit
                        </Button>
                    </Form>


                </Modal.Body>
               
            </Modal>



        </div >
    )
}
export default Signupmodel;
