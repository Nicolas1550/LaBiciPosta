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
  const [hasMounted, setHasMounted] = useState(false); // Estado para controlar si el componente está montado

  useEffect(() => {
    setHasMounted(true); // Marca el componente como montado
  }, []);

  if (!hasMounted) {
    return null; // Evita renderizar hasta que esté montado
  }

  return (
    <>
      <Header />
      <ProductDivider />
      <HotShowers />
      <RepairService />
      <StairSection />
      <InfoSection />
    </>
  );
}
