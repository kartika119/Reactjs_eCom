
import React, { useState } from 'react'
import { Button, Modal ,Form ,Row, Col} from "react-bootstrap";

function Loginmodal() {






    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <div>
            <a style={{

                paddingRight: "2rem",
                fontFamily: 'Qahiri',
                fontSize: "34px"
            }}

                variant="primary" onClick={handleShow}>
                Login
            </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Please Login  Here</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>








                </Modal.Body>
                <Modal.Footer   >
                     <Button    variant="success" onClick={handleClose}>
                      Login
                    </Button>
                </Modal.Footer>
            </Modal>



        </div>
    )
}
export default Loginmodal;
