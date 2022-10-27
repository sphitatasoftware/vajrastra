import React from "react";
import "./Aboutus.css";
import Card from 'react-bootstrap/Card';
import {Row,Col, Container} from "react-bootstrap";

export default Aboutus => {
    return (
        
        <div className="Aboutus" id="Aboutus" >
          <br/> <br/> <br/>
          <p>WHO WE ARE</p>
          <h1>We are a group of software developers rapidly delivering enhanced value to our customers.</h1>
        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <Container className="justify-content-md-center ">
            <Row >
              <Col xs={12} lg={6}>
              <Card style={{ maxWidth:"400px",minHeight:"270px", borderBlockColor:"blue",borderBlockWidth:"5px",color:"gray" ,marginBottom:"20px"}}>
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
              <Card style={{ maxWidth:"400px",minHeight:"270px", borderBlockColor:"blue",borderBlockWidth:"5px",color:"gray" ,marginBottom:"20px"}}>
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
              <Card style={{maxWidth:"400px",minHeight:"270px", borderBlockColor:"blue",borderBlockWidth:"5px",color:"gray" ,marginBottom:"20px"}}>
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
              <Card style={{maxWidth:"400px",minHeight:"270px", borderBlockColor:"blue",borderBlockWidth:"5px",color:"gray" ,marginBottom:"20px"}}>
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