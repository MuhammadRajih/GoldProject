import React from "react"
import '../style.css'; 

function Faq () {
    return (
        <div className="cardFaq row mt-5 " style={{height: "600px"}}>
            <div className="sewa col-md-5 mt-3">
                <div>
                    <p className="textFaq">Frequently Asked Question</p>
                </div>
                <div>
                    <p className="textFaq1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className="col-md-7">
                <div className="dropdown ">
                    <button className="butDrop d-flex align-items-center btn btn-secondary btn-lg dropdown-toggle text-dark bg-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Apa saja syarat yang dibutuhkan?
                    </button>
                    {/* <!-- <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> --> */}
                        {/* <!-- <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> -->
                    <!-- </div> --> */}
                </div>
                <div className="dropdown">
                    <button className="butDrop btn d-flex align-items-center btn-secondary btn-lg dropdown-toggle text-dark bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                    {/* <!-- <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> -->
                        <!-- <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> -->
                    <!-- </div> --> */}
                </div>
                <div className="dropdown">
                    <button className="butDrop d-flex align-items-center btn btn-secondary btn-lg dropdown-toggle text-dark bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                    {/* <!-- <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> -->
                        <!-- <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> -->
                    <!-- </div> --> */}
                </div>
                <div className="dropdown">
                    <button className="butDrop d-flex align-items-center btn btn-secondary btn-lg dropdown-toggle text-dark bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Apakah Ada biaya antar-jemput?
                    </button>
                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                     </div>  */}
                </div>
                <div className="dropdown">
                    <button className="butDrop d-flex align-items-center btn btn-secondary btn-lg dropdown-toggle text-dark bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bagaimana jika terjadi kecelakaan?
                    </button>
                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Faq;