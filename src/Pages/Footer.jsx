import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../Pages/footer.css';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillCreditCard } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { IoMdCash } from "react-icons/io";
import { BiMoney } from "react-icons/bi";

import { FaCcVisa } from "react-icons/fa";

import store from '../images/store.png';




export default class Footer extends Component {
    render() {
        return (
            <div className="div_footer" >

                <Row className="row_footer">
                    <Col>
                        <h6 className="main-head">ShopWoop</h6>
                        <ul className="col_link">
                            <li>Who We are</li>
                            <li>Join Our Team </li>
                            <li>Term And Conditions</li>
                            <li>Customer Care</li>
                            <li>Payments </li>
                            <li>collections</li>
                        </ul>

                    </Col>
                    <Col>
                        <h6 className="main-head">Follow Us </h6>
                        <ul className="col_link">
                            <li><AiFillFacebook />Facebook</li>
                            <li><AiFillInstagram />Instagram</li>
                            <li><AiFillTwitterSquare />Twitter</li>
                            <li><SiTelegram />Telegram </li>

                        </ul>
                    </Col>
                    <Col>

                        <h6 className="main-head">Shop By</h6>
                        <ul className="col_link">
                            <li>Men</li>
                            <li>Womens</li>
                            <li>Kids</li>
                            <li>HomeDecore </li>
                            <li>Electronic</li>
                            <li>Kitchen</li>


                        </ul>

                    </Col>
                </Row>

                <hr style={{
                    color: "black",
                    margin: " 1.5rem"
                }}></hr>


                <Row>
                    <Col>
                        <h6>Payments Methods</h6>
                        <div className="payment_nav">
                            <li>
                                <IoMdCash /> COD
                            </li>
                            <li>
                                <AiFillCreditCard />Net Payment
                            </li>
                            <li>
                                <BiMoney />  Jio Money

                            </li>
                            <li>
                                <FaCcVisa />Verifies by VISA

                            </li>

                        </div>
                    </Col>

                    <Col>
                        <Row style={{ paddingLeft: "32rem" }}  >
                            <img src={store} style={{

                                height:" 5em",
                                width: "9em",
                                borderRadius: "9rem"
                            }} />
                        </Row>

                        {/* <Row>

                            <h6 style={{
                                float: 'right',

                                paddingRight: "3em",
                                fontWeight: "revert",
                                fontFamily: "auto"

                            }}> SHOPWOP</h6>
                        </Row> */}
                    </Col>
                </Row>






            </div >
        )
    }
}
