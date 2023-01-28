import React from "react";
import '../style.css';

function WhyUs () {
    return (
        <div>
            <div className="row">
                <p className="whyText mt-5">Why Us?</p>
                <p className="text3">Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className="row">
                <div className="col-md-3 ">
                    <div className="card mb-3 w-75">
                        <div className="card-body">
                            <h5 className="card-title">Mobil Lengkap</h5>
                            <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-3 w-75">
                        <div className="card-body">
                            <h5 className="card-title">Harga Murah</h5>
                            <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-3 w-75">
                        <div className="card-body">
                            <h5 className="card-title">Layanan 24 Jam</h5>
                            <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-3 w-75">
                        <div className="card-body">
                            <h5 className="card-title">Sopir Profesional</h5>
                            <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;