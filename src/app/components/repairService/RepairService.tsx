import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
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

  return (
    <MainContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <Title>Reparación de Bicicletas en Bici Posta</Title>
          <Subtitle>
            Servicio rápido y profesional para que sigas rodando sin problemas.
          </Subtitle>
          <ContactButton
            href="https://wa.me/5492964541181"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Contactar por WhatsApp
          </ContactButton>
        </HeroContent>
      </HeroSection>

      {/* Why Choose Us Section with Swiper */}
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
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <Image
                  src="/images/swiper3.webp"
                  alt="Reparación de Bicicleta 1"
                  width={1000} // Debes especificar un width
                  height={600} // Debes especificar un height
                  layout="responsive" // Esto asegura que la imagen se adapte
                  priority={true} // Esto optimiza para la carga inicial
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/swiper1.webp"
                  alt="Reparación de Bicicleta 2"
                  width={1000}
                  height={600}
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/swiper2.webp"
                  alt="Reparación de Bicicleta 3"
                  width={1000}
                  height={600}
                  layout="responsive"
                />
              </SwiperSlide>
            </Swiper>
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
