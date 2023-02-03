import React,{useState } from "react";
import '../style.css'; 
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';


function Search () {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        // <>
        // <Button variant="primary" onClick={handleShow}>
        //     Launch
        // </Button>
        // <Offcanvas show={show} onHide={handleClose}>
            <div className="row cardSearch">
                <div className="card cardSearch1">
                    <div className="card-body">
                        <div className="cardSearch2">
                            <div>
                                <p className="searchText">Nama Mobil</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Ketik nama/tipe mobil" aria-label="Username" aria-describedby="basic-addon1" style={{fontSize:"14px",textAlign:"left"}}/>
                                </div>
                            </div>
                            <div>
                                <p className="searchText">Kategori</p>
                                <div className="dropdown">
                                    <button className=" searchButton btn-secondary dropdown-toggle bg-light text-dark text-left"  type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                        Masukan Kapasitas Mobil
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">2 - 4 orang</a></li>
                                        <li><a className="dropdown-item" href="#">4 - 6 orang</a></li>
                                        <li><a className="dropdown-item" href="#">6 - 8 orang</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p className="searchText">Harga</p>
                                <div className="dropdown">
                                    <button className=" searchButton btn-secondary dropdown-toggle bg-light text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                        Masukan Harga Sewa per Hari
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">&lt;Rp. 400.000</a></li>
                                        <li><a className="dropdown-item" href="#">Rp. 400.000 - Rp. 600.000</a></li>
                                        <li><a className="dropdown-item" href="#">&gt;Rp. 600.000</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p className="searchText">Status</p>
                                <div className="dropdown" >
                                    <button className=" searchButton btn-secondary dropdown-toggle bg-light text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Disewa
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Tidak Tersedia</a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="">
                                <a href="#" className="btn btn-success" style={{height: "33px" ,width: "92px", fontSize: "14px", marginTop: "35px"}}>Cari Mobil</a>
                            </div> */}
                            <Link to="/HasilCari" className=" btn btn-success" style={{height: "33px" ,width: "92px", fontSize: "14px", marginTop: "35px"}}>
                                Cari Mobil
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        // </Offcanvas>
        // </>
    )   
}

export default Search;