import renderer from 'react-test-renderer';
import { Input } from "./Input";
import theme from '../theme';
import { ThemeProvider } from 'styled-components';

describe("<Input/>", () => {
  it("renders Input component correctly", () => {
    const input = renderer.create(<ThemeProvider theme={theme}><Input /></ThemeProvider>).toJSON();
    expect(input).toMatchSnapshot();
  })
});
