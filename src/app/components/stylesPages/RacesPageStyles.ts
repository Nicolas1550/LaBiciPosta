import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RacesContainer = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const RacesTitle = styled.h2`
  font-size: 3rem;
  color: #333;
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;

  span {
    color: #ff4e50;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const RacesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const RaceCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra horizontalmente el contenido */
  justify-content: center; /* Centra verticalmente el contenido */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-bottom: 1rem;
    align-self: center; /* Asegura que el ícono esté centrado */
  }
`;


export const RaceInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #777;
  }
`;

export const RaceDate = styled.p`
  font-size: 1.1rem;
  color: #4caf50;
  margin-top: 0.5rem;
`;

export const RaceLocation = styled.p`
  font-size: 1.1rem;
  color: #777;
`;

export const MotivationalText = styled.h3`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #ff4e50;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const WhatsappButton = styled(motion.a)`
  margin-top: 2rem;
  background-color: #25D366;
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
    background-color: #128C7E;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;
