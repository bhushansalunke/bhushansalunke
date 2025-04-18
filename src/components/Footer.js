import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.midnightBlue};
  color: ${props => props.theme.colors.white};
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.colors.emeraldGreen};
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: ${props => props.theme.colors.white};
  margin-bottom: 0.5rem;
  
  &:hover {
    color: ${props => props.theme.colors.emeraldGreen};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About</h3>
          <p>Dedicated to securing and improving digital infrastructure through innovative cybersecurity solutions.</p>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/portfolio">Portfolio</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <h3>Connect</h3>
          <FooterLink as="a" href="https://github.com" target="_blank">GitHub</FooterLink>
          <FooterLink as="a" href="https://linkedin.com" target="_blank">LinkedIn</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} CISO Portfolio. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;