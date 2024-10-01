"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules"; // Ya no importamos Navigation
import {
  GaleriaContainer,
  Title,
  Description,
  CarouselContainer,
  ImageDescription,
  InfoSection,
  ContactButton,
} from "../components/stylesPages/GalleryStyles";

const images = [
  {
    src: "/galeria/1.webp",
    alt: "Carrera en Montaña",
    description: "Preparando el circuito para el intercolegial",
  },
  {
    src: "/galeria/2.webp",
    alt: "Evento Urbano",
    description: "Circuito intercolegial",
  },
  {
    src: "/galeria/3.webp",
    alt: "Competencia de Ciclismo",
    description: "Frente del local",
  },
  {
    src: "/galeria/4.webp",
    alt: "Equipo de Ciclismo",
    description: "Faro cabo peñas",
  },
  {
    src: "/galeria/5.webp",
    alt: "Ruta Ciclista",
    description: "Pedaleada a tolhuin con amigos",
  },
  {
    src: "/galeria/6.webp",
    alt: "Ruta Ciclista",
    description: "Vuelta a rio grande",
  },
  {
    src: "/galeria/7.webp",
    alt: "Ruta Ciclista",
    description: "Cicloturismo",
  },
];

const Galeria: React.FC = () => {
  return (
    <GaleriaContainer>
      <Title>Galería de Eventos</Title>
      <Description>
        Explora los momentos más emocionantes de nuestros eventos y carreras.
        Aquí capturamos la pasión por el ciclismo en sus distintas facetas.
      </Description>

      <CarouselContainer>
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]} // No incluimos Navigation
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={image.alt} />
              <ImageDescription>{image.description}</ImageDescription>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>

      <InfoSection>
        <p>
          La BICIPOSTA se enorgullece de ofrecer a los ciclistas experiencias
          únicas y eventos inolvidables. Desde carreras de montaña hasta
          competencias urbanas, cada momento es una celebración de nuestra
          pasión por el ciclismo.
        </p>
        <ContactButton
          href="https://wa.me/5492964502103"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctanos por WhatsApp
        </ContactButton>
      </InfoSection>
    </GaleriaContainer>
  );
};

export default Galeria;
