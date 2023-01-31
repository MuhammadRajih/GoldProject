import React from "react"
import '../style.css'; 
import Dropdown from 'react-bootstrap/Dropdown';

function Faq () {
    return (
        <div className="row mt-5 mb-auto" style={{height: "600px"}}>
            <div className="sewa col-md-5 mt-3 ml-5">
                <div>
                    <p className="textFaq mt-5 ">Frequently Asked Question</p>
                </div>
                <div>
                    <p className="textFaq1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className="col-md-6 mt-5 ml-4 ">
                <div className="dropdown ">
                    <button className="butDrop btn btn-secondary btn-lg dropdown-toggle bg-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p className="textDrop">Apa saja syarat yang dibutuhkan?</p>
                    </button>
                    {/* <!-- <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> --> */}
                        {/* <!-- <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> -->
                    <!-- </div> --> */}
                </div>
                <div className="dropdown">
                    <button className="butDrop btn btn-secondary btn-lg dropdown-toggle bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p className="textDrop">Berapa hari minimal sewa mobil lepas kunci?</p>
                    </button>
                    {/* <!-- <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> -->
                        <!-- <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> -->
                    <!-- </div> --> */}
                </div>
                <div className="dropdown">
                    <button className="butDrop btn btn-secondary btn-lg dropdown-toggle bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p className="textDrop">Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
                    </button>
                    {/* <!-- <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> -->
                        <!-- <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> -->
                    <!-- </div> --> */}
                </div>
                <div className="dropdown">
                    <button className="butDrop btn btn-secondary btn-lg dropdown-toggle bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p className="textDrop">Apakah Ada biaya antar-jemput?</p>
                    </button>
                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                     </div>  */}
                </div>
                <div className="dropdown">
                    <button className="butDrop btn btn-secondary btn-lg dropdown-toggle bg-light mt-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p className="textDrop">Bagaimana jika terjadi kecelakaan</p>
                    </button>
                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div> */}
                </div>
                {/* <Dropdown className="butDrop">
                <Dropdown.Toggle variant="light" id="dropdown-basic" className="textDrop">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown> */}
            </div>
        </div>
    )
}

export default Faq;