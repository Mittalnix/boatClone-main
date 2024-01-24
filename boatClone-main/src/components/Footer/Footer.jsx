import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

import "./Footer.css";

export function Footer(){
    return(
        <>
         <div className="footer-main">
            <div className="footer-links">
                <a href="https://twitter.com/NitinMi36506611" target="_blank" ><FaTwitter/></a>
                <a href="https://www.linkedin.com/in/nitin-mittal-6141bb171/" target="_blank" ><FaLinkedin/></a>
                <a href="https://github.com/Nitin-Mittal08" target="_blank" ><FaGithub/></a>
            </div>
            <div className="footer-text">Developed by Nitin Mittal | © No Copyright, Feel free to replicate.</div>
         </div>
        </>
    )
}