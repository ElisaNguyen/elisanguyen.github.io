import React from "react";
import { Link } from "react-router-dom";
import "./CV.css";
import "./About.css";
import data from "../data.json";
import profilepic from "../img/profilepic.jpg";

const CV = () => {
    var education = data.cv.education.map(function(education) {
            return <details>
                <summary>
                    <div className="content-title">{education.title}</div>
                    <div className="content-dates">{education.duration}</div>
                    <div>{education.uni} in {education.location}</div>
                </summary>
                <p className="description">{education.description}</p>
            </details>
        }
    );
    var work = data.cv.work.map(function(work) {
        return <details>
            <summary>
                <div className="content-title">{work.title}</div>
                <div className="content-dates">{work.duration}</div>
                <div>{work.company} in {work.location}</div>
            </summary>
            <p className="description">{work.description}</p>
        </details>
        }
    );
    var volunteer = data.cv.volunteer.map(function(volunteer) {
        return <details>
            <summary>
                <div className="content-title">{volunteer.title}</div>
                <div className="content-dates">{volunteer.duration}</div>
                <div>{volunteer.initiative} in {volunteer.location}</div>
            </summary>
            <p className="description">{volunteer.description}</p>
        </details>
        }
    );
    return(
        <div className="cv">
            <div className="about-sidebar">
                <img src={profilepic} alt="profilepic" className="sidebar-pic"/>
                <div className="sidebar-name">{data.about.info.firstname} {data.about.info.name}</div>
                <div className="sidebar-title">{data.about.info.title}</div>
                <div className="sidebar-contact">
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fa-solid fa-location"/></span>
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
            <div className="cv-content">
                <div className="nav-button"><Link to="/"><i className="fa-solid fa-angles-left"/> Go back</Link></div>
                <div className="content-headline">Curriculum Vitae</div>
                <p>Click for more information.</p>
                <div className="cv-info-1">
                    <div className="cv-section-headline">WORK</div>
                    <div className="cv-section-content">{work}</div>
                </div>
                <div className="cv-info-2">
                    <div className="cv-section-headline">EDUCATION</div>
                    <div className="cv-section-content">{education}</div>
                </div>
                <div className="cv-info-3">
                    <div className="cv-section-headline">VOLUNTEER</div>
                    <div className="cv-section-content">{volunteer}</div>
                </div>
            </div>
        </div>
    );
}

export default CV