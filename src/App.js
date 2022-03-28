import { ThemeProvider } from 'styled-components';
import './App.css';
import Store from './components/Store';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Store/>
    </ThemeProvider>
  );
}

export default App;
