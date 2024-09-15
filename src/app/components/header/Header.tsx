import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { HeaderContainer, HeaderContent, WelcomeText, SubText, Highlight, CtaButton } from './HeaderStyles';
import ThreeScene from './ThreeScene'; // Importamos la escena 3D

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      {/* Fondo 3D */}
      <Canvas
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
        camera={{ position: [0, 0, 10], fov: 75 }}
      >
        {/* Si tienes OrbitControls, lo eliminamos para que no se pueda manipular la escena */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <ThreeScene /> {/* Componente de la escena de partículas */}
      </Canvas>

      {/* Contenido estático */}
      <HeaderContent>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <WelcomeText>
            ¡Bienvenidos a <Highlight>La BICIPOSTA!</Highlight>
          </WelcomeText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <SubText>El lugar donde la pasión y la velocidad se unen</SubText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <CtaButton href="#contacto">¡Únete a nosotros!</CtaButton>
        </motion.div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
