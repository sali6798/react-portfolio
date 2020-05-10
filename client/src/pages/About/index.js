import React, { useEffect } from "react";
import "./style.css"

function About() {
    return (
        <div id="about-container">
            <h2>About me</h2>
            <hr />
            <div className="profile-img-container float-md-left mx-auto mb-3 mx-md-0 mr-md-3">
                <img src="assets/305x305.jpg" className="img-fluid" alt="Shaidee Alingcastre" />
            </div>

            <p>Hi, I'm Shaidee! I'm 23 years old, and am currently based in Seattle, WA after moving overseas from Sydney, Australia. I graduated from The University of Sydney with a degree in Bachelors of Science (Computer Science and Information Systems) and am now in the midst of learning web development from the UW Coding Boot Camp.</p>
            <br />
            <p>I enjoy nature and just being outside and taking in the scenery, which made moving to Seattle an easy move. I also have a love for cooking (and eating), reading, and I can play the Violin and mostly play the Piano.</p>
        </div>
    );
}

export default About;