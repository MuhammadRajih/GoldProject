import React,{useState , useEffect} from "react";
import '../style.css'; 
import user from '../images/users.png';
import { useParams } from "react-router-dom";

function Detail() {
    const params = useParams();
    const [mobil, setMobil] = useState({});

    useEffect(() => {
        async function getCarDetail() {
          const request = await fetch(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${params.id}` , {
            headers:{
              access_token :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTU4MTU1MX0.GRQEliNAj91ehPs7Q8KmxY7w8je8BGElrucZEdlRL50"
            }
          })
          const response = await request.json();
          setMobil(response);
          }
          getCarDetail();
    },[mobil])

    return (
        <div className="row cardDetail">
            <div className="col-md-7">
                <div className="card mb-3">
                    <div className="card-body detailCard">
                        <div className="d-grid">
                            <h6 className="card-title textDetail">Tentang Paket</h6>
                            <p className="card-text textDetail">Include</p>
                            <ul className="listDetail">
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                            </ul>  
                            <p className="card-text textDetail" style={{fontSize:"14px"}}>Exclude</p>
                            <ul className="listDetail">
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                            </ul>  
                            <p className="card-text textDetail">Refund, Reschedule, Overtime</p>
                            <ul className="listDetail">
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-body detailCard1">
                        <img src={mobil.image} alt="ikon" className="gambarHasil"></img>
                        <div className="card-text">
                            <h6 className="row card-title textDetail mt-2">{mobil.name}</h6>
                            <div className="d-flex align-items-center">
                                <img src={user} style={{width:"13px", height:"13px"}}></img>
                                <p style={{fontWeight:"normal", paddingLeft:"10px", marginTop:"1px"}}>4-7 Orang</p>
                            </div>
                            <div className="grid">
                                <p className="card-text mt-2">Total</p>
                                <p className="card-text ">Rp. {mobil.price} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;