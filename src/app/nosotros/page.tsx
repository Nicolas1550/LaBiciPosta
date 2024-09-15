"use client";

import React, { useState, useEffect } from "react";
import AboutUs from "../components/aboutUs/AboutUs";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false); // Controla si el componente está montado

  useEffect(() => {
    setHasMounted(true); // Marca el componente como montado
  }, []);

  if (!hasMounted) {
    return null; // Evita renderizar hasta que esté montado
  }

  return (
    <>
      <AboutUs />
    </>
  );
}
