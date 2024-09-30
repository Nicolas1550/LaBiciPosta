import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaShower, FaBed, FaSpa } from "react-icons/fa";

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
  background-image: url("images/shower.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Esto habilita el efecto parallax */
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
    background: rgba(0, 0, 0, 0.5); /* Oscurece la imagen de fondo para mayor contraste */
    z-index: 0;
  }

  @media (max-width: 768px) {
    background-attachment: scroll; /* Desactivamos el parallax en móviles */
    height: 70vh; /* Reducimos la altura en pantallas pequeñas */
  }
`;

// Contenido Hero
export const HeroContent = styled.div`
  z-index: 1;
  padding: 40px;
  border-radius: 10px;
  max-width: 700px;
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
    max-width: 100%; /* Asegura que el contenido ocupe el ancho completo */
  }
`;

// Título principal
export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Ajustamos el tamaño de la fuente en pantallas pequeñas */
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

// Botón de llamada a la acción (reservar)
export const CallToAction = styled.a`
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
    transform: scale(1.1); /* Agrandar levemente al pasar el mouse */
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

  ${CallToAction}:hover & {
    transform: rotate(20deg); /* Efecto rotación */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Ajustamos el tamaño del ícono en pantallas pequeñas */
  }
`;

// Sección de características de las duchas calientes
export const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 80px 20px;
  background-color: #f0f0f0;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.05); /* Sombra interna */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 10px; /* Reducimos el padding en pantallas pequeñas */
  }
`;

// Ítem de característica
export const FeatureItem = styled.div`
  text-align: center;
  max-width: 300px;
  animation: fadeInUp 0.8s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px; /* Añadimos un margen para mejor separación en dispositivos pequeños */

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
    max-width: 90%; /* Asegura que ocupe el 90% del ancho en pantallas pequeñas */
  }
`;

// Ícono de la característica (duchas, bolsas de dormir, etc.)
export const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Reducimos el tamaño del ícono en pantallas pequeñas */
  }
`;

// Título de la característica
export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem; /* Ajustamos el tamaño de la fuente en pantallas pequeñas */
  }
`;

// Ícono de la ducha
export const ShowerIcon = styled(FaShower)`
  color: #007bff;
`;

// Ícono de las bolsas de dormir
export const SleepingBagIcon = styled(FaBed)`
  color: #ffa500;
`;

// Ícono de la zona de relajación
export const RelaxIcon = styled(FaSpa)`
  color: #00b894;
`;
