"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import {
  SupportContainer,
  HeroSection,
  HeroContent,
  Title,
  Subtitle,
  ContactOptions,
  ContactCard,
  ContactIcon,
  ContactText,
  FormSection,
  Form,
  Input,
  TextArea,
  SubmitButton,
  SuccessMessage,
} from "../components/stylesPages/SupportPageStyles";

const SupportPage: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false); 
  const [messageSent, setMessageSent] = useState(false); 
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setHasMounted(true); 
  }, []);

  if (!hasMounted) {
    return null;
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_mwmmqvd',  
      'template_n3xuwgd',  
      formRef.current!,
      'R93T5B0hw-lOz08xE' 
    )
    .then((result) => {
      console.log(result.text);
      setMessageSent(true); 
    })
    .catch((error) => {
      console.error(error.text);
    });

    e.currentTarget.reset();
  };

  const whatsappLink =
    "https://wa.me/5492964541181?text=¡Hola!%20Necesito%20soporte%20con%20mi%20bicicleta.";

  return (
    <SupportContainer>
      {/* Sección Hero */}
      <HeroSection>
        <HeroContent>
          <Title>¿Necesitas Ayuda?</Title>
          <Subtitle>Estamos aquí para resolver cualquier duda o problema</Subtitle>
        </HeroContent>
      </HeroSection>

      {/* Sección de Contacto */}
      <ContactOptions>
        <ContactCard>
          <ContactIcon>
            <FaPhone />
          </ContactIcon>
          <ContactText>Llámanos: +54 9 1234 5678</ContactText>
        </ContactCard>

        <ContactCard>
          <ContactIcon>
            <FaEnvelope />
          </ContactIcon>
          <ContactText>Escríbenos: soporte@bicicletas.com</ContactText>
        </ContactCard>

        <ContactCard href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <ContactIcon>
            <FaWhatsapp />
          </ContactIcon>
          <ContactText>WhatsApp: +54 9 2964 541181</ContactText>
        </ContactCard>
      </ContactOptions>

      {/* Sección de Formulario */}
      <FormSection>
        <Form ref={formRef} onSubmit={sendEmail}>
          <h3>Formulario de Soporte</h3>
          <Input type="text" name="user_name" placeholder="Tu nombre" required />
          <Input type="email" name="user_email" placeholder="Tu correo electrónico" required />
          <TextArea name="message" placeholder="Describe tu problema" required />
          <SubmitButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Enviar Solicitud
          </SubmitButton>
        </Form>

        {messageSent && (
          <SuccessMessage>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</SuccessMessage>
        )}
      </FormSection>
    </SupportContainer>
  );
};

export default SupportPage;
