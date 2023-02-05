import React from "react"
import '../style.css'; 
import { Link } from 'react-router-dom';

function CardSewa() {
    return (     
      <div className="testing1 mt-5">
        <div className="CardSewa">
          <h5 className="textCard  mt-5">
            Sewa Mobil di Bandung Sekarang</h5>
          <p className="textCard1 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <Link to="/CariMobil" className="butSewa1 btn btn-success mt-2" style={{height: "35px", width: "150px"}}>
            <p className="textSewa"> Mulai Sewa Mobil</p>
          </Link>
        </div>
      </div>
      // <section className="testing1">
      //   <div className="testing">
      //     <h1>Hello</h1>
      //     <p>Lorem ipsum sit dolor amet,</p>
      //   </div>
      // </section>
    )
}

export default CardSewa;