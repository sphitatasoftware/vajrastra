import React from "react";
import "./Aboutus.css";
import Card from 'react-bootstrap/Card';
import {Row,Col, Container} from "react-bootstrap";
import AOS from 'aos';

import {useEffect} from "react";
import 'aos/dist/aos.css';

export default Aboutus => {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
        
        <div className="Aboutus" id="Aboutus"  >
          <br/> <br/> <br/>
          <p>WHO WE ARE</p>
          <h1>We are a group of software developers rapidly delivering enhanced value to our customers.</h1>
        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <Container className="justify-content-md-center ">
            <Row >
              <Col xs={12} lg={6}>
              <Card data-aos="fade-left"  data-aos-delay="500" style={{ maxWidth:"500px",minHeight:"270px", borderBlockColor:"gold",borderBlockWidth:"8px",color:"gray" ,marginBottom:"20px"}}>
                <Card.Body>
                  <Card.Title>1)Define</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">----------------</Card.Subtitle>
                  <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col xs={12} lg={6}>
              <Card data-aos="fade-left"    data-aos-delay="500"style={{ maxWidth:"500px",minHeight:"270px", borderBlockColor:"gold",borderBlockWidth:"8px",color:"gray" ,marginBottom:"20px"}}>
                <Card.Body>
                  <Card.Title>2)Desgin</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">-----------------</Card.Subtitle>
                  <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              </Row>
              <Row>
              <Col xs={12} lg={6}>
              <Card  data-aos="fade-right"  data-aos-delay="1000" style={{maxWidth:"500px",minHeight:"270px", borderBlockColor:"gold",borderBlockWidth:"8px",color:"gray" ,marginBottom:"20px"}}>
                <Card.Body>
                  <Card.Title>3)Build</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">-------------</Card.Subtitle>
                  <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col xs={12} lg={6}>
              <Card  data-aos="fade-right"  data-aos-delay="1000" style={{maxWidth:"500px",minHeight:"270px", borderBlockColor:"gold",borderBlockWidth:"8px",color:"gray" ,marginBottom:"20px"}}>
                <Card.Body>
                  <Card.Title>4)Launch & After</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">----------------------</Card.Subtitle>
                  <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Container>
        </div>


    );
  };