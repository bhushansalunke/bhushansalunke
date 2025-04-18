import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.main`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact</h1>
      <p>Let's connect and discuss how we can work together.</p>
    </ContactContainer>
  );
};

export default Contact;