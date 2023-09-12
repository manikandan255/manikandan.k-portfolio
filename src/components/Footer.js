import "./FooterStyles.css"
import { FaWhatsapp, FaGithub, FaHome, FaLinkedin, FaPhone } from "react-icons/fa"
import { SiGmail } from "react-icons/si"


import React from 'react'

const Footer = () => {
  const year = new Date();
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
              <h4>Current Location</h4>
                <div className="location">
                    <FaHome size={25} style={{color: "#fff", marginRight: "1.5rem", marginLeft: "2.5rem"}}/>
                    <div>
                      <h4>Poonamallee.</h4>
                      <h4>Chennai-56.</h4>
                    </div>
                </div>
                <h4 className="contact">Contact Me</h4>
                <div className="phone">
                  <h4><FaPhone size={20} style={{color: "#fff", marginRight: "1.5rem", marginLeft: "2.5rem"}}/><a href="tel:+91 73585 01827" className="link">+91 73585 01827</a></h4>
                </div>
                <div className="email">
                  <h4><SiGmail size={20} style={{color: "#fff", marginRight: "1.5rem", marginLeft: "2.5rem"}}/><a href="mailto:manikandan.k1207@gmail.com" className="link">manikandan.k1207@gmail.com</a></h4>
                </div>
            </div>
            <div className="right">
              <h4>About Me</h4>
              <p style={{marginLeft: "1.2rem"}}>I'm a Front-End Developer passionate about web development. I have practical expertise in HTML, CSS, JavaScript, React.js, Git, and GitHub. I'm dedicated to continuous learning and skill enhancement to make meaningful contributions to projects and organizations.</p>
              <div className="social">
                <h4>Connect with Me</h4>
              <a href="https://www.linkedin.com/in/manikandan-k01/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem", marginLeft: "1.4rem"}}/></a>
              <a href="https://github.com/manikandan255/" target="_blank" rel="noopener noreferrer"><FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/></a>
              <a href="https://wa.me/7358501827" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
              </div>
            </div>
        </div>
        <div className="copyright"><b>Copyrights</b> &copy; {year.getFullYear()} Manikanndan K.</div>
    </div>
  )
}

export default Footer