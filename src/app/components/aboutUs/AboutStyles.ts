import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

// Contenedor principal de la página de "Nosotros"
export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #f0f4f8;
  color: #333;
  min-height: 100vh;
`;

// Sección Hero con efecto parallax
export const HeroSection = styled.section`
  width: 100%;
  height: 70vh;
  background-image: url("/images/aboutUS.webp"); /* Asegúrate de tener una imagen adecuada */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Efecto parallax */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  overflow: hidden;
  margin-bottom: 150px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Oscurecemos la imagen para mejorar la legibilidad del texto */
    z-index: 0;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1; /* El texto se muestra sobre el overlay oscuro */
  max-width: 800px;
  color: white;
  padding: 20px;
  animation: fadeInUp 1.5s ease-out;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: #ff4e50;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1.2s ease;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #ddd;
  animation: fadeInUp 1.5s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

// Sección de información
export const InfoSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 60px 20px;
  max-width: 1200px;
  width: 100%;
  margin-top: -100px; /* Posiciona esta sección para que se superponga un poco con el Hero */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const InfoCard = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const InfoIcon = styled.div`
  font-size: 4rem;
  color: #25d366;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(360deg);
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
  color: #555;
  line-height: 1.6;
`;

// Botón de llamada a la acción
export const CallToAction = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #25d366;
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
