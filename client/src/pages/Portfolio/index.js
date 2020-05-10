import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import API from "../../utils/API";

function Portfolio() {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        document.title = "Portfolio";
        API.getProjects()
            .then(({ data }) => {
                setProjects(data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="Portfolio">
            {/* Row 1 */}
            <div className="row">
                {/* heading takes full width of the row */}
                <div className="col-12">
                    <h2>Portfolio</h2>
                    <hr />
                </div>
            </div>
            {/* Row 2 */}
            <div className="row">
                <div className="col-12 text-right mb-3">
                    <a href="assets/Shaidee_Alingcastre_Resume.pdf" className="mr-3" target="_blank">View Resume ></a>
                </div>
            </div>
            <div className="row">
                {projects.map(project => <Card key={project.name} {...project} />)}
            </div>
        </div>
    );
}

export default Portfolio;