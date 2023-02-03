import React from "react"
import '../style.css'; 
import { Link } from 'react-router-dom';

function CardSewa () {
    return (     
      <div className="CardSewa mt-5">
        <h5 className="textCard card-title mt-5">
          Sewa Mobil di Bandung Sekarang</h5>
        <p className="textCard1 card-text mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <Link to="/CariMobil" className="butSewa1 btn btn-success mt-4" style={{height: "35px", width: "150px"}}>
          <p className="textSewa"> Mulai Sewa Mobil</p>
        </Link>
      </div>
    )
}

export default CardSewa;