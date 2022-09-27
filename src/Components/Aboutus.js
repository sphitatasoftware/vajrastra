import React from "react";
import "./Aboutus.css";
import Card from 'react-bootstrap/Card';
import {Row,Col, Container} from "react-bootstrap";

export default Aboutus => {
    return (
        
        <div className="Aboutus" id="Aboutus" >
          <p>WHO WE ARE</p>
          <h1>We are a group of software developers rapidly delivering enhanced value to our customers.</h1>
          <h4>We approach every one of our client engagements with a strategic plan and embark on rapidly delivering <br/>targeted business results by building effective, visible and practical solutions.</h4>
          <Container className="justify-content-md-center ">
            <Row >
              <Col xs={12} lg={6}>
              <Card style={{ maxWidth:"400px",minHeight:"270px", borderBlockColor:"blue",borderBlockWidth:"5px",color:"gray" ,marginBottom:"20px"}}>
                <Card.Body>
                  <Card.Title>1)Define</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">----------------</Card.Subtitle>
                  <Card.Text>
                  Requirements are gathered by communicating with the client and end-users. An SRS (Software Requirement Specification) document is created with the user requirements expressed in natural language and technical requirements expressed in structured language used by the software development team.
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
                  A design document covering the architecture and high level design with sub-systems and module interactions is prepared. Detailed design with pseudo code is provided where necessary. Other aspects like security, concurrency, scaling, analytics and reporting are also detailed.
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
                  Choosing the right language and framework, the application is built using minimal coding and high standards. Modules are built matching the deployment strategy defined. Easy configuration and extension is provided. Continuious integration with automated testing keeps quality in control.
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
                  Cloud deployment or otherwise, all the necessary alarms, monitoring and log aggregations are put in place before the launch. Auto scaling is set up. For updates, blue-green deployment is used to reduce risk and downtime.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Container>
        </div>


    );
  };