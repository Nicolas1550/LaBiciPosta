import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image'; // Importar el componente de Next.js para imágenes
import { 
  ParentContainer,  
  StairTextContainer, 
  StairTitle, 
  StairDescription, 
  CarouselBackground // Actualizado para usar un carrusel en el fondo
} from './StairSectionStyles';

const StairSection: React.FC = () => {
  return (
    <ParentContainer>
      {/* Carrusel opacado detrás del texto */}
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
              src="/images/swiper1.webp"
              alt="Carrera de montaña"
              width={1000} // Define el tamaño de la imagen
              height={600} // Define el tamaño de la imagen
              layout="responsive" // Ajusta la imagen automáticamente al contenedor
              priority={true} // Optimización para la carga inicial
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/swiper2.webp"
              alt="Ciclismo urbano"
              width={1000}
              height={600}
              layout="responsive"
              priority={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/swiper3.webp"
              alt="Competencia extrema"
              width={1000}
              height={600}
              layout="responsive"
              priority={true}
            />
          </SwiperSlide>
        </Swiper>
      </CarouselBackground>

      {/* Texto centrado en el 100% del ancho */}
      <StairTextContainer>
        <StairTitle>Explora el mundo de la BICIPOSTA</StairTitle>
        <StairDescription>
          Descubre las carreras más emocionantes en paisajes increíbles. Ya sea en las montañas o en el entorno urbano, ¡te ofrecemos la mejor experiencia ciclista!
        </StairDescription>
      </StairTextContainer>
    </ParentContainer>
  );
};

export default StairSection;
