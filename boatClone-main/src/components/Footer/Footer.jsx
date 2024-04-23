import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./Footer.css";

export function Footer() {
  return (
    <>
      <div className="footer-main">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/nikhil-mittal-179302197/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/Mittalnix" target="_blank">
            <FaGithub />
            
          </a>
        </div>
        <div className="footer-text">
          Developed by Nikhil Mittal | © No Copyright, Feel free to replicate.
        </div>
      </div>
    </>
  );
}
