import React from "react";
import { BsPhoneFill} from "react-icons/bs";
import { FaFacebook,FaGooglePlay,FaLinkedinIn } from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact" style={{ backgroundColor: "#fff" }}>
      <div className="contactForm">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              style={{marginTop:"10px"}}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label style={{marginTop:"10px"}} for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            <input
              style={{marginTop:"10px"}}
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label style={{marginTop:"10px"}} class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button style={{marginTop:"10px"}} type="submit" class="btn btn-success">
            Subscribe
          </button>
        </form>
      </div>
      <div className="contactAddress">
      
        <div className="address-div" style={{ display: "block" }}>
        
          <div className="icon">
            <i> <FaFacebook /></i>
          </div>
         </div>
        <div className="address-div">
          <div className="icon">
          <i><FaGooglePlay></FaGooglePlay></i> 
          </div>
               
        </div>
        <div className="address-div">
          <div className="icon">
          <i><FaLinkedinIn /></i> 
          </div>
              
        </div>
        <div className="address-div">
       <div className="icon">
       <i><BsPhoneFill /></i>
       </div>
       <p><small>+88017816</small></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
