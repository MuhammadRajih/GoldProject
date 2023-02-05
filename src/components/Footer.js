import React from "react";
import '../style.css'; 
import facebook from '../images/icon_facebook.png';
import insta from '../images/icon_instagram.png';
import twitter from '../images/icon_twitter.png';
import twitch from '../images/icon_twitch.png';
import email from '../images/icon_mail.png';


function Footer() {
    return (
        <div className="row cardFooter">
            <div className="ftext1 col-md-3">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="col-md-3">
                <ul className="ftext2" style={{listStyle:"none"}}>
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
            <div className="col-md-3 cardConnect">
                <div className="row">
                    <p><strong> Connect with us </strong></p>
                </div>
                <div className="itemConnect">
                    <a href="#" className="fa"><img src={facebook}></img></a>
                    <a href="#" className="fa"><img src={insta}></img></a>
                    <a href="#" className="fa"><img src={twitter}></img></a>
                    <a href="#" className="fa"><img src={email}></img></a>
                    <a href="#" className="fa"><img src={twitch}></img></a>
                </div>
            </div>
            <div className="col-md-3 cRight">
                <p><strong> Copyright Binar 2022 </strong></p>
                <button href="#" className="fbutton btn btn-primary"></button>
            </div>
        </div>
    )
}

export default Footer;