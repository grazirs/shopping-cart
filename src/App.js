import { ThemeProvider } from 'styled-components';
import './App.css';
import Store from './components/Store';
import theme from './theme';
import styled from 'styled-components';
import css from '@styled-system/css'
import GlobalStyle from './globalStyle';

const Button = styled.button`
  background-color: ${({theme}) => (theme.colors.purple)};
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Store/>
      <Button css={css({backgroundColor:'darkBlue'})}>Test Button1</Button>
      <Button>Test Button2</Button>
    </ThemeProvider>
  );
}

export default App;
