import styled, { keyframes } from 'styled-components';

// Animación de desvanecimiento y desplazamiento para hacer que los elementos entren suavemente
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Contenedor principal de la galería con fondo en gradiente y animación sutil en el fondo
export const GaleriaContainer = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #1c1c1c 30%, #2a2a2a 100%);
  color: #f5f5f5;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  animation: ${fadeInUp} 1s ease-out;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 10%, transparent 70%);
    z-index: 0;
    pointer-events: none;  // Esto previene la interacción con el efecto de fondo
    animation: fadeIn 2s ease-out forwards;
  }
`;

// Título de la página con sombra suave y animación
export const Title = styled.h1`
  font-size: 3rem; // Aumentamos el tamaño
  font-weight: bold;
  color: #f5f5f5;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); // Sombra más pronunciada
  z-index: 1;  // Aseguramos que el texto esté por encima del fondo

  animation: ${fadeInUp} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 2.2rem; // Reducimos para móviles
    text-align: center; // Centrar en pantallas pequeñas
  }

  @media (max-width: 480px) {
    font-size: 2rem; // Ajuste adicional en pantallas muy pequeñas
  }
`;

// Descripción introductoria con opacidad y animación en hover
export const Description = styled.p`
  font-size: 1.3rem;
  color: #e0e0e0;
  text-align: center;
  max-width: 800px;
  margin-bottom: 40px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 1;
  animation: ${fadeInUp} 1.6s ease-out;

  &:hover {
    opacity: 0.9;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
    padding: 0 10px; // Añadimos padding para evitar que el texto toque los bordes
  }

  @media (max-width: 480px) {
    font-size: 1rem; // Texto más pequeño en pantallas pequeñas
  }
`;

// Contenedor del carrusel con sombra 3D y más interacción en hover
export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin-bottom: 50px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); // Sombra más profunda para mayor realismo

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;

    img {
      border-radius: 20px;
      width: 85%;
      height: auto;
      object-fit: cover;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }

    &:hover img {
      transform: scale(1.1);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    }
  }

  .swiper-pagination {
    position: relative;
    margin-top: 20px;
    z-index: 1;
  }

  @media (max-width: 768px) {
    max-width: 100%; // Ocupa todo el ancho en pantallas pequeñas
    img {
      width: 90%; // Ajustamos el tamaño de la imagen
    }
  }

  @media (max-width: 480px) {
    img {
      width: 95%; // Aún más pequeño en pantallas pequeñas
    }
  }
`;

// Descripción de cada imagen dentro del carrusel con sombras y transiciones
export const ImageDescription = styled.p`
  font-size: 1.2rem;
  color: #f5f5f5;
  margin-top: 25px;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6); // Sombra más pronunciada para mayor visibilidad
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1rem; // Ajuste adicional para pantallas muy pequeñas
  }
`;

// Sección de información debajo del carrusel con animaciones sutiles
export const InfoSection = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 50px;
  z-index: 1;

  p {
    font-size: 1.4rem;
    color: #cfcfcf;
    margin-bottom: 20px;
    transition: opacity 0.3s ease, transform 0.3s ease;

    &:hover {
      opacity: 0.9;
      transform: translateY(-5px);
    }

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem; // Tamaño de texto más pequeño en pantallas pequeñas
    }
  }
`;

// Botón de contacto con animaciones suaves y mejoras de interactividad
export const ContactButton = styled.a`
  background-color: #25d366;
  color: white;
  padding: 15px 40px;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 50px;
  display: inline-block;
  text-decoration: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: #1ebd58;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 12px 30px; // Reducimos el tamaño del botón en pantallas pequeñas
  }

  @media (max-width: 480px) {
    font-size: 1.1rem; // Botón más pequeño en pantallas muy pequeñas
    padding: 10px 25px;
  }
`;
