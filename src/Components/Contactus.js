import React from "react";
import "./Contactus.css";
import AOS from 'aos';

import {useEffect} from "react";
import 'aos/dist/aos.css';

export default Contactus => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
    <div className="Contactus" id="Contactus">
      
        <p>CONTACT US</p>
        <h1>Get in touch and let's make something great together.</h1>
        <br/>
       
                    <form data-aos="slide-right"  data-aos-delay="1000" data-aos-anchor-placement="top-center" action="https://formspree.io/f/xayzprka"
            method="POST">
                    <h2 className='cp_t1'>Contact'us about your Space..</h2>
                        <input  placeholder='Name' name="username" required autoComplete="off"></input><br/>
                        <input  placeholder='Email ' name="Email" required autoComplete="off"></input><br/>
                        <input  type='mobile' placeholder='Contact no' name="Contact no" required autoComplete="off"></input><br/>
                        <input placeholder='Subject' name="Subject" required autoComplete="off"></input><br/>
                        <input type='textarea' placeholder=' Enter your Message'name="Message" required autoComplete="off"></input><br/>
                        <button>Send Message</button>
                    </form>
                
               
    
</div>
    );
  };