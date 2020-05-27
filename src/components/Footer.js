import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="page-footer font-small ">
        <p id="contact-details">Contact Details</p>
        <div className="company-info">
          <ul className="contact-list">
            <li className="list-items">
              <i className="fa fa-road"></i> Suhler Str.17 12629
            </li>

            <li className="list-items">
              <i className="fa fa-phone"></i>+49 176 24967163
            </li>

            <li className="list-items">
              <i className="fa fa-envelope"></i>
              <p>anion.lazarev@gmail.com</p>
            </li>
          </ul>
          <ul className="contact-list">
            <li className="list-items">
              <i className="fab fa-github-square"></i>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/i-lazarev"
              >
                github.com/i-lazarev
              </a>
            </li>
            <li className="list-items">
              <i className="fab fa-linkedin"></i>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/i-lazarev/"
              >
                linkedin.com/in/i-lazarev
              </a>
            </li>
          </ul>
        </div>
        <hr></hr>

        <div className="footer-copyright text-center py-0">
          © 2020 Copyright: Created by Ion Lazarev
        </div>
      </footer>
    </div>
  );
};

export default Footer;
