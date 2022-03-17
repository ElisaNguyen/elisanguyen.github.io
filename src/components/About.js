import React from "react";
import "./About.css"
import data from "../data.json"
import profilepic from "../img/profilepic.jpg"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="about">
            <div className="about-sidebar">
                <img src={profilepic} alt="profilepic" className="sidebar-pic"/>
                <div className="sidebar-name">{data.about.info.firstname} {data.about.info.name}</div>
                <div className="sidebar-title">{data.about.info.title}</div>
                <div className="sidebar-contact">
                    <ul className="fa-ul">
                        <li><span className="fa-li" ><i className="fa-solid fa-location"/></span>
                            {data.about.info.location}
                        </li>
                        <li><span className="fa-li"><i className="fa-solid fa-envelope"/></span>
                            <a href={data.about.info.email}>E-Mail</a>
                        </li>
                        <li><span className="fa-li"><i className="fab fa-github"/></span>
                            <a href={data.about.info.github}>GitHub</a>
                        </li>
                        <li><span className="fa-li"><i className="fa-solid fa-graduation-cap"/></span>
                            <a href={data.about.info.scholar}>Google Scholar</a>
                        </li>
                        <li><span className="fa-li"><i className="fab fa-orcid"/></span>
                            <a href={data.about.info.orcid}>OrcID</a>
                        </li>
                        <li><span className="fa-li"><i className="fab fa-linkedin"/></span>
                            <a href={data.about.info.linkedin}>LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="about-overview">
                <div className="overview-greeting">
                    Hello, I'm {data.about.info.firstname}!
                </div>
                <p className="overview-text">{data.about.info.welcometext}</p>
                <p className="overview-text">
                    This website presents my CV so far and my past projects. Feel free to check them out!
                </p>
                <div className="overview-links">
                    <Link to="/cv" className="overview-button">
                        <div>CV</div>
                    </Link>
                    <Link to="/portfolio" className="overview-button">
                        <div>PORTFOLIO</div>
                    </Link>
                </div>
            </div>
        </div>
    );
  
}

export default About