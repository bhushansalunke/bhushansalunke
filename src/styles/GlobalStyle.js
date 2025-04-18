import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.charcoal};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.secondary};
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.cyberBlue};
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.midnightBlue};
    }
  }
`;

export default GlobalStyle;