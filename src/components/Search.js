import React from "react";
import '../style.css'; 


function Search () {
    return (
        <div className="row justify-content-md-center">
            <div className="card" style={{width: "1047px", height: "106px"}}>
                <div className="card-body">
                    <div className="row ">
                        <div className="col-md-3 mt-3">
                            <p>Nama Mobil</p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Ketik nama/tipe mobil" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-md-2 mt-3">
                            <p>Kategori</p>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-light text-dark text-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width: "200px"}}>
                                    Masukan Kapasitas Mobil
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">2 - 4 orang</a>
                                    <a className="dropdown-item" href="#">4 - 6 orang </a>
                                    <a className="dropdown-item" href="#">6 - 8 orang </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-3" style={{marginleft: "40px"}}>
                            <p>Harga</p>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-light text-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Masukan Harga Sewa per Hari
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Rp. 400.000</a>
                                    <a className="dropdown-item" href="#">Rp. 400.000 - Rp. 600.000</a>
                                    <a className="dropdown-item" href="#">Rp. 400.000</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-3" style={{marginleft: "30px"}}>
                            <p>Status</p>
                            <div className="dropdown" >
                                <button className="btn btn-secondary dropdown-toggle bg-light text-dark text-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width: "200px"}}>
                                    Disewa
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Tidak Tersedia</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <a href="#" className="btn btn-success" style={{height: "33px" ,width: "92px", fontSize: "14px", marginTop: "40px", marginLeft: "50px"}}>Cari Mobil</a>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Search;