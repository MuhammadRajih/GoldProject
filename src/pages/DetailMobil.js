import React from "react";
import Navigasi from "../components/Navigasi";
import Search from "../components/SearchDetail";
import Detail from "../components/Detail";
import Footer from "../components/Footer";


function DetailMobil() {
    return (
      <div>
        <Navigasi />
        <Search />
        <Detail />
        <Footer />
      </ div>
    )
}

export default DetailMobil;