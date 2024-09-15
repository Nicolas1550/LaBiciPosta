import styled from 'styled-components';
import { motion } from 'framer-motion';

// Contenedor principal del navbar
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff; /* Fondo blanco clásico */
  border-bottom: 2px solid #333; /* Línea negra en la parte inferior */
  color: #333; /* Texto en negro */
  position: relative;
  z-index: 10;
  height: 80px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Contenedor del logo sin animaciones
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
`;

// Enlaces del menú principal
export const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;

  ul {
    display: flex;
    list-style: none;
    gap: 1.5rem; /* Un espacio menor entre los enlaces */
  }

  li a {
    color: #333; /* Negro clásico para los enlaces */
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #ff4e50; /* Fondo rojo al hacer hover */
      color: white; /* Texto blanco al hacer hover */
    }

    &.active {
      border-bottom: 2px solid #4caf50; /* Verde como indicador de la página activa */
      font-weight: bold;
    }
  }
`;

// Iconos de redes sociales
export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #333; /* Negro para los íconos */
    font-size: 1.5rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #ff4e50; /* Rojo en hover */
      transform: scale(1.1); /* Ligeramente más grande en hover */
    }
  }
`;

// Botón de menú en dispositivos móviles
export const MenuToggle = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 20;

  span {
    width: 100%;
    height: 0.2rem;
    background: #333; /* Líneas negras para el menú */
    border-radius: 10px;
    transition: all 0.3s ease;
    transform-origin: 1px;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
      span:nth-child(1) {
        transform: rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
      }
    `
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Menú desplegable en móvil
export const Menu = styled(motion.div)<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff; /* Fondo blanco clásico */
  border: 1px solid #333; /* Borde negro */
  width: 200px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    padding: 1rem 0;
  }

  li {
    margin: 1rem 0;
  }

  a {
    color: #333; /* Negro para los enlaces */
    text-decoration: none;
    font-size: 1rem;
    padding: 0.7rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #4caf50; /* Verde en hover */
      color: white; /* Texto blanco */
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

// Contenedor del botón del Dropdown
export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownMenuButton = styled.button`
  background-color: transparent;
  color: #333;
  border: 1px solid #333;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: auto; /* Asegura que el botón no se extienda innecesariamente */

  &:hover {
    background-color: #333;
    color: white;
  }

  display: block;
  margin: 0 auto;
`;

export const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: -45%;
  transform: translateX(-50%);
  background-color: #ffffff;
  border: 1px solid #333;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 220px; /* Ancho mínimo para evitar que el menú sea demasiado pequeño */
  max-width: 300px; /* Ancho máximo para controlar el tamaño */
  width: 100%; /* El menú ocupa el ancho completo dentro de sus límites */
  text-align: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch; /* Asegura que los elementos ocupen el ancho del menú */
  }

  li a {
    color: #333;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    width: 100%; /* Asegura que los enlaces ocupen todo el ancho disponible */
    display: block; /* Hace que los enlaces sean bloques completos */

    &:hover {
      background-color: #ff4e50;
      color: white;
    }
  }
`;
