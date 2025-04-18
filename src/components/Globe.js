import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';

const Globe = () => {
  const meshRef = useRef();

  // Professional animation speed
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  // Optimized grid generation using useMemo
  const { latitudeLines, longitudeLines } = useMemo(() => {
    const latLines = [];
    // Reduced number of latitude lines for cleaner look
    for (let i = -60; i <= 60; i += 30) {
      const phi = (i * Math.PI) / 180;
      const points = [];
      for (let j = 0; j <= 360; j += 5) {
        const theta = (j * Math.PI) / 180;
        const x = 2 * Math.cos(phi) * Math.cos(theta);
        const y = 2 * Math.sin(phi);
        const z = 2 * Math.cos(phi) * Math.sin(theta);
        points.push([x, y, z]);
      }
      latLines.push(points);
    }

    const longLines = [];
    // Increased spacing for longitude lines
    for (let i = 0; i < 360; i += 45) {
      const points = [];
      for (let j = -90; j <= 90; j += 5) {
        const phi = (j * Math.PI) / 180;
        const theta = (i * Math.PI) / 180;
        const x = 2 * Math.cos(phi) * Math.cos(theta);
        const y = 2 * Math.sin(phi);
        const z = 2 * Math.cos(phi) * Math.sin(theta);
        points.push([x, y, z]);
      }
      longLines.push(points);
    }

    return { latitudeLines: latLines, longitudeLines: longLines };
  }, []);

  return (
    <group ref={meshRef}>
      {/* Base sphere with professional styling */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#1a73e8"
          opacity={0.15}
          transparent
          wireframe
        />
      </Sphere>

      {/* Enhanced latitude lines */}
      {latitudeLines.map((points, i) => (
        <Line
          key={`lat-${i}`}
          points={points}
          color="#4285f4"
          lineWidth={0.8}
          transparent
          opacity={0.3}
        />
      ))}

      {/* Enhanced longitude lines */}
      {longitudeLines.map((points, i) => (
        <Line
          key={`lon-${i}`}
          points={points}
          color="#4285f4"
          lineWidth={0.8}
          transparent
          opacity={0.3}
        />
      ))}

      {/* Professional protective layer */}
      <Sphere args={[2.2, 32, 32]}>
        <meshStandardMaterial
          color="#4285f4"
          transparent
          opacity={0.03}
        />
      </Sphere>

      {/* Additional outer glow effect */}
      <Sphere args={[2.3, 32, 32]}>
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.01}
        />
      </Sphere>
    </group>
  );
};

export default Globe;