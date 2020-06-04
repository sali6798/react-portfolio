import React from "react";
import "./style.css"

function About() {
    return (
        <div id="about-container">
            <h2>About me</h2>
            <hr />
            <div className="profile-img-container float-md-left mx-auto mb-3 mx-md-0 mr-md-3">
                <img src="assets/305x305.jpg" className="img-fluid" alt="Shaidee Alingcastre" />
            </div>

            <p>Full Stack Web Developer who is a fast and willing learner, proven through the recent completion of a three month Full Stack Web Development Bootcamp from the University of Washington. Adding new skills such as JavaScript, HTML, CSS and the MERN stack to those learned in my Bachelor of Science (Computer Science and Information Systems) degree. A known problem solver people come to, willing to help anyone debug their problems. Working on multiple projects with different teams, my aim has been to develop applications that deliver maximum customer value in terms of overall functionality, ease of use, and mobile responsiveness, which resulted in the winning of the best UI/UX for each project. I’m excited to grow my skills in a fast-paced, collaborative environment to help create solutions for the best user experiences. </p>
        </div>
    );
}

export default About;