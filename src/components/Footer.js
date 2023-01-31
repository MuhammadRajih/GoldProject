import React from "react";
import '../style.css'; 



const Footer = () => {
    return (
        <div className="row" >
            <div className="ftext1 col-md-3">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="ftext2 col-md-2">
                <ul>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Our Services</a>
                    </li>
                    <li className="nav-item mt-2">
                        <a className="nav-link" href="#">Why Us</a>
                    </li>
                    <li className="nav-item mt-2">
                        <a className="nav-link" href="#">Testimonial</a>
                    </li>
                    <li className="nav-item mt-2">
                        <a className="nav-link" href="#">FAQ</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-2">
                <div className="row">
                    <p><strong> Connect with us </strong></p>
                </div>
                <div className="row">
                    <div className="col-sm-2"><a href="#" class="fa fa-facebook"></a></div>
                    <div className="col-sm-2"><a href="#" class="fa fa-instagram"></a></div>
                    <div className="col-sm-2"><a href="#" class="fa fa-twitter"></a></div>
                    <div className="col-sm-2"><a href="#" class="fa fa-google"></a></div>
                    <div className="col-sm-2"><a href="#" class="fa fa-twitch"></a></div>
                </div>
            
            </div>
            <div className="col-md-3">
                <p><strong> Copyright Binar 2022 </strong></p>
                <button href="#" className="fbutton btn btn-primary"></button>
            </div>
        </div>
    )
}

export default Footer;