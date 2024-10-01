"use client";
import React, { useEffect, useState } from "react";
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialIcons,
  SocialIcon,
  FooterBottom,
  CopyrightText,
  LinkedInLink,
  MapWrapper,
} from "./FooterStyles";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <FooterContainer>
      <FooterContent>
        {/* Primer columna */}
        <FooterColumn>
          <FooterTitle>Sobre La BICIPOSTA</FooterTitle>
          <FooterLink href="/nosotros">Quiénes somos</FooterLink>
          <FooterLink href="/carreras">Próximas Carreras</FooterLink>
          <FooterLink href="/contacto">Contacto</FooterLink>
        </FooterColumn>

        {/* Segunda columna */}
        <FooterColumn>
          <FooterTitle>Recursos</FooterTitle>
          <FooterLink href="/preguntas">Preguntas frecuentes</FooterLink>
          <FooterLink href="/soporte">Soporte</FooterLink>
        </FooterColumn>

        {/* Tercera columna */}
        <FooterColumn>
          <FooterTitle>Síguenos</FooterTitle>
          <SocialIcons>
            <SocialIcon href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/toranzajose/"
              target="_blank"
            >
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>

        {/* Cuarta columna: Google Maps */}
        <FooterColumn>
          <FooterTitle>Nuestra Ubicación</FooterTitle>
          <MapWrapper>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.4237633651642!2d-67.6738035088296!3d-53.81372540796844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4b1644a97ec1cb%3A0x4ef70bd2381d2a8c!2s58PG%2BGVC%2C%20R%C3%ADo%20Grande%2C%20Tierra%20del%20Fuego!5e0!3m2!1sen!2sar!4v1727739441348!5m2!1sen!2sar"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapWrapper>
        </FooterColumn>
      </FooterContent>

      {/* Footer Bottom con enlace a LinkedIn */}
      <FooterBottom>
        <CopyrightText>
          &copy; {new Date().getFullYear()} La BICIPOSTA. Todos los derechos
          reservados. Creado por{" "}
          <LinkedInLink
            href="https://www.linkedin.com/in/nicolas-luciuk/"
            target="_blank"
          >
            Nicolás Luciuk
          </LinkedInLink>
        </CopyrightText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
