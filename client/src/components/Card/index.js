import React from "react";
import "./style.css"

function Card(props) {
    return (
        <div className="col-sm-6 text-center">
            {/* Create a card with a margin on all sides */}
            <div className="card mb-5 mx-auto">
                <img src={props.img} className="card-img" alt={`${props.name} screenshot`} />
                {/* Creates a banner/label over the image */}
                <div className="card-img-overlay">
                    <h5>{props.name}</h5>
                </div>
                <ul className="list-group">
                    {props.site
                        ? <a href={props.site} target="_blank" rel="noreferrer noopener"><li className="list-group-item">Website</li></a> 
                        : <li className="list-group-item">CLI Application</li>
                    }
                    {/* {props.server
                        ? <a href={props.site} target="_blank" rel="noreferrer noopener"><li className="list-group-item">Website</li></a> 
                        : <a href={props.repo} target="_blank" rel="noreferrer noopener"><li className="list-group-item">Repository</li></a>
                    } */}
                    <a href={props.repo} target="_blank" rel="noreferrer noopener"><li className="list-group-item">Repository</li></a>
                </ul>
            </div>
        </div>
    );
}

export default Card;