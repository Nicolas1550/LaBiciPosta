import styled from "styled-components";
import { motion } from "framer-motion";

// Contenedor principal
export const SupportContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;
export const SuccessMessage = styled.p`
  font-size: 1.2rem;
  color: #28a745; /* Verde éxito */
  text-align: center;
  margin-top: 20px;
  background-color: #e6f4ea;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #28a745;
`;

// Sección Hero
export const HeroSection = styled.section`
  width: 100%;
  height: 60vh;
  background-image: url("/images/support.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Efecto parallax */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 100px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const HeroContent = styled.div`
  z-index: 1;
  color: white;
  max-width: 700px;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #ddd;
`;

// Opciones de Contacto
export const ContactOptions = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  margin-top: -100px;
  padding: 40px 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactCard = styled(motion.a)`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Asegura que todo esté centrado */
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: #333;
  margin: 20px 0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;


export const ContactIcon = styled.div`
  font-size: 3rem;
  color: #ff4e50;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px; /* Establecemos una altura fija */
  width: 60px; /* Asegura que el ícono ocupe un área cuadrada */
`;

export const ContactText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  word-wrap: break-word; /* Asegura que el texto no se desborde */
`;
// Sección de Formulario
export const FormSection = styled.section`
  width: 100%;
  max-width: 900px;
  margin-top: 50px;
  padding: 40px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    font-size: 2rem;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 10px;
  border: 2px solid #ddd;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ff4e50;
  }
`;

export const TextArea = styled.textarea`
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 10px;
  border: 2px solid #ddd;
  width: 100%;
  height: 150px;
  resize: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ff4e50;
  }
`;

export const SubmitButton = styled(motion.button)`
  padding: 15px;
  font-size: 1.4rem;
  background-color: #ff4e50;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e2443f;
  }
`;
