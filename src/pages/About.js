import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.main`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      <p>Chief Information Security Officer with expertise in IT Infrastructure, Systems, and Cybersecurity.</p>
    </AboutContainer>
  );
};

export default About;