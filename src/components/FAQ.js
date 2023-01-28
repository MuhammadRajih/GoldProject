import React from "react"
import '../style.css'; 

function Faq () {
    return (
        <div className="row mt-5 mb-auto" style={{height: "500px"}}>
            <div className="sewa col-md-5 mt-3 ml-5">
                <div>
                    <p className="font-weight-bold text-left mt-5 offset-md-1" style={{fontSize: "2.5em"}}>
                        Frequently Asked Question</p>
                </div>
                <div>
                    <p className="font-weight-normal text-left text-left offset-md-1" style={{fontSize: "17px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className="col-md-6 mt-5 ml-4 ">
                <div className="dropdown ">
                    <button style={{height: "56px", width: "668px"}} className="btn btn-secondary btn-lg dropdown-toggle font-weight-bold text-left text-dark bg-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Apa saja syarat yang dibutuhkan?
                    </button>
                    {/* <!-- <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> --> */}
                        {/* <!-- <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> -->
                    <!-- </div> --> */}
                </div>
                <div className="dropdown">
                    <button style={{height: "56px", width: "668px"}} className="btn btn-secondary btn-lg dropdown-toggle font-weight-bold text-left text-dark bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                    {/* <!-- <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> -->
                        <!-- <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> -->
                    <!-- </div> --> */}
                </div>
                <div className="dropdown">
                    <button style={{height: "56px", width: "668px"}} className="btn btn-secondary btn-lg dropdown-toggle font-weight-bold text-left text-dark bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                    {/* <!-- <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> -->
                        <!-- <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> -->
                    <!-- </div> --> */}
                </div>
                <div className="dropdown">
                    <button style={{height: "56px", width: "668px"}} className="btn btn-secondary btn-lg dropdown-toggle font-weight-bold text-left text-dark bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Apakah Ada biaya antar-jemput?
                    </button>
                    {/* <!-- <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> -->
                    <!-- </div>  --> */}
                </div>
                <div className="dropdown">
                    <button style={{height: "56px", width: "668px"}} className="btn btn-secondary btn-lg dropdown-toggle font-weight-bold text-left text-dark bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bagaimana jika terjadi kecelakaan
                    </button>
                    {/* <!-- <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> -->
                        <!-- <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> -->
                    <!-- </div> --> */}
                </div>
            </div>
        </div>
    )
}

export default Faq;