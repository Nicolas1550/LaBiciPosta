"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
  }, [dropdownRef]);

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

      {/* Menú */}
      <MenuLinks>
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#">Inicio</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#">Nosotros</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#">Contacto</a>
          </motion.li>
        </motion.ul>
      </MenuLinks>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Dropdown Categorías */}
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
                  <a href="#">Próximas Carreras</a>
                </li>
                <li>
                  <a href="#">Tienda de Bicicletas</a>
                </li>
                <li>
                  <a href="#">Servicios de Reparación</a>
                </li>
                <li>
                  <a href="#">Blog</a>
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
            href="https://twitter.com" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialMediaIcons>
      </div>

      {/* Menú móvil */}
      <MenuToggle $isOpen={isOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </MenuToggle>

      {/* Menú móvil */}
      <Menu isOpen={isOpen}>
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#">Inicio</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#">Nosotros</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#">Contacto</a>
          </motion.li>
        </motion.ul>
      </Menu>
    </Nav>
  );
};

export default Navbar;
