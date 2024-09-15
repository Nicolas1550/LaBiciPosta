import styled from "styled-components";

// Contenedor principal de la página de contacto
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #fff;
  color: #333;
  min-height: 100vh;
`;

// Título del formulario de contacto
export const FormTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #ff4e50; /* Rojo de la empresa */
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

// Estilos para el formulario de contacto
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 1.5rem;
`;

// Campos de texto del formulario (nombre y correo)
export const InputField = styled.input`
  padding: 15px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #25d366; /* Verde de la empresa */
    outline: none;
  }
`;

// Área de texto para el mensaje
export const TextArea = styled.textarea`
  padding: 15px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #25d366;
    outline: none;
  }
`;

// Botón de enviar el formulario
export const SubmitButton = styled.button`
  padding: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #25d366;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1ebd58;
    transform: translateY(-3px);
  }
`;

// Mensaje de éxito
export const SuccessMessage = styled.p`
  margin-top: 20px;
  color: #25d366;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;
