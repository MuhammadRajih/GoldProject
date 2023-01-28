import React from "react";
import headerCar from '../images/headerCar.png';
import '../style.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header () {
    return (
        <div className="row" style={{backgroundColor: "#cfd4ed"}}>
            <div className="col-md-5">
                <div>
                    <p className="headerText offset-md-1">
                        Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</p>
                </div>
                <div>
                    <p className="text1 offset-md-1">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <button type="button" className="butSewa btn btn-success offset-md-1">
                    <p className="textSewa">Mulai Sewa Mobil</p>
                </button>
            </div>
            <div className="col-md-6">
                <img className="fotoMobil" src={headerCar} alt="Gambar Mobil"></img>
            </div>
        </div>
        // <Container style={{backgroundColor: "#cfd4ed"}}>
        //     <Row>
        //         <Col>
        //             <p className="font-weight-bold text-left justify-content-md-left" style={{fontSize: "2.5em;"}}>
        //             Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</p>
        //         </Col>
        //         <Col>
        //         <p className="font-weight-bold text-left" style={{fontSize: "2.5em;"}}>
        //             Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</p>
        //         </Col>
        //     </Row>
        // </Container>
    )
}

export default Header;