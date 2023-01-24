import React from "react";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light" style="background-color: #cfd4ed;">
                <div>
                    <a href="#" className="btn" style="height: 30px; margin-left: 90px; width: 100px; background-color: #0D28A6;"></a><span className="sr-only">(current)</span>
                </div>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-end mr-5" id="navbarNavDropdown">
                    <div className="navbar-nav mr-5">
                        <ul className="navbar-nav " style="margin-right: 120px;">
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
        </header>
    )
}

export default Navbar;