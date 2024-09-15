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
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <Title>Relax and Recharge with Our Hot Showers</Title>
          <Subtitle>
            After a long ride, enjoy a warm shower and restful sleep at BiciPosta. Perfect for cyclists!
          </Subtitle>
          <CallToAction
            href="https://wa.me/5492964541181"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Book Now via WhatsApp
          </CallToAction>
        </HeroContent>
      </HeroSection>

      {/* Features Section */}
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
          <FeatureTitle>Sleeping Bags</FeatureTitle>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon>
            <RelaxIcon />
          </FeatureIcon>
          <FeatureTitle>Resting Area</FeatureTitle>
        </FeatureItem>
      </FeaturesSection>
    </MainContainer>
  );
};

export default HotShowers;
