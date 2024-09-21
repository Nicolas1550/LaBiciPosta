"use client";

import React, { useState, useEffect } from "react";
import AboutUs from "../components/aboutUs/AboutUs";

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
      <AboutUs />
    </>
  );
}
