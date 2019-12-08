import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Domine:400,700|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    color: ${props => (props.whiteColor ? 'red' : 'green')};
  }
`;

export default GlobalStyle;
