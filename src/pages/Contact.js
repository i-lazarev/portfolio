import React from "react";
import "../styles/Contact.css";
import { Input } from "@material-ui/core";

const Contact = () => {
  return (
    <div id="contact-id">
      <div className="container-contact">
       
        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h3>Contact Details</h3>
            <ul>
              <li>
                <i className="fa fa-road"></i> Suhler Str.17 12629
              </li>
              <li>
                <i className="fa fa-phone"></i> +49 176 24967163
              </li>
              <li>
                <i className="fa fa-envelope"></i> anion.lazarev@gmail.com
              </li>
              <li>
                <i className="fab fa-linkedin"></i> linkedin.com/in/i-lazarev
              </li>
              <li>
                <i className="fab fa-github-square"></i> github.com/i-lazarev
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Email Me</h3>
            <form>
              <p>
                <label>Name</label>
                <input type="text" name="name" />
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="company" />
              </p>
              <p>
                <label>Email Address</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea name="message" rows="5"></textarea>
              </p>
              <p className="full">
                <button>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
