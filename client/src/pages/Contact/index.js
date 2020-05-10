import React, { useEffect } from "react";
import Form from "../../components/Form"
import "./style.css"

function Contact() {
    useEffect(() => {
        document.title = "Contact";
    }, []);

    return (
        <div>
            <h2>Contact</h2>
            <hr />
            <div className="row">
                <div className="col-md-6 col-lg-5 contact-info">
                    <p><i className="fas fa-phone-alt"></i>(206) 799-9002</p>
                    <p><i className="fas fa-envelope"></i>shaidee@alingcastre.net</p>
                    <p><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/shaidee-alingcastre" target="_blank" rel="noreferrer noopener">Shaidee Alingcastre</a></p>
                    <p><i className="fab fa-github"></i><a href="https://github.com/sali6798" target="_blank" rel="noreferrer noopener">@sali6798</a></p>
                </div>
                <div className="col-md-6 col-lg-7">
                    <Form />
                </div>
            </div>
        </div>
    );

}

export default Contact;