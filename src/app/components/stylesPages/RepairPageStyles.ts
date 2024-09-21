import styled from "styled-components";
import { motion } from "framer-motion";

/* Estilos para la sección hero con imagen de fondo */

/* Overlay para oscurecer la imagen de fondo y hacer el texto más visible */
export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    0,
    0,
    0,
    0.5
  ); /* Semi-transparente para oscurecer la imagen */
  z-index: 1; /* Para que el overlay esté encima de la imagen pero debajo del texto */
`;

/* Estilos para la página de reparación */
export const RepairContainer = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background-color: #f0f4f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const RepairTitle = styled.h2`
  font-size: 3rem;
  color: #333;
  margin-bottom: 2rem;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;

  span {
    color: #ff4e50;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const RepairDescription = styled.p`
  font-size: 1.5rem;
  color: #555;
  max-width: 800px;
  margin-bottom: 3rem;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const RepairCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const RepairIcon = styled.div`
  font-size: 6rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

export const RepairText = styled.p`
  font-size: 1.2rem;
  color: #777;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContactButton = styled(motion.a)`
  margin-top: 3rem;
  background-color: #25d366;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128c7e;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

export const HeroSection = styled(motion.section)`
  width: 100%;
  height: 60vh;
  background-image: url('/images/repair.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Esto crea el efecto parallax */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

// Añadimos animación para que el texto del Hero aparezca con efecto fade
export const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  z-index: 2;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  z-index: 2;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const RepairGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
