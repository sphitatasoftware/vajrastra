import React from "react";
import "./Services.css";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import AOS from 'aos';

import {useEffect} from "react";
import 'aos/dist/aos.css';


export default Services => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="Services" id="Services">
        <p>WHAT WE DO</p>
        <h1>
          {" "}
          As an Information Technology Partner, we provide variety of services
          to our customers.
        </h1>
        <h4>
          Fixed price / fixed time implementation of projects to ensure that
          projects are executed within the allocated timeframes and budgets.
          Strategic staffing to ensure that you staff your projects with experts
          in a timely manner.
        </h4>
        <br/>
        <br/>
        <Container className="justify-content-md-center ">
          <Row>
            <Col xs={12} lg={4}>
            <Card data-aos="fade-down-right"  data-aos-delay="1000" data-aos-anchor-placement="top-center" style={{ maxWidth:"400px",minHeight:"470px", borderBlockColor:"gold",borderBlockWidth:"8px",color:"gray" ,marginBottom:"20px"}}>
      <Card.Img variant="top" src="/images/s1.png" />
      <Card.Body>
        <Card.Title>Native Mobile Apps</Card.Title>
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque.
        </Card.Text>
    
      </Card.Body>
    </Card>
            </Col>
            <Col xs={12} lg={4}>
            <Card  data-aos="fade-down-right"  data-aos-delay="1500" data-aos-anchor-placement="top-center" style={{ maxWidth:"400px",minHeight:"470px", borderBlockColor:"gold",borderBlockWidth:"8px",color:"gray" ,marginBottom:"20px"}}>
      <Card.Img variant="top" src="/images/s2.png" />
      <Card.Body>
        <Card.Title>Responsive (PWA) sites</Card.Title>
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
            <Col xs={12} lg={4}>
            <Card  data-aos="fade-down-right"  data-aos-delay="2000" data-aos-anchor-placement="top-center"  style={{ maxWidth:"400px",minHeight:"470px", borderBlockColor:"gold",borderBlockWidth:"8px",color:"gray" ,marginBottom:"20px"}}>
      <Card.Img variant="top" src="/images/s3.png" />
      <Card.Body>
        <Card.Title>E-Commerce</Card.Title>
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque.
        </Card.Text>
       
      </Card.Body>
    </Card>
            </Col>
           
          </Row>
        </Container>
      </div>
    </>
  );
};
