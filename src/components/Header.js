import React from "react";

const Header = () => {
    return (
        <div class="row" style="background-color: #cfd4ed;">
            <div class="sewa col-md-5 mt-5 ml-5">
                <div>
                    <p class="font-weight-bold text-left mt-5 offset-md-1" style="font-size: 2.5em;">
                        Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</p>
                </div>
                <div>
                    <p class="font-weight-bold text-left text-left offset-md-1">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <button type="button" class="btn btn-success offset-md-1">Mulai Sewa Mobil</button>
            </div>
            <div class="col-md-6 mt-5 ml-4">
                <img class="card-img-top mt-5 offset-md-1" src="ioniq.jpg" alt="Gambar Mobil"></img>
            </div>
        </div>
    )
}

export default Header;