import React from "react";
import {
  AboutContainer,
  HeroSection,
  HeroContent,
  Title,
  Subtitle,
  InfoSection,
  InfoCard,
  InfoIcon,
  InfoTitle,
  InfoDescription,
  CallToAction,
  WhatsAppIcon,
} from "./AboutStyles";
import { FaBicycle, FaHandsHelping, FaRegCheckCircle } from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <AboutContainer>
      {/* Sección Hero */}
      <HeroSection>
        <HeroContent>
          <Title>Conócenos</Title>
          <Subtitle>
            En La BiciPosta, combinamos pasión, dedicación y tecnología para
            brindarte servicios de calidad pensados especialmente para ciclistas.
          </Subtitle>
        </HeroContent>
      </HeroSection>

      {/* Sección de información */}
      <InfoSection>
        <InfoCard>
          <InfoIcon>
            <FaBicycle />
          </InfoIcon>
          <InfoTitle>Servicios Personalizados</InfoTitle>
          <InfoDescription>
            Desde reparaciones hasta duchas calientes, ofrecemos soluciones
            adaptadas a las necesidades de los ciclistas, brindando confort y
            eficiencia.
          </InfoDescription>
        </InfoCard>

        <InfoCard>
          <InfoIcon>
            <FaHandsHelping />
          </InfoIcon>
          <InfoTitle>Compromiso</InfoTitle>
          <InfoDescription>
            Nos dedicamos a crear una experiencia excepcional para cada cliente,
            con un enfoque en la calidad y la satisfacción.
          </InfoDescription>
        </InfoCard>

        <InfoCard>
          <InfoIcon>
            <FaRegCheckCircle />
          </InfoIcon>
          <InfoTitle>Garantía de Calidad</InfoTitle>
          <InfoDescription>
            Nuestro equipo está compuesto por profesionales que garantizan
            un servicio excelente, respaldado por años de experiencia en el
            sector.
          </InfoDescription>
        </InfoCard>
      </InfoSection>

      {/* Llamada a la acción */}
      <CallToAction href="https://wa.me/5492964541181" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        Contáctanos por WhatsApp
      </CallToAction>
    </AboutContainer>
  );
};

export default AboutUs;
