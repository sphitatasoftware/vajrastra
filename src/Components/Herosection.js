import React from "react";
import "./Herosection.css";

export default Herosection => {
    return (
      <>
      <div className="Herosection">
      <video src='/videos/video1.mp4' autoPlay loop muted />
      <img src="/images/logo1.png"></img>
      <h1> Hello folks, we are<br/>
      Vajrasthra Technologies.</h1>
      <p> -------  We create software applications<br/>
that will take your business to the next level.</p>
      </div>
</>

    );
  };