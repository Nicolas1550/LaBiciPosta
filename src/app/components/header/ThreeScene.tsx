import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null!);

  // Cargamos la textura de la imagen de la partícula (dust.png)
  const particleTexture = useLoader(THREE.TextureLoader, '/images/dust.png');

  // Animamos las partículas en la escena
  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005; // Incrementamos un poco la rotación
      particlesRef.current.position.y += Math.sin(Date.now() * 0.001) * 0.0002; // Ajustamos el movimiento
    }
  });

  // Configuración de las partículas
  const particleCount = 700; // Ajustamos el número de partículas
  const positions = new Float32Array(particleCount * 3); // Posiciones para las partículas
  const sizes = new Float32Array(particleCount); // Tamaños variados para las partículas

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 20; // Ampliamos el área de distribución en X
    const y = (Math.random() - 0.5) * 10; // Ampliamos el área en Y
    const z = (Math.random() - 0.5) * 20; // Ampliamos el área en Z

    positions.set([x, y, z], i * 3);
    sizes[i] = Math.random() * 1.2 + 0.5; // Hacemos las partículas más grandes
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial
        map={particleTexture} // Asignamos la textura de la partícula
        size={1.2} // Reducimos ligeramente el tamaño de las partículas
        sizeAttenuation={true} // Ajusta el tamaño según la distancia
        transparent={true} // Hacemos la textura transparente
        opacity={0.6} // Reducimos la opacidad para que las partículas sean más sutiles
        alphaTest={0.3} // Ajustamos el alphaTest para mejorar la visualización de partículas
        depthWrite={false} // Desactivamos la escritura de profundidad para que no tapen a los corredores
      />
    </points>
  );
};

export default ThreeScene;
