import React from "react"
import '../style.css'; 



function Carousel () {
    return (
        <div className="row justify-content-md-center">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" style={{backgroundColor: "#0D28A6"}}></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" style={{backgroundColor: "#0D28A6"}}></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{backgroundColor: "#0D28A6"}}></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card mb-3" style={{height: "150px", width: "550px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Sopir Profesional</h5>
                                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item"> 
                        <div className="card mb-3" style={{height: "150px", width: "550px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Sopir Profesional</h5>
                                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card mb-3" style={{height: "150px", width: "550px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Sopir Profesional</h5>
                                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Carousel;