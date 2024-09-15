"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import InfoSection from "./components/infoSection/InfoSection";
import Navbar from "./components/navbar/Navbar";
import StairSection from "./components/stairSection/StairSection";
import Footer from "./components/footer/Footer";
import RepairService from "./components/repairService/RepairService";
import HotShowers from "./components/hotShowers/HotShowers";
import ProductDivider from "./components/productDivider/ProductDivider";

export default function Home() {
  const [key, setKey] = useState(0); // Creamos un estado 'key' para forzar re-render

  useEffect(() => {
    const handlePageError = () => {
      // Aquí puedes detectar si la página se rompe o hay un error
      console.log("Forzando re-render debido a un error...");
      setKey((prevKey) => prevKey + 1); // Incrementa la 'key' para forzar re-render
    };

    // Escucha de errores o condiciones que indiquen que algo está mal
    window.addEventListener("error", handlePageError);

    // Cleanup: eliminamos el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("error", handlePageError);
    };
  }, []);

  return (
    <>
      <div key={key}>
        <Navbar />
        <Header />
        <ProductDivider/>
        <HotShowers/>
        <RepairService/>
        <StairSection/>
        <InfoSection />
        <Footer/>
      </div>
    </>
  );
}
