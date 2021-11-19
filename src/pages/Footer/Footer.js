import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <div>
            <Container fluid className="footer bg-dark mt-5">
                <Row>
                    <Col md={5}>
                        <div className="text-center pt-5 text-white">

                            <h3> Quick Links</h3>
                            <p>Franch Experience</p>
                            <p>Ancient Rome Discover</p>
                            <p>Get Into Naxos Island</p>
                            <p>Vietnam Island Experience</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <ul className="list-unstyled">
                            <h4> Explore</h4>
                            <li>
                                <a href="/home">home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/our">Our</a>
                            </li>
                            <li>
                                <a href="services"> Service</a>
                            </li>
                            <li>
                                <a href="">FAQ</a>
                            </li>
                        </ul>
                    </Col>

                    <Col md={2}>
                        <ul className="list-unstyled">
                            <h4>Our Address</h4>

                            <li>
                                <a href="">3596 Longview Ave, NY</a>
                            </li>
                            <li>
                                <a href=""> 718-570-8650</a>
                            </li>
                            <li>
                                <a href="">  anymail@mail.com</a>
                            </li>

                            <li>
                                <a href="">09.00 - 17.00</a>
                            </li>

                        </ul>
                    </Col>
                    <Col md={3} className="text-white mt-5P">

                        <h3> About</h3>
                        <p>Company</p>
                        <p>Careers</p>
                        <p>Help Center</p>

                        <p>Privacy</p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
