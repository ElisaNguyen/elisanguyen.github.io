import React from "react";
import "./Portfolio.css"
import "./About.css"
/*import data from "./../data.json"
import profilepic from "../img/profilepic.jpg";
import {Link} from "react-router-dom";*/

const Portfolio = () => {

    return <b>Under construction!</b>
    /*var portfolio = data.portfolio.map(function(project) {
        return <div className="project">
                <div className="projectname">{project.name}</div>
                <div className="project-occasion">{project.occasion}</div>
                <div className="project-topic">{project.keywords}</div>
                <div className="project-details">{project.description}</div>
            <div className="link"><a href={project.github}><i className="fa-brands fa-github"/></a></div>
            <div className="link"><a href={project.report}><i className="fa-solid fa-file"/></a></div>
        </div>
    }

    );
    return(
        <div className="portfolio">
            <div className="about-sidebar">
                <img src={profilepic} alt="profilepicture" className="sidebar-pic"/>
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
            <div className="portfolio-content">
                <div className="nav-button"><Link to="/"><i className="fa-solid fa-angles-left"/> Go back</Link></div>
                <div className="content-headline">Project Portfolio</div>
                <p>Hover for more information, links to reports and repositories. If you have any question, feel free to contact me.</p>
                {portfolio}
            </div>
        </div>
    );*/
}

export default Portfolio