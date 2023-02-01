import React from "react"
import '../style.css'; 
import Carousel from 'react-bootstrap/Carousel';
import headerCar from '../images/headerCar.png';
import photo from '../images/img_photo.png';
import photo1 from '../images/img_photo1.png';
import rate from '../images/Rate.png';


// function Slider () {
//     return (
//         <div className="row justify-content-md-center">
//             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
//                 <ol className="carousel-indicators">
//                     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" style={{backgroundColor: "#0D28A6"}}></li>
//                     <li data-target="#carouselExampleIndicators" data-slide-to="1" style={{backgroundColor: "#0D28A6"}}></li>
//                     <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{backgroundColor: "#0D28A6"}}></li>
//                 </ol>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
                        // <div className="card mb-3" style={{height: "150px", width: "550px"}}>
                        //     <div className="card-body">
                        //         <h5 className="card-title">Sopir Profesional</h5>
                        //         <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        //     </div>
                        // </div>
//                     </div>
//                     <div className="carousel-item"> 
//                         <div className="card mb-3" style={{height: "150px", width: "550px"}}>
//                             <div className="card-body">
//                                 <h5 className="card-title">Sopir Profesional</h5>
//                                 <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <div className="card mb-3" style={{height: "150px", width: "550px"}}>
//                             <div className="card-body">
//                                 <h5 className="card-title">Sopir Profesional</h5>
//                                 <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//          </div>
//     )
// }

// export default Slider;

function Slider() {
  return (
    <div>
      <h2 style={{fontSize: "24px"}}>Testimonial</h2>
      <p style={{fontSize: "14px",fontWeight:"bold"}}>Berbagai review positif dari para pelanggan kami</p>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" >
        <div class="carousel-inner" style={{paddingLeft: "350px", textAlign:"center"}}>
          <div class="carousel-item active " >
            <div className="card mb-3 d-flex flex-row align-items-center" style={{height: "270px", width: "619px", backgroundColor:"#F1F3FF",padding:"0px 50px"}}>
              <div className="">
                <img src={photo1} class="d-block" alt="gambar"/>
              </div>
              <div className="card-body">
                  <img src={rate} className="card-title"></img>
                  <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. </p>
                  <p className="blockquote-footer">Barbara 29, Berlin</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="card mb-3 d-flex flex-row align-items-center" style={{height: "270px", width: "619px", backgroundColor:"#F1F3FF",padding:"0px 50px"}}>
              <div className="">
                <img src={photo} class="d-block" alt="gambar"/>
              </div>
              <div className="card-body">
                  <img src={rate} className="card-title"></img>
                  <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                  <p className="blockquote-footer">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="card mb-3 d-flex flex-row align-items-center" style={{height: "270px", width: "619px", backgroundColor:"#F1F3FF",padding:"0px 50px"}}>
              <div className="">
                <img src={photo1} class="d-block" alt="gambar"/>
              </div>
              <div className="card-body">
                  <img src={rate} className="card-title"></img>
                  <p className="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                   more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word 
                   in classical literature, discovered the undoubtable source.</p>
                  <p className="blockquote-footer">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sliderButton">
          <button className="butNext carousel-control-prev-icon" data-bs-target="#carouselExampleControls" data-bs-slide="prev"></button>
          <button className="butPrev carousel-control-next-icon" data-bs-target="#carouselExampleControls" data-bs-slide="next"></button>
        </div>
      </div>
    </div>
  )
}

export default Slider;