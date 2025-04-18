import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.main`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <h1>Portfolio</h1>
      <p>Showcasing my security projects and infrastructure implementations.</p>
    </PortfolioContainer>
  );
};

export default Portfolio;