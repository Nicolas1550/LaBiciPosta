"use client";

import React, { useState, useEffect } from "react";
import { FaTools, FaBicycle, FaHandshake, FaWhatsapp } from "react-icons/fa";
import {
  ContactButton,
  RepairCard,
  RepairContainer,
  RepairDescription,
  RepairGrid,
  RepairIcon,
  RepairText,
  RepairTitle,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  HeroOverlay,
} from "../components/stylesPages/RepairPageStyles";

const RepairPage: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false); // Para controlar el montaje
  const [stylesLoaded, setStylesLoaded] = useState(false); // Para controlar la carga de los estilos

  useEffect(() => {
    // Controla el montaje del componente
    setHasMounted(true);

    // Comprobamos si los estilos están cargados
    if (document.readyState === "complete") {
      setStylesLoaded(true);
    } else {
      // Verificamos si se completa la carga del documento
      const handleLoad = () => setStylesLoaded(true);
      window.addEventListener("load", handleLoad);

      return () => window.removeEventListener("load", handleLoad); // Limpieza del evento
    }
  }, []);

  // Evita renderizar hasta que el componente esté montado y los estilos cargados
  if (!hasMounted || !stylesLoaded) {
    return null;
  }

  const whatsappLink =
    "https://wa.me/5492964502103?text=¡Hola!%20Me%20interesa%20el%20servicio%20de%20reparación%20de%20bicicletas.";

  return (
    <>
      {/* Sección Hero con imagen de fondo */}
      <HeroSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroOverlay />
        <HeroTitle
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Reparación Profesional
        </HeroTitle>
        <HeroSubtitle
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          ¡Deja que los expertos cuiden tu bicicleta!
        </HeroSubtitle>
      </HeroSection>

      <RepairContainer>
        <RepairTitle>
          Servicio de <span>Reparación de Bicicletas</span>
        </RepairTitle>
        <RepairDescription>
          Nuestro equipo de expertos está listo para devolver tu bicicleta a su
          mejor estado. ¡No esperes más, agenda tu reparación hoy mismo!
        </RepairDescription>

        <RepairGrid>
          <RepairCard>
            <RepairIcon>
              <FaTools size={60} />
            </RepairIcon>
            <RepairText>
              Reparaciones mecánicas: ajuste de frenos, cambio de cadena,
              mantenimiento completo.
            </RepairText>
          </RepairCard>
          <RepairCard>
            <RepairIcon>
              <FaBicycle size={60} />
            </RepairIcon>
            <RepairText>
              Servicio de alineación y balanceo de ruedas para asegurar un andar
              suave.
            </RepairText>
          </RepairCard>
          <RepairCard>
            <RepairIcon>
              <FaHandshake size={60} />
            </RepairIcon>
            <RepairText>
              Atención personalizada y asesoramiento experto para mejorar el
              rendimiento de tu bicicleta.
            </RepairText>
          </RepairCard>
        </RepairGrid>

        <ContactButton
          href={whatsappLink}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp size={24} /> Contactar por WhatsApp
        </ContactButton>
      </RepairContainer>
    </>
  );
};

export default RepairPage;
