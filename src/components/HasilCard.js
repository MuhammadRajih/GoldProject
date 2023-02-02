import React from "react";
import '../style.css'; 
import mobil from '../images/car.png';
import { Link } from 'react-router-dom';


function HasilCard () {
    return (
        <div className="row" style={{padding:"0px 125px", height:"700px"}}>
            <div className="col-md-4">
                <div className="card mb-3 ">
                    <div className="card-body hasilCard">
                        <img src={mobil} alt="ikon" className="gambarHasil"></img>
                        <div className="d-grid">
                            <h7 className="card-title textHasil">Innova</h7>
                            <p className="card-text">Rp 500.000 / hari</p>
                            <p className="card-text" style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <Link to="/DetailMobil" className="btn btn-success mt-3" style={{width:"285px", height:"48px"}}>
                                <p className="d-flex justify-content-center mt-1">Pilih Mobil</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-3 ">
                    <div className="card-body hasilCard">
                        <img src={mobil} alt="ikon" className="gambarHasil"></img>
                        <div className="d-grid">
                            <h7 className="card-title textHasil">Innova</h7>
                            <p className="card-text">Rp 500.000 / hari</p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <Link to="/DetailMobil" className="btn btn-success mt-3" style={{width:"285px", height:"48px"}}>
                             <p className="d-flex justify-content-center mt-1">Pilih Mobil</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-3">
                    <div className="card-body hasilCard">
                        <img src={mobil} alt="ikon" className="gambarHasil"></img>
                        <div className="d-grid">
                            <h7 className="card-title textHasil">Innova</h7>
                            <p className="card-text">Rp 500.000 / hari</p>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <Link to="/DetailMobil" className="btn btn-success mt-3" style={{width:"285px", height:"48px"}}>
                            <p className="d-flex justify-content-center mt-1">Pilih Mobil</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HasilCard;