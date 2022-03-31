import renderer from 'react-test-renderer';
import { Button } from "./Button";
import theme from '../theme';
import { ThemeProvider } from 'styled-components';

describe("<Button/>", () => {
  it("renders Button component correctly", () => {
    const button = renderer.create(<ThemeProvider theme={theme}><Button>Button</Button></ThemeProvider>).toJSON();
    expect(button).toMatchSnapshot();
  })
});
