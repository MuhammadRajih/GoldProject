import React from "react"
import '../style.css'; 
import photo from '../images/img_photo.png';
import photo1 from '../images/img_photo1.png';
import rate from '../images/Rate.png';


function Slider() {
  return (
    <div className="sliderSection" id="testimonial">
      <h2 style={{fontSize: "24px"}}>Testimonial</h2>
      <p style={{fontSize: "14px",fontWeight:"bold"}}>Berbagai review positif dari para pelanggan kami</p>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner" style={{ textAlign:"center"}}>
          <div className="carousel-item active" >
            <div className="cardCarousel align-items-center gap-4">
              <div>
                <img src={photo1} className="d-block" alt="gambar"/>
              </div>
              <div className="card-body">
                  <img src={rate} className="card-title"></img>
                  <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. </p>
                  <p className="blockquote-footer">Barbara 29, Berlin</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cardCarousel align-items-center gap-4">
              <div className="">
                <img src={photo} className="d-block" alt="gambar"/>
              </div>
              <div className="card-body">
                  <img src={rate} className="card-title"></img>
                  <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                  <p className="blockquote-footer">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cardCarousel align-items-center gap-4">
              <div>
                <img src={photo1} className="d-block" alt="gambar"/>
              </div>
              <div className="card-body">
                  <img src={rate} className="card-title"></img>
                  <p className="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word 
                    in classical literature, discovered the undoubtable source.
                  </p>
                  <p className="blockquote-footer">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sliderButton mt-3">
          <button className="butNext carousel-control-prev-icon" data-bs-target="#carouselExampleControls" data-bs-slide="prev"></button>
          <button className="butPrev carousel-control-next-icon" data-bs-target="#carouselExampleControls" data-bs-slide="next"></button>
        </div>
      </div>
    </div>
  )
}

export default Slider;