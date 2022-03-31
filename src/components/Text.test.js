import renderer from 'react-test-renderer';
import { Text } from "./Text";
import theme from '../theme';
import { ThemeProvider } from 'styled-components';

describe("<Text/>", () => {
  it("renders Text component correctly", () => {
    const text = renderer.create(<ThemeProvider theme={theme}><Text /></ThemeProvider>).toJSON();
    expect(text).toMatchSnapshot();
  })
});
