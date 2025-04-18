import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Globe from './Globe';

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.midnightBlue} 0%,
    ${props => props.theme.colors.charcoal} 100%
  );
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${props => props.theme.colors.white};
  z-index: 1;
  width: 90%;
  max-width: 1200px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(
    45deg,
    ${props => props.theme.colors.white} 0%,
    ${props => props.theme.colors.cyberBlue} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  max-width: 800px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  line-height: 1.8;
`;

const CTAButton = styled.button`
  background: ${props => props.theme.colors.cyberBlue};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;

  &:hover {
    background: ${props => props.theme.colors.emeraldGreen};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(46, 204, 113, 0.2);
  }
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.8;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Content>
        <Title>Securing Digital Infrastructure</Title>
        <Subtitle>
          Expert in cybersecurity leadership, implementing robust security frameworks, 
          and protecting enterprise systems through innovative solutions and strategic oversight.
        </Subtitle>
        <CTAButton onClick={() => window.location.href = '/portfolio'}>
          View Portfolio
        </CTAButton>
      </Content>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <Globe />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </CanvasContainer>
    </HeroContainer>
  );
};

export default Hero;