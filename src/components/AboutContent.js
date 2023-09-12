import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import React from 'react'
import React1 from "../assets/linkedin.png"
import React2 from "../assets/github.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm Manikandan K, a dedicated Front-End Developer committed to creating exceptional web experiences. With a strong technical foundation and fresh perspectives, I'm here to play a role in advancing the evolution of the web.</p> 
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1}  className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutContent