import React from "react";
import "./Services.css";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

export default Services => {
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
        <div className="cards">
          <Row>
            <Col>
            <Card style={{ width: '25rem',height:"20vh",borderBlockColor:"blue",borderBlockWidth:"5px",color:"gray" }}>
      <Card.Img variant="top" src="/images/s1.png" />
      <Card.Body>
        <Card.Title>Native Mobile Apps</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.Native apps for B2C and B2B applications. Augmented Reality apps for enhanced user experience. Support workable offline mode for users on the move. Push Notification to customer segments promoting customer engagement.
        </Card.Text>
    
      </Card.Body>
    </Card>
            </Col>
            <Col>
            <Card style={{ width: '25rem',height:"20vh",borderBlockColor:"blue",borderBlockWidth:"5px",color:"gray" }}>
      <Card.Img variant="top" src="/images/s2.png" />
      <Card.Body>
        <Card.Title>Responsive (PWA) sites</Card.Title>
        <Card.Text>
        We build responsive sites using PWA (Progressive Web Apps) guidelines. We also have vast experience in integrating 3rd party applications for search, analytics, chat, reviews, promotions, A/B testing, Digital Payments/Wallets to name a few.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </Col>
            <Col>
            <Card style={{ width: '25rem',height:"20vh",borderBlockColor:"blue",borderBlockWidth:"5px",color:"gray" }}>
      <Card.Img variant="top" src="/images/s3.png" />
      <Card.Body>
        <Card.Title>E-Commerce</Card.Title>
        <Card.Text>
        Storefronts built against popular providers like BigCommerce, Yahoo, Shopify and custom implementations. Support for stand alone or integrated shopping cart experiences. 3rd Party integrations for the backend ordering and fullfilment functions
        </Card.Text>
       
      </Card.Body>
    </Card>
            </Col>
           
          </Row>
        </div>
      </div>
    </>
  );
};
