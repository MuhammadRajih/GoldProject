import React from "react";
import Navigasi from "../components/Navigasi";
import Search from "../components/HasilSearch";
import HasilCard from "../components/HasilCard";
import Footer from "../components/Footer";


function HasilPencarian() {
    return (
      <div>
        <Navigasi />
        <div style={{height:"200px"}}></div>
        <Search />
        <HasilCard />
        <Footer />
      </ div>
    )
}

export default HasilPencarian;