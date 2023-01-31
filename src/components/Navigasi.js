import React from "react";
import '../style.css'; 
import { Link } from "react-router-dom";


function Navigasi() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="col home">
                    <Link to="/" className="buttonHome btn btn-primary">
                        <p className="textSewa">BCR</p>
                    </Link><span className="sr-only"></span>
                </div>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col collapse navbar-collapse justify-content-md-end mr-5" id="navbarNavDropdown">
                    <div className="navbar-nav mr-5">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" >Our Services </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Why Us</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Testimonial</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigasi;