import React from "react";
import Navigasi from "../components/Navigasi";
import Header from "../components/Header";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUS";
import Slider from "../components/Slider";
import CardSewa from "../components/CardSewa";
import Faq from "../components/FAQ";
import Footer from "../components/Footer";


const Main = () => {
    return (
      <div>
        <Navigasi />
        <Header />
        <OurServices />
        <WhyUs />
        <Slider />
        <CardSewa />
        <Faq />
        <Footer />
      </ div>
    )
}

export default Main;