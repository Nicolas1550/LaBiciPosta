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
  SubText, // Importamos el nuevo estilo
} from "./ProductDividerStyles";

const ProductDivider: React.FC = () => {
  return (
    <DividerContainer>
      <DividerContent>
        <Title>Explora Nuestros Productos de Ciclismo</Title>
        <SubText>Ventas para toda la provincia de Tierra del Fuego</SubText> {/* Nuevo texto */}
        <CallToAction
          href="https://wa.me/5492964502103"
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
            src="/productos/1.webp"
            alt="Equipo de Ciclismo 1"
          />
        </ImageContainer>
        <ImageContainer>
          <DividerImage
            src="/productos/2.webp"
            alt="Equipo de Ciclismo 2"
          />
        </ImageContainer>
      </DividerImages>
    </DividerContainer>
  );
};

export default ProductDivider;
