import styled from 'styled-components';

export const ParentContainer = styled.section`
  width: 100%;
  height: 500px; /* Altura personalizada */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    height: auto; /* Permitir que la altura se ajuste automáticamente en pantallas pequeñas */
    padding: 20px 10px; /* Añadir padding para pantallas pequeñas */
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
  }
`;

export const StairTextContainer = styled.div`
  z-index: 2; /* Aseguramos que esté encima del carrusel */
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8); /* Fondo semitransparente */
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); /* Sombra */
  backdrop-filter: blur(10px); /* Efecto de desenfoque en el fondo */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1rem;
  }
`;

export const StairTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const StairDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

export const CarouselBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.4); /* Oscurecemos el carrusel */
    opacity: 0.7; /* Opacamos el carrusel */
    transition: all 0.3s ease;

    &:hover {
      filter: brightness(0.5);
    }

    @media (max-width: 768px) {
      filter: brightness(0.5); /* Ajuste de brillo para pantallas pequeñas */
    }
  }
`;
