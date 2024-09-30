import React, { useState } from 'react';
import {
  InfoSectionContainer,
  InfoGrid,
  InfoCard,
  InfoIcon,
  InfoTitle,
  InfoText,
  InfoButton,
  UpcomingRacesContainer,
  RaceItem,
  RaceTitle,
  RaceDate,
  RaceLocation
} from './InfoSectionStyles';
import { FaBicycle, FaMountain, FaHeartbeat } from 'react-icons/fa'; 

const InfoSection: React.FC = () => {
  const [showRaces, setShowRaces] = useState(false);

  // Proximas carreras hardcodeadas
  const upcomingRaces = [
    { name: 'Proximamente', location: '', date: '' },
    { name: 'Proximamente', location: '', date: '' },
    { name: 'Proximamente', location: '', date: '' },
  ];

  const handleToggleRaces = () => {
    setShowRaces(!showRaces);
  };

  return (
    <InfoSectionContainer>
      <InfoTitle>
        Descubre <span>La BICIPOSTA</span>
      </InfoTitle>
      <InfoGrid>
        <InfoCard>
          <InfoIcon><FaBicycle /></InfoIcon>
          <InfoText>
            Carreras para todos los niveles, desde aficionados hasta profesionales. Cada carrera es una experiencia única.
          </InfoText>
        </InfoCard>
        <InfoCard>
          <InfoIcon><FaMountain /></InfoIcon>
          <InfoText>
            Rutas en la naturaleza con impresionantes paisajes de montaña que ofrecen un desafío a tu resistencia.
          </InfoText>
        </InfoCard>
        <InfoCard>
          <InfoIcon><FaHeartbeat /></InfoIcon>
          <InfoText>
            Fomenta la salud y el bienestar a través del ciclismo mientras te unes a una comunidad vibrante y activa.
          </InfoText>
        </InfoCard>
      </InfoGrid>
      <InfoButton onClick={handleToggleRaces}>
        {showRaces ? 'Ocultar próximas carreras' : 'Ver próximas carreras'}
      </InfoButton>

      {showRaces && (
        <UpcomingRacesContainer>
          {upcomingRaces.map((race, index) => (
            <RaceItem key={index}>
              <RaceTitle>{race.name}</RaceTitle>
              <RaceLocation>{race.location}</RaceLocation>
              <RaceDate>{race.date}</RaceDate>
            </RaceItem>
          ))}
        </UpcomingRacesContainer>
      )}
    </InfoSectionContainer>
  );
};

export default InfoSection;
