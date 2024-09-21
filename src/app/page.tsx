"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import InfoSection from "./components/infoSection/InfoSection";
import StairSection from "./components/stairSection/StairSection";
import RepairService from "./components/repairService/RepairService";
import HotShowers from "./components/hotShowers/HotShowers";
import ProductDivider from "./components/productDivider/ProductDivider";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false); 

  useEffect(() => {
    setHasMounted(true); 
  }, []);

  if (!hasMounted) {
    return null; 
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
