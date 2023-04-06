import React from "react";
import Herosection from "./Herosection";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Services from "./Services";
import Clients from "./Clients";
import Footer from "./Footer";
export default Home => {
    return (
      <>
        <Herosection/>
        <Aboutus/>
        <Services />
        <Clients />
        <Contactus/>
        <Footer/>
      </>
    );
  };