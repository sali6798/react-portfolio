import React, { useEffect } from "react";
import Form from "../../components/Form"
import "./style.css"

function Contact() {
    useEffect(() => {
        document.title = "Contact";
    }, []);

    return (
        <div className="Contact">
            <h2>Contact</h2>
            <hr />
            <div className="row">
                <div className="col-md-6 col-lg-5 contact-info">
                    <p><img src="/assets/phone-alt-solid.svg" alt="phone icon"></img>(206) 799-9002</p>
                    <p><img src="/assets/envelope-solid.svg" alt="envelope icon"></img>shaidee@alingcastre.net</p>
                    <p><img src="/assets/linkedin-brands.svg" alt="linkedin icon"></img><a href="https://www.linkedin.com/in/shaidee-alingcastre" target="_blank" rel="noreferrer noopener">Shaidee Alingcastre</a></p>
                    <p><img src="/assets/github-brands.svg" alt="github icon"></img><a href="https://github.com/sali6798" target="_blank" rel="noreferrer noopener">@sali6798</a></p>
                </div>
                <div className="col-md-6 col-lg-7">
                    <Form />
                </div>
            </div>
        </div>
    );

}

export default Contact;