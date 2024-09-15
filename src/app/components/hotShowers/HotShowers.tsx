import React from "react";
import {
  MainContainer,
  HeroSection,
  HeroContent,
  Title,
  Subtitle,
  FeaturesSection,
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  SleepingBagIcon,
  ShowerIcon,
  RelaxIcon,
  CallToAction,
  WhatsAppIcon,
} from "./HotShowerStyles";

const HotShowers: React.FC = () => {
  return (
    <MainContainer>
      {/* Sección Hero */}
      <HeroSection>
        <HeroContent>
          <Title>Relájate y recarga energías con nuestras Hot Showers</Title>
          <Subtitle>
            Después de un largo paseo, disfruta de una ducha caliente y un descanso reparador en BiciPosta. ¡Perfecto para ciclistas!
          </Subtitle>
          <CallToAction
            href="https://wa.me/5492964541181"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Reserva ahora vía WhatsApp
          </CallToAction>
        </HeroContent>
      </HeroSection>

      {/* Sección de Características */}
      <FeaturesSection>
        <FeatureItem>
          <FeatureIcon>
            <ShowerIcon />
          </FeatureIcon>
          <FeatureTitle>Hot Showers</FeatureTitle>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon>
            <SleepingBagIcon />
          </FeatureIcon>
          <FeatureTitle>Sacos de dormir</FeatureTitle>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon>
            <RelaxIcon />
          </FeatureIcon>
          <FeatureTitle>Área de descanso</FeatureTitle>
        </FeatureItem>
      </FeaturesSection>
    </MainContainer>
  );
};

export default HotShowers;
