import React from "react";
import '../style.css';
import servis from '../images/avatarService.png';

const OurServices = () => {
    return (
        <div className="row">
            <div className="col-md-5">
                <img className="avaService card-img-top offset-md-4" src={servis} alt="Gambar Orang"></img>
            </div>
            <div className="col-md-6">
                <p className="serviceText offset-md-3">
                    Best Car Rental for any kind of trip in (Lokasimu)!</p>
                <p className="text2 offset-md-3">
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang 
                    lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, 
                    wedding, meeting, dll.
                </p>
                <ul className="listSewa offset-md-3">
                    <li className="correctList">Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                    <li className="correctList">Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                    <li className="correctList">Sewa Mobil Jangka Panjang Bulanan</li>
                    <li className="correctList">Gratis Antar - Jemput Mobil di Bandara</li>
                    <li className="correctList">Layanan Airport Transfer / Drop In Out</li>
                </ul>  
            </div>
        </div>
    )
}

export default OurServices;