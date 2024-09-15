import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

// Contenedor principal de la página de "Nosotros"
export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #fff;
  color: #333; /* Color de texto negro */
`;

// Sección Hero
export const HeroSection = styled.section`
  width: 100%;
  background-color: #f9f9f9;
  padding: 100px 20px;
  text-align: center;
  border-bottom: 2px solid #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 800;
  color: #ff4e50; /* Rojo de la empresa */
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* Toque moderno */
  animation: fadeIn 1.2s ease;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 3rem;
  animation: fadeIn 1.5s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

// Sección de información
export const InfoSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center; /* Para centrar los íconos */
  width: 100%;
  max-width: 1200px;
  padding: 60px 20px;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoCard = styled.div`
  background-color: #f3f3f3;
  padding: 30px;
  border-radius: 15px;
  width: 300px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const InfoIcon = styled.div`
  font-size: 4rem; /* Iconos más grandes para más presencia */
  color: #25d366; /* Verde de la empresa */
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(360deg); /* Animación de rotación al pasar el mouse */
  }
`;

export const InfoTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const InfoDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
`;

// Botón de llamada a la acción
export const CallToAction = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #25d366; /* Verde de la empresa */
  color: white;
  padding: 15px 40px;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  margin-top: 50px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #1ebd58;
    transform: scale(1.08);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
  }
`;

export const WhatsAppIcon = styled(FaWhatsapp)`
  font-size: 2rem;
  margin-right: 12px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
