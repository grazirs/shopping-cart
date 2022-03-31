import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";
import { ThemeProvider } from 'styled-components';
import theme from "../theme";

describe("<Cart/>", () => {
  it("renders checkout button", () => {
    const cart = [];
    render(<ThemeProvider theme={theme}><Cart cart={cart} /></ThemeProvider>);
    const button = screen.getByRole("button", { name: /Checkout/i });
    userEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
