import React from "react";
import {
  DividerContainer,
  DividerContent,
  Title,
  DividerImages,
  ImageContainer,
  DividerImage,
  CallToAction,
  WhatsAppIcon,
} from "./ProductDividerStyles";

const ProductDivider: React.FC = () => {
  return (
    <DividerContainer>
      <DividerContent>
        <Title>Explora Nuestros Productos de Ciclismo</Title>
        <CallToAction
          href="https://wa.me/5492964541181"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Contáctanos por WhatsApp
        </CallToAction>
      </DividerContent>

      <DividerImages>
        <ImageContainer>
          <DividerImage
            src="/images/cycling.webp"
            alt="Equipo de Ciclismo 1"
          />
        </ImageContainer>
        <ImageContainer>
          <DividerImage
            src="/images/cycling2.webp"
            alt="Equipo de Ciclismo 2"
          />
        </ImageContainer>
      </DividerImages>
    </DividerContainer>
  );
};

export default ProductDivider;
