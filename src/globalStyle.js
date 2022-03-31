import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: ${({theme}) => theme.space[0]};
    padding: ${({theme}) => theme.space[0]};
    font-family: ${({theme}) => theme.font.body};
  }
  body {
    background-color: ${({theme}) => theme.colors.lightGrey};
  }
`;
export default GlobalStyle;
