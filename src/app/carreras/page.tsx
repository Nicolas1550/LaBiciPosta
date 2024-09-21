"use client"
import React from 'react';
import { FaFlagCheckered, FaWhatsapp } from 'react-icons/fa';
import {
  RaceCard,
  RaceDate,
  RaceInfo,
  RaceLocation,
  RacesContainer,
  RacesGrid,
  RacesTitle,
  WhatsappButton,
  MotivationalText
} from '../components/stylesPages/RacesPageStyles';

const races = [
  { name: 'Carrera en Montaña', location: 'Andes', date: '02/02/2024' },
  { name: 'Ciclismo Urbano', location: 'Buenos Aires', date: '15/03/2024' },
  { name: 'Ruta Extrema', location: 'Córdoba', date: '10/04/2024' },
  { name: 'Gran Fondo', location: 'Mendoza', date: '20/05/2024' },
  { name: 'Desafío Pampa', location: 'La Pampa', date: '10/06/2024' },
];

const whatsappLink = "https://wa.me/123456789?text=¡Hola!%20Estoy%20interesado%20en%20inscribirme%20en%20las%20carreras";

const RacesPage: React.FC = () => {
  return (
    <RacesContainer>
      <RacesTitle>
        Próximas <span>Carreras</span>
      </RacesTitle>
      <RacesGrid>
        {races.map((race, index) => (
          <RaceCard key={index}>
            <FaFlagCheckered size={40} color="#ff4e50" />
            <RaceInfo>
              <h3>{race.name}</h3>
              <RaceLocation>{race.location}</RaceLocation>
              <RaceDate>{race.date}</RaceDate>
            </RaceInfo>
          </RaceCard>
        ))}
      </RacesGrid>
      
      <MotivationalText>¿Te lo vas a perder?</MotivationalText>
      <WhatsappButton
        href={whatsappLink}
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={24} /> Contactar por WhatsApp
      </WhatsappButton>
    </RacesContainer>
  );
};

export default RacesPage;
