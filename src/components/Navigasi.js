import React from "react";
import '../style.css'; 
import { Link } from "react-router-dom";


function Navigasi() {
    const handleClickScroll = (event) => {
        const element = document.getElementById(event.target.value);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="col home">
                        <Link to="/" className="buttonHome btn btn-primary">
                            <p className="textSewa">BCR</p>
                        </Link><span className="sr-only"></span>
                    </div>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col collapse navbar-collapse justify-content-md-end mr-5" id="navbarNav">
                        <ul className="navbar-nav mr-5">
                            <li className="nav-item active">
                                <button className="btn nav-link" href="#" onClick={handleClickScroll} value="ourService"> Our Services </button>
                            </li>
                            <li className="nav-item active">
                                <button className="btn nav-link" href="#" onClick={handleClickScroll} value="whyUs">Why Us</button>
                            </li>
                            <li className="nav-item active">
                                <button className="btn nav-link" href="#" onClick={handleClickScroll} value="testimonial">Testimonial</button>
                            </li>
                            <li className="nav-item active">
                                <button className="btn nav-link" href="#" onClick={handleClickScroll} value="faq">FAQ</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div> 
    )
}

export default Navigasi;