import React from "react";
import '../style.css'; 
import mobil from '../images/car.png';
import user from '../images/users.png';

function Detail() {
    return (
        <div className="row" style={{padding:"0px 125px", height:"700px"}}>
            <div className="col-md-7">
                <div className="card mb-3 ">
                    <div className="card-body detailCard">
                        <div className="d-grid">
                            <h7 className="card-title textDetail">Tentang Paket</h7>
                            <p className="card-text textDetail">Include</p>
                            <ul className="listDetail">
                                <li className="">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li className="">Sudah termasuk bensin selama 12 jam</li>
                                <li className="">Sudah termasuk Tiket Wisata</li>
                                <li className="">Sudah termasuk pajak</li>
                            </ul>  
                            <p className="card-text textDetail" style={{fontSize:"14px"}}>Exclude</p>
                            <ul className="listDetail">
                                <li className="">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li className="">Sudah termasuk bensin selama 12 jam</li>
                                <li className="">Sudah termasuk Tiket Wisata</li>
                            </ul>  
                            <p className="card-text textDetail">Refund, Reschedule, Overtime</p>
                            <ul className="listDetail">
                                <li className="">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li className="">Sudah termasuk bensin selama 12 jam</li>
                                <li className="">Sudah termasuk Tiket Wisata</li>
                                <li className="">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li className="">Sudah termasuk bensin selama 12 jam</li>
                                <li className="">Sudah termasuk Tiket Wisata</li>
                                <li className="">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li className="">Sudah termasuk bensin selama 12 jam</li>
                                <li className="">Sudah termasuk Tiket Wisata</li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="card mb-3">
                    <div className="card-body detailCard1">
                        <img src={mobil} alt="ikon" className="gambarHasil"></img>
                        <div className="card-text">
                            <h7 className="row card-title textDetail" style={{paddingLeft:"10px"}}>Innova</h7>
                            <div className="d-flex align-items-center">
                                <img src={user} style={{width:"13px", height:"13px"}}></img>
                                <p style={{fontWeight:"normal", paddingLeft:"10px"}}>4-7 Orang</p>
                            </div>
                            <div className="row">
                                <p className="card-text col-md-6 mt-5">Total</p>
                                <p className="card-text col-md-6 mt-5" style={{paddingLeft:"120px"}}>Rp. 500.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;