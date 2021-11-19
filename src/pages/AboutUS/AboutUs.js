import React from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
const About = () => {

  return (
   <div id="about">
 <div className="experience bg-dark text-warning p-5">
            <Container>
                <h3 >WHY CHOOSE US</h3>
                <h5 className="mt-4 mb-5" >Countless Experiences</h5>
                <Row>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                             <img className="img-fluid w-25 rounded" src="https://w7.pngwing.com/pngs/17/311/png-transparent-compass-computer-icons-cardinal-direction-compass-angle-triangle-technic.png" alt="" />
                            <h2>Experienced</h2>
                            <p>
                                Average people say this to console themselves
                                when they feel helpless to make a positive
                                change in the world.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card"> 
                        <img className="img-fluid w-25 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlZIkkYV_CLMTWoLBw0lIVSskVPuttjxTfw&usqp=CAU" alt="" />
                            <h2>Worldwide</h2>
                            <p>
                                Average people say this to give themselves
                                permission to meander all over the place rather
                                than set and achieve goals.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <img className="img-fluid w-25 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34MnfO8NDzuYRZEw2qV2ZOSclOzZfZpKIk0mGt5P8zO--oYNXO5m53E8wIboEE5oGbLw&usqp=CAU" alt="" />
                            <h2>Cheap</h2>
                            <p>
                                Average people say this because it makes them
                                feel better to pretend is directing events in
                                their lives.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                          <img className="img-fluid w-25 rounded-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqw6eruKABiu_iuk2QOfb-aoe-kmlInNZOUw&usqp=CAU" alt="" />
                            <h2>24/7 Service</h2>
                            <p>
                                Trusted results for Your Search Query. Check
                                Visymo Search for the best results! Unlimited
                                Access. 100% Secure.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
   </div>
  );
};

export default About;
