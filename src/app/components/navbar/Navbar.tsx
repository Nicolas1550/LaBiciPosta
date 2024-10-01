"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  LogoContainer,
  Nav,
  Menu,
  MenuToggle,
  SocialMediaIcons,
  MenuLinks,
  DropdownContainer,
  DropdownMenuButton,
  DropdownMenu,
} from "./NavbarStyles";

const Navbar = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Refs para el menú hamburguesa y el botón de menú
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Cambia el estado del menú hamburguesa
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setHasMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      // Verifica si el clic fue fuera del menú hamburguesa, dropdown y botón de menú
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Nav>
      {/* Logo */}
      <LogoContainer>
        <Image
          src="/images/logo.jpeg"
          alt="Logo de MyBrand"
          width={50}
          height={50}
          priority
        />
      </LogoContainer>

      {/* Menú en escritorio */}
      <MenuLinks>
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/">Inicio</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/nosotros">Nosotros</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/contacto">Contacto</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/galeria">Galería de Eventos</a>
          </motion.li>
        </motion.ul>
      </MenuLinks>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Dropdown Categorías solo en escritorio */}
        <DropdownContainer ref={dropdownRef}>
          <DropdownMenuButton onClick={toggleDropdown}>
            Categorías
          </DropdownMenuButton>
          {isDropdownOpen && (
            <DropdownMenu
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                <li>
                  <a href="/carreras">Próximas Carreras</a>
                </li>
                <li>
                  <a href="/reparacion">Servicios de Reparación</a>
                </li>
                <li>
                  <a href="/preguntas">Preguntas Frecuentes</a>
                </li>
              </ul>
            </DropdownMenu>
          )}
        </DropdownContainer>

        {/* Redes sociales */}
        <SocialMediaIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/toranzajose/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialMediaIcons>
      </div>

      {/* Menú móvil */}
      <MenuToggle ref={toggleButtonRef} $isOpen={isOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </MenuToggle>

      {/* Menú móvil (incluyendo Categorías) */}
      <Menu ref={menuRef} isOpen={isOpen}>
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/">Inicio</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/nosotros">Nosotros</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/contacto">Contacto</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/galeria">Galería de Eventos</a>
          </motion.li>
          {/* Agregar Categorías dentro del menú móvil */}
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/carreras">Próximas Carreras</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/reparacion">Servicios de Reparación</a>
          </motion.li>
        </motion.ul>
      </Menu>
    </Nav>
  );
};

export default Navbar;
