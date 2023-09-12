import "./HeroImgStyles.css"
import IntroImg from "../assets/intro-bg.avif"
import { Link } from "react-router-dom"
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs"
import { SiGmail } from "react-icons/si"

import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={IntroImg} alt="IntroImg" className="into-img"/>
        </div>
        <div className="content">
            <p>Hello, I'm</p>
            <h1>Manikandan K</h1>
            <h3>Front-End Developer</h3>
            <div>
              <Link to="/project" className="btn">
                Projects
              </Link>
              <Link to="/contact" className="btn btn-light">
                Contact
              </Link>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/manikandan-k01/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={30}/></a>
              <a href="https://github.com/manikandan255/" target="_blank" rel="noopener noreferrer"><BsGithub size={30} /></a>
              <a href="mailto:manikandan.k1207@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail size={30} /></a>
              <a href="tel:+91 73585 01827" target="_blank" rel="noopener noreferrer"><BsFillTelephoneFill size={28} /></a>  
            </div>
        </div>
    </div>
  )
}

export default HeroImg