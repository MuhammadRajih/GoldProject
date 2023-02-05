import React,{useState , useEffect} from "react";
import '../style.css'; 
import { Link } from 'react-router-dom';


function HasilCard() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function getCarData() {
          const request = await fetch("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car" , {
            headers:{
              access_token :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTQ5NDkwMn0.RCf4vu1U9W7quiyXSkiDIE4WNnhT1WXGrVw-3KnYkPc"
            }
          })
          const response = await request.json();
          setCars(response.cars);
          }
          getCarData();
    },[])
      
    return (
        <>
        <div className="grid-container">
            {(cars.length > 0 ) && cars.map((item) => (
                <div key={item.id}>
                    <div className="hasil">
                        <div className="card hasilCard">
                            <div className="card-body ">
                                <img src={item.image} alt="ikon" className="gambarHasil"></img>
                                <h6 className="textHasil mt-2">{item.name}</h6>
                                <p className="card-text">Rp.{item.price} / hari</p>
                                <p className="card-text" style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <Link to={`/DetailMobil/${item.id}`} className="buttonHasilCard btn-block btn btn-success mt-3">
                                    <p className="d-flex justify-content-center mt-1">Pilih Mobil</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
        </div>
        </>
    )
}

 export default HasilCard;