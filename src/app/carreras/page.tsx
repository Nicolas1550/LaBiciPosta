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
    { name: 'Proximamente', location: '', date: '' },
    { name: 'Proximamente', location: '', date: '' },
    { name: 'Proximamente', location: '', date: '' },

];

const whatsappLink = "https://wa.me/5492964502103?text=¡Hola!%20Estoy%20interesado%20en%20inscribirme%20en%20las%20carreras";

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
      
      <MotivationalText>¿O TE LA VAS A PERDER?</MotivationalText>
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
