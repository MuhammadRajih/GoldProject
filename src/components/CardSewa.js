import React from "react"
import '../style.css'; 

function CardSewa () {
    return (     
      <div>
          <div className="row justify-content-md-center mt-5">
            <div className="card text-center mt-5 col-md-10" style={{backgroundColor: "#0D28A6", color: "white", height: "280px"}}>
                <div className="card-body">
                    <h5 className="card-title font-weight-bold mt-5" style={{fontSize: "2.5em"}}>Sewa Mobil di (Lokasimu) Sekarang</h5>
                    <p className="card-text text-justify text-center" style={{fontSize: "15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br>do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a href="#" className="btn btn-success mt-4" style={{height: "35px", width: "130px"}}>Mulai Sewa Mobil</a>
                </div>
            </div>
        </div>
      </div>
    )
}

export default CardSewa;