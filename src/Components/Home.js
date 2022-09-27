import React from "react";
import Herosection from "./Herosection";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Services from "./Services";
import Clients from "./Clients";
export default Home => {
    return (
      <>
        <Herosection/>
        <Aboutus/>
        <Services />
        <Clients />
        <Contactus/>
      </>
    );
  };