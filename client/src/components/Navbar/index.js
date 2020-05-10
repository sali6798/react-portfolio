import React from 'react';
import "./style.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="brand-container">
                <a className="navbar-brand" href="/" rel="noreferrer noopener">Shaidee Alingcastre</a>
            </div>

            <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="nav justify-content-around ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/" rel="noreferrer noopener">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio" rel="noreferrer noopener">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact" rel="noreferrer noopener">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;