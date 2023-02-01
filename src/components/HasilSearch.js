import React from "react";
import '../style.css'; 

function HasilSearch () {
    return (
        <div className="row justify-content-md-center" style={{position:"absolute", top:"100px", left:"150px"}}>
            <div className="card" style={{width: "1047px", height: "106px"}}>
                <div className="card-body">
                    <div className="d-flex gap-3">
                        <div>
                            <p className="searchText">Nama Mobil</p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" disabled placeholder="Innova" aria-label="Username" aria-describedby="basic-addon1" style={{fontSize:"14px",textAlign:"left"}}/>
                            </div>
                        </div>
                        <div>
                            <p className="searchText">Kategori</p>
                            <div className="dropdown">
                                <button className="btn btn-secondary bg-light text-dark text-left" disabled type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: "200px", fontSize:"14px",textAlign:"left"}}>
                                    2 - 4 orang
                                </button>
                                {/* <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">2 - 4 orang</a></li>
                                    <li><a className="dropdown-item" href="#">4 - 6 orang</a></li>
                                    <li><a className="dropdown-item" href="#">6 - 8 orang</a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div>
                            <p className="searchText">Harga</p>
                            <div className="dropdown">
                                <button className="btn btn-secondary bg-light text-dark" disabled type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: "219px", fontSize:"14px",textAlign:"left"}}>
                                    Rp. 400.000 - Rp. 600.000
                                </button>
                                {/* <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">&lt;Rp. 400.000</a></li>
                                    <li><a className="dropdown-item" href="#">Rp. 400.000 - Rp. 600.000</a></li>
                                    <li><a className="dropdown-item" href="#">&gt;Rp. 600.000</a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div>
                            <p className="searchText">Status</p>
                            <div className="dropdown" >
                                <button className="btn btn-secondary bg-light text-dark" disabled type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: "200px", fontSize:"14px",textAlign:"left"}}>
                                    Disewa
                                </button>
                                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Tidak Tersedia</a>
                                </div> */}
                            </div>
                        </div>
                        <div className="">
                            <a href="#" className="btn btn-outline-primary" style={{height: "33px" ,width: "92px", fontSize: "14px", marginTop: "35px"}}>Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default HasilSearch;