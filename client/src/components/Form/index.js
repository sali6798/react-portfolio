import React, { useState } from "react";
import API from "../../utils/API"
import "./style.css"

function Form() {
    const [formObject, setformObject] = useState({
        name: "",
        email: "",
        message: "",
        success: false
    });

    const handleInputChange = event => {
        const { name, value } = event.target;

        setformObject({ ...formObject, [name]: value, success: false });
    }

    const handleSubmit = event => {
        event.preventDefault();

        API.sendForm(formObject)
            .then(data => {
                console.log(data);
                setformObject({
                    name: "",
                    email: "",
                    message: "",
                    success: true
                });
            })
            .catch(err => console.log(err));
    }

    return (
        <form>
            {/* Required name and email user input */}
            <div className="form-group">
                <label htmlFor="nameInput">Name</label>
                <input type="text" className="form-control" id="nameInput" name="name" value={formObject.name} aria-describedby="nameHelp" onChange={handleInputChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="emailInput">Email</label>
                <input type="email" className="form-control" id="emailInput" name="email" value={formObject.email} aria-describedby="emailHelp" onChange={handleInputChange} required />
            </div>
            {/* Text box for users are required to write in */}
            <div className="form-group">
                <label htmlFor="textArea">Message</label>
                <textarea className="form-control" id="textArea" name="message" rows="5" value={formObject.message} onChange={handleInputChange} required></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="btn form-group" onClick={handleSubmit}>Submit</button>
            </div>
            <div className={formObject.success ? "alert alert-success" : "d-none"} role="alert">
                <p>Message has been sent!</p>
            </div>
        </form>
    );
}

export default Form;