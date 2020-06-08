import React from "react";
import "./style.css"

function About() {
    return (
        <div id="about-container">
            <h2>About me</h2>
            <hr />
            <div className="row">
                <div className="col-lg-4 mb-md-3 text-center">
                    <img src="assets/305x305.jpg" className="img-fluid" alt="Shaidee Alingcastre" />
                </div>
                <div className="col-lg-8">
                    <p>Full Stack Web Developer who is a fast and willing learner, proven through the recent completion of a three month Full Stack Web Development Bootcamp from the University of Washington. Adding new skills such as JavaScript, HTML, CSS and the MERN stack to those learned in my Bachelor of Science (Computer Science and Information Systems) degree. A known problem solver people come to, willing to help anyone debug their problems. Working on multiple projects with different teams, my aim has been to develop applications that deliver maximum customer value in terms of overall functionality, ease of use, and mobile responsiveness, which resulted in the winning of the best UI/UX for each project. I’m excited to grow my skills in a fast-paced, collaborative environment to help create solutions for the best user experiences. </p>
                    <br></br>
                    <h4>Technical Skills</h4>
                    <p><span>Languages:</span> HTML, CSS, JavaScript/jQuery, Java, Python, C, SQL (PostgreSQL / SQLite / MySQL), NoSQL (MongoDB)</p>
                    <p><span>Frameworks/Technologies:</span> React, Variety of CSS frameworks (Bootstrap / Material-UI / Materialize / UIkit / Zurb Foundation), Node.js, Express.js, Git</p>
                </div>
            </div>
        </div>
    );
}

export default About;