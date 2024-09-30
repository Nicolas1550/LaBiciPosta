import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

// Contenedor principal
export const MainContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

// Sección Hero con efecto parallax
export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("images/swiper3.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Efecto parallax */
  height: 100vh;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Oscurecer la imagen para mejorar el contraste del texto */
  }

  @media (max-width: 768px) {
    background-attachment: scroll; /* Desactivamos el efecto parallax en pantallas pequeñas */
    height: 70vh; /* Ajustamos la altura para pantallas pequeñas */
  }
`;

// Contenido Hero
export const HeroContent = styled.div`
  z-index: 1;
  padding: 40px;
  border-radius: 10px;
  max-width: 600px;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 90%;
  }
`;

// Título principal
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

// Subtítulo
export const Subtitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 40px;
  color: #ddd;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

// Botón de contacto (WhatsApp)
export const ContactButton = styled.a`
  background-color: #25d366;
  color: white;
  padding: 15px 30px;
  font-size: 1.5rem;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #1ebd58;
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 10px 20px;
  }
`;

// Ícono de WhatsApp dentro del botón
export const WhatsAppIcon = styled(FaWhatsapp)`
  margin-right: 10px;
  font-size: 2rem;
  transition: transform 0.3s ease;

  ${ContactButton}:hover & {
    transform: rotate(20deg);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Sección de Servicios
export const ServicesSection = styled.section`
  padding: 80px 20px;
  background-color: #f0f0f0;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

// Lista de servicios
export const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

// Ítem de servicio
export const ServiceItem = styled.li`
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.8s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 20px;
  }
`;

// Sección de estadísticas
export const StatsSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 50px 0;
  background-color: #e9e9e9;
  animation: fadeIn 1.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 30px 0;
  }
`;

// Ítem de estadísticas
export const StatItem = styled.div`
  text-align: center;
  animation: bounceIn 1s ease;

  @keyframes bounceIn {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

// Número de estadísticas
export const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Etiqueta de estadísticas
export const StatLabel = styled.div`
  font-size: 1.3rem;
  color: #666;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Sección de Información
export const InformationSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 80px 20px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

// Contenedor de texto en la sección de información
export const TextContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 40px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

// Texto de la sección de información
export const InformationText = styled.div`
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 20px;
    color: #333;
    font-weight: bold;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    h2 {
      font-size: 2rem;
    }
  }
`;

// Característica individual
export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  text-align: center;
`;

// Ícono de la característica
export const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Título de la característica
export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Contenedor del carrusel
export const CarouselBackground = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 10px;

  .slick-slide div {
    position: relative;
    width: 100%;
    height: 600px;
  }

  @media (max-width: 768px) {
    .slick-slide div {
      height: 400px;
    }
  }
`;

