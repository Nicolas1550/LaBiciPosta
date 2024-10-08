import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

// Contenedor principal del divisor
export const DividerContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60px 20px;
  background-color: #f3f3f3;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  @media (min-width: 1024px) {
    padding: 80px 40px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 60px 30px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

// Contenido del divisor con texto y botón
export const DividerContent = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

// Título del divisor con estilo mejorado
export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 30px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 2.6rem;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

// Botón de llamada a la acción con animación y sombras
export const CallToAction = styled.a`
  background-color: #25d366;
  color: white;
  padding: 15px 40px;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #1ebd58;
    transform: scale(1.08);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 12px 30px;
    margin-bottom: 20px;
  }
`;

// Ícono de WhatsApp dentro del botón con efecto
export const WhatsAppIcon = styled(FaWhatsapp)`
  margin-right: 12px;
  font-size: 2rem;
  transition: transform 0.3s ease;

  ${CallToAction}:hover & {
    transform: rotate(20deg);
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

// Sección de imágenes dentro del divisor
export const DividerImages = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

// Contenedor de cada imagen con más profundidad
export const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;
  overflow: hidden;
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

// Imagen en el contenedor del divisor
export const DividerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
// Texto pequeño y sutil debajo del título
export const SubText = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: -20px; /* Ajuste para acercarlo al título */
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 15px;
  }
`;
