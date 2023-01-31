import React from "react"
import '../style.css'; 
import { Link } from 'react-router-dom';

function CardSewa () {
    return (     
      // <div className="CardSewa justify-content-md-center mt-5">
      //   <div className="card col-md-10" style={{ color: "white", height: "280px"}}>
      //       <div className="card-body">
      //           <h5 className="card-title font-weight-bold mt-5" style={{fontSize: "2.5em"}}>
      //             Sewa Mobil di (Lokasimu) Sekarang</h5>
      //           <p className="card-text text-justify text-center" style={{fontSize: "15px"}}>
      //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      //           <Link to="/CariMobil" className="btn btn-success mt-4" style={{height: "35px", width: "150px"}}>
      //             <p className="textSewa"> Mulai Sewa Mobil</p>
      //           </Link>
      //       </div>
      //   </div>
      // </div>
        <div className="CardSewa mt-5 d-flex flex-column justify-content-center">
          <h5 className="card-title font-weight-bold mt-5" style={{fontSize: "2.5em"}}>
            Sewa Mobil di (Lokasimu) Sekarang</h5>
          <p className="card-text text-justify text-center" style={{fontSize: "15px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <Link to="/CariMobil" className="butSewa1 btn btn-success mt-4" style={{height: "35px", width: "150px"}}>
            <p className="textSewa"> Mulai Sewa Mobil</p>
          </Link>
        </div>
    )
}

export default CardSewa;