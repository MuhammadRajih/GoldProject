import React,{useState , useEffect} from "react";
import '../style.css'; 
import user from '../images/users.png';
import { useParams } from "react-router-dom";

function Detail() {
    const params = useParams;
    const [mobil, setMobil] = useState({});

    useEffect(() => {
        async function getCarDetail() {
          const request = await fetch(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${params.id}` , {
            headers:{
              access_token :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTUwMzA3Mn0.jhsDFpe0IUn4yteyApCcE0MNrW_Wp5eOnV8Hml5YX3c"
            }
          })
          const response = await request.json();
          setMobil(response);
          }
          getCarDetail();
    },[params])

    console.log(params); 

    return (
        <div className="row cardDetail" >
            <div className="col-md-7">
                <div className="card mb-3 ">
                    <div className="card-body detailCard">
                        <div className="d-grid">
                            <h6 className="card-title textDetail">Tentang Paket</h6>
                            <p className="card-text textDetail">Include</p>
                            <ul className="listDetail">
                                <li className="">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li className="">Sudah termasuk bensin selama 12 jam</li>
                                <li className="">Sudah termasuk Tiket Wisata</li>
                                <li className="">Sudah termasuk pajak</li>
                            </ul>  
                            <p className="card-text textDetail" style={{fontSize:"14px"}}>Exclude</p>
                            <ul className="listDetail">
                                <li className="">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li className="">Sudah termasuk bensin selama 12 jam</li>
                                <li className="">Sudah termasuk Tiket Wisata</li>
                            </ul>  
                            <p className="card-text textDetail">Refund, Reschedule, Overtime</p>
                            <ul className="listDetail">
                                <li className="">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li className="">Sudah termasuk bensin selama 12 jam</li>
                                <li className="">Sudah termasuk Tiket Wisata</li>
                                <li className="">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li className="">Sudah termasuk bensin selama 12 jam</li>
                                <li className="">Sudah termasuk Tiket Wisata</li>
                                <li className="">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li className="">Sudah termasuk bensin selama 12 jam</li>
                                <li className="">Sudah termasuk Tiket Wisata</li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                {/* {(mobil.length > 0 ) && mobil.map((item) => ( */}
                <div className="card">
                    {/* <div key={item.id}> */}
                        <div className="card-body detailCard1">
                            <img src={mobil.image} alt="ikon" className="gambarHasil"></img>
                            <div className="card-text">
                                <h6 className="row card-title textDetail">{mobil.name}</h6>
                                <div className="d-flex align-items-center">
                                    <img src={user} style={{width:"13px", height:"13px"}}></img>
                                    <p style={{fontWeight:"normal", paddingLeft:"10px"}}>4-7 Orang</p>
                                </div>
                                <div className="row">
                                    <p className="card-text col-md-6 mt-5">Total</p>
                                    <p className="card-text col-md-6 mt-5" style={{paddingLeft:"120px"}}>Rp. {mobil.price} </p>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
                {/* ))} */}
            </div>
        </div>
    )
}

export default Detail;