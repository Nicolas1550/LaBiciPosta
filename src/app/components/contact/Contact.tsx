import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {
  ContactContainer,
  ContactForm,
  InputField,
  TextArea,
  SubmitButton,
  FormTitle,
  SuccessMessage,
} from "./ContactStyles";

const Contact: React.FC = () => {
  const [messageSent, setMessageSent] = useState(false);
  const formulario = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_mwmmqvd',  
      'template_n3xuwgd',  
      formulario.current!,
      'R93T5B0hw-lOz08xE'
    )
    .then((result) => {
      console.log(result.text);
      setMessageSent(true); // Cambiamos el estado cuando el mensaje se envía con éxito
    })
    .catch((error) => {
      console.error(error.text);
    });
    
    e.currentTarget.reset(); // Limpia el formulario después de enviar
  };

  return (
    <ContactContainer>
      <FormTitle>Contáctanos</FormTitle>
      
      <ContactForm ref={formulario} onSubmit={sendEmail}>
        <InputField type="text" name="user_name" placeholder="Tu nombre" required />
        <InputField type="email" name="user_email" placeholder="Tu correo" required />
        <TextArea name="message" rows={5} placeholder="Escribe tu mensaje" required></TextArea>
        <SubmitButton type="submit">Enviar Mensaje</SubmitButton>
      </ContactForm>

      {messageSent && (
        <SuccessMessage>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</SuccessMessage>
      )}
    </ContactContainer>
  );
};

export default Contact;
