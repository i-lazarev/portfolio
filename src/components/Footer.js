import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          overflow: "hidden",
          
          bottom: "0",
          width: "100%",
          height: "5vh",
          background: "#212121",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
        className="page-footer font-small "
      >
        <div className="footer-copyright text-center py-0">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
