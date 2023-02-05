import React, {useState} from "react";
import '../style.css'; 
import { useNavigate } from "react-router-dom";

const initialValues = {
    nama: "",
    kategori: "default",
    price: "default",
    status: false,
  };

function Search () {

    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        values.status = values.status === "true" ? true : false;
        navigate("/HasilCari", { state: { nama: values.nama, kategori: values.kategori, price: values.price, status: values.status } });
    };


    return (
        <div className="row cardSearch">
            <form onSubmit={handleSubmit}>
                <div className="card cardSearch1">
                    <div className="card-body">
                        <div className="cardSearch2">
                            <div>
                                <p className="searchText">Nama Mobil</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" name="nama" defaultValue={values.nama} onChange={handleInputChange} placeholder="Ketik nama/tipe mobil" aria-label="Username" aria-describedby="basic-addon1" style={{fontSize:"14px",textAlign:"left"}}/>
                                </div>
                            </div>
                            <div>
                                <p className="searchText">Kategori</p>
                                <select className="dropdown searchButton" name="kategori" defaultValue={values.kategori} onChange={handleInputChange}>
                                    <option value="default">
                                        Masukan Kapasitas Mobil
                                    </option>
                                    <option value="small">2 - 4 orang</option>
                                    <option value="medium">4 - 6 orang</option>
                                    <option value="large">6 - 8 orang</option>
                                </select>
                            </div>
                            <div>
                                <p className="searchText">Harga</p>
                                <select className="dropdown searchButton" name="price" defaultValue={values.price} onChange={handleInputChange}>
                                    <option value="default">
                                        Masukan Harga Sewa per Hari
                                    </option>
                                    <option value="cheap">&lt;Rp. 400.000</option>
                                    <option value="mid">Rp. 400.000 - Rp. 600.000</option>
                                    <option value="high">&gt;Rp. 600.000</option>
                                </select>
                            </div>
                            <div>
                                <p className="searchText">Status</p>
                                <select className="dropdown searchButton" name="status" defaultValue={values.status} onChange={handleInputChange}>
                                    <option value={true}>Disewa</option>
                                    <option value={false}>Tidak Tersedia</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-success" style={{height: "33px" ,width: "92px", fontSize: "14px", marginTop: "35px"}}>
                                Cari Mobil
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )   
}

export default Search;