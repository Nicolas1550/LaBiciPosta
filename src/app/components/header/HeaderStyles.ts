import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80vh; /* Aumentamos la altura para que ocupe toda la pantalla */
  background-image: url('/images/header.webp'); /* Imagen de fondo */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden; /* Para evitar que se salgan elementos fuera del contenedor */
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); /* Oscurece la imagen de fondo para mayor contraste */
    z-index: 0;
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 1; /* Asegura que el contenido esté sobre las partículas y la imagen de fondo */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem; /* Espaciado entre elementos */
`;

export const WelcomeText = styled.h1`
  font-size: 4rem; /* Tamaño mayor para mayor impacto */
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif; /* Tipografía moderna */
  
  @media (max-width: 768px) {
    font-size: 2.5rem; /* Ajuste para pantallas pequeñas */
  }
`;

export const SubText = styled.p`
  font-size: 1.8rem;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Highlight = styled.span`
  color: #ff4e50; /* Rojo destacado */
`;

export const CtaButton = styled(motion.a)`
  background-color: #4caf50; /* Verde de la marca */
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #ff4e50; /* Rojo en hover */
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;
