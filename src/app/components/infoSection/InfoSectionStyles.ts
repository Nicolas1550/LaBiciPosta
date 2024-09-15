import styled from 'styled-components';
import { motion } from 'framer-motion';

export const InfoSectionContainer = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #ffffff, #f0f0f0); /* Degradado suave */
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #333;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

export const InfoTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;

  span {
    color: #ff4e50; /* Rojo de la marca */
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
  }
`;

export const InfoCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1); /* Sombra más profunda */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px); /* Más elevación en hover */
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const InfoIcon = styled.div`
  font-size: 4rem;
  color: #4caf50;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const InfoButton = styled(motion.button)`
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 2rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #ff4e50; /* Rojo en hover */
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

export const UpcomingRacesContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  text-align: left;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const RaceItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  font-size: 1.2rem;
  color: #333;

  &:last-child {
    border-bottom: none;
  }
`;

export const RaceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const RaceLocation = styled.p`
  font-size: 1.1rem;
  color: #777;
`;

export const RaceDate = styled.p`
  font-size: 1.1rem;
  color: #4caf50;
`;
