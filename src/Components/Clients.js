import React from "react";
import "./Client.css";
import Carousel from 'react-bootstrap/Carousel';

export default Clients => {
    return (
    <div className="client">
        <p>CLIENTS</p>
        <h1>These are some of our recent clients we've worked with.</h1>
        <br/>
        <div className="text-center" >
        <Carousel>
      <Carousel.Item interval={500}>
        <img
          
          src="https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/233963453_102810072107349_8085522588254779070_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=sCZ35OM49kYAX8-WXz_&_nc_ht=scontent.fccu31-1.fna&oh=00_AfCz7B1EndRMuyyCpnZLdSxYpEdEuRZnTp1yJ1-FEbj9VA&oe=6434A960"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/19/0d/28/edition-o-30005-whitefield.jpg?w=700&h=-1&s=1"
          alt="Second slide"
        />
         </Carousel.Item>
    </Carousel>
           </div>
</div>
    );
  };