import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  MainContainer,
  HeroSection,
  HeroContent,
  Title,
  Subtitle,
  ContactButton,
  WhatsAppIcon,
  ServicesSection,
  ServiceList,
  ServiceItem,
  StatsSection,
  StatItem,
  StatNumber,
  StatLabel,
  Feature,
  FeatureIcon,
  FeatureTitle,
  InformationSection,
  InformationText,
  CarouselBackground,
  TextContainer,
} from "./RepairServiceStyles";

const RepairService: React.FC = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Para desactivar los botones de navegación si no los quieres
  };

  return (
    <MainContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <Title>Reparación de Bicicletas en Toranza Bike</Title>
          <Subtitle>
            Servicio rápido y profesional para que sigas rodando sin problemas.
          </Subtitle>
          <ContactButton
            href="https://wa.me/5492964502103"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Contactar por WhatsApp
          </ContactButton>
        </HeroContent>
      </HeroSection>

      {/* Why Choose Us Section with react-slick */}
      <InformationSection>
        <TextContainer>
          <InformationText>
            <h2>¿Por Qué Elegirnos?</h2>
            <Feature>
              <FeatureIcon>🚴‍♂️</FeatureIcon>
              <FeatureTitle>Técnicos Expertos</FeatureTitle>
            </Feature>
            <Feature>
              <FeatureIcon>🔧</FeatureIcon>
              <FeatureTitle>Equipamiento de Alta Calidad</FeatureTitle>
            </Feature>
            <Feature>
              <FeatureIcon>⏱️</FeatureIcon>
              <FeatureTitle>Servicio Rápido y Eficiente</FeatureTitle>
            </Feature>
          </InformationText>

          <CarouselBackground>
            <Slider {...settings}>
              <div
                style={{ position: "relative", width: "100%", height: "600px" }}
              >
                <Image
                  src="/reparacion/1.webp"
                  alt="Reparación de Bicicleta 1"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
              <div
                style={{ position: "relative", width: "100%", height: "600px" }}
              >
                <Image
                  src="/reparacion/2.webp"
                  alt="Reparación de Bicicleta 2"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
              <div
                style={{ position: "relative", width: "100%", height: "600px" }}
              >
                <Image
                  src="/reparacion/3.webp"
                  alt="Reparación de Bicicleta 3"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
              <div
                style={{ position: "relative", width: "100%", height: "600px" }}
              >
                <Image
                  src="/reparacion/4.webp"
                  alt="Reparación de Bicicleta 4"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
              <div
                style={{ position: "relative", width: "100%", height: "600px" }}
              >
                <Image
                  src="/reparacion/5.webp"
                  alt="Reparación de Bicicleta 5"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
              <div
                style={{ position: "relative", width: "100%", height: "600px" }}
              >
                <Image
                  src="/reparacion/6.webp"
                  alt="Reparación de Bicicleta 6"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
            </Slider>
          </CarouselBackground>
        </TextContainer>
      </InformationSection>

      {/* Services Section */}
      <ServicesSection>
        <ServiceList>
          <ServiceItem>Mantenimiento general</ServiceItem>
          <ServiceItem>Ajuste de frenos y cambios</ServiceItem>
          <ServiceItem>Reparación de pinchazos</ServiceItem>
          <ServiceItem>Limpieza y lubricación completa</ServiceItem>
          <ServiceItem>Cambio de cubiertas y cámaras</ServiceItem>
          <ServiceItem>Ajuste de suspensión</ServiceItem>
        </ServiceList>
      </ServicesSection>

      {/* Statistics Section */}
      <StatsSection ref={statsRef}>
        <StatItem>
          <StatNumber>
            {statsInView ? <CountUp start={0} end={500} duration={2} /> : 500}
          </StatNumber>
          <StatLabel>Bicicletas Reparadas</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>
            {statsInView ? <CountUp start={0} end={500} duration={2} /> : 300}
          </StatNumber>
          <StatLabel>Clientes Satisfechos</StatLabel>
        </StatItem>
      </StatsSection>
    </MainContainer>
  );
};

export default RepairService;
