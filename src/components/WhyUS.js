import React from "react";
import '../style.css';
import Like from '../images/like.png';
import Tag from '../images/priceTag.png';
import Time from '../images/time.png';
import Reward from '../images/reward.png';

function WhyUs() {
    return (
        <div id="whyUs">
            <div className="row whyRow">
                <p className="whyText mt-5">Why Us?</p>
                <p className="text3">Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className="row whyCard">
                <div className="col-md-3">
                    <div className="card mb-3 w-80">
                        <div className="card-body">
                            <img src={Like} alt="ikon"></img>
                            <h5 className="card-title mt-3">Mobil Lengkap</h5>
                            <p className="card-text mt-3">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-3 w-80">
                        <div className="card-body">
                            <img src={Tag} alt="ikon"></img>
                            <h5 className="card-title mt-3">Harga Murah</h5>
                            <p className="card-text mt-3">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-3 w-80">
                        <div className="card-body">
                            <img src={Time} alt="ikon"></img>
                            <h5 className="card-title mt-3">Layanan 24 Jam</h5>
                            <p className="card-text mt-3">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-3 w-80">
                        <div className="card-body">
                            <img src={Reward} alt="ikon"></img>
                            <h5 className="card-title mt-3">Sopir Profesional</h5>
                            <p className="card-text mt-3">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;