import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

function Navbar(){
    const location = useLocation();
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1"><h3>GBS</h3></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item" style={{marginRight: '6%'}}>
                <NavLink to='/search' className={location.pathname === '/search' ? "nav-link active" : "nav-link"}>
                    <h5>Search</h5>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/saved' className={location.pathname === '/saved' ? "nav-link active" : "nav-link"}>
                    <h5>Saved</h5>
                </NavLink>
            </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;