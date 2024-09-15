"use client";
import React, { useEffect, useState } from 'react';
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
  LinkedInLink // Importamos el estilo para el enlace de LinkedIn
} from './FooterStyles';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false); // Estado para controlar el montaje

  useEffect(() => {
    setHasMounted(true); // Marca el componente como montado
  }, []);

  if (!hasMounted) {
    return null; // Evita renderizar hasta que esté montado
  }

  return (
    <FooterContainer>
      <FooterContent>
        {/* Primer columna */}
        <FooterColumn>
          <FooterTitle>Sobre La BICIPOSTA</FooterTitle>
          <FooterLink href="/nosotros">Quiénes somos</FooterLink>
          <FooterLink href="#events">Eventos</FooterLink>
          <FooterLink href="/contacto">Contacto</FooterLink>
        </FooterColumn>

        {/* Segunda columna */}
        <FooterColumn>
          <FooterTitle>Recursos</FooterTitle>
          <FooterLink href="#blog">Blog</FooterLink>
          <FooterLink href="#preguntas">Preguntas frecuentes</FooterLink>
          <FooterLink href="#support">Soporte</FooterLink>
        </FooterColumn>

        {/* Tercera columna */}
        <FooterColumn>
          <FooterTitle>Síguenos</FooterTitle>
          <SocialIcons>
            <SocialIcon href="https://facebook.com" target="_blank"><FaFacebookF /></SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank"><FaTwitter /></SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank"><FaInstagram /></SocialIcon>
            <SocialIcon href="https://youtube.com" target="_blank"><FaYoutube /></SocialIcon>
          </SocialIcons>
        </FooterColumn>
      </FooterContent>

      {/* Footer Bottom con enlace a LinkedIn */}
      <FooterBottom>
        <CopyrightText>
          &copy; {new Date().getFullYear()} La BICIPOSTA. Todos los derechos reservados. Creado por{' '}
          <LinkedInLink href="https://www.linkedin.com/in/sofia-luciuk/" target="_blank">
            Nicolás Luciuk
          </LinkedInLink>
        </CopyrightText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
