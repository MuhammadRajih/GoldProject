import React from "react";
import Navigasi from "../components/Navigasi";
import Search from "../components/HasilSearch";
import Detail from "../components/Detail";
import Footer from "../components/Footer";


function DetailMobil() {
    return (
      <div>
        <Navigasi />
        <div style={{height:"200px"}}></div>
        <Search />
        <Detail />
        <Footer />
      </ div>
    )
}

export default DetailMobil;