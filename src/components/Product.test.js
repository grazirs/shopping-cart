import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "./Product";
import { ThemeProvider } from 'styled-components';
import theme from "../theme";

describe("<Product />", () => {
  const product = { name: "product", description: "something here" };

  it("renders the product data", () => {
    const addToCartMock = jest.fn();
    render(<ThemeProvider theme={theme}><Product product={product} addToCart={addToCartMock}></Product></ThemeProvider>);
    const productName = screen.getByText(product.name);
    const productDescription = screen.getByText(product.description);
    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
  });

  it("renders Add to Cart button", () => {
    const addToCartMock = jest.fn();
    render(<ThemeProvider theme={theme}><Product product={product} addToCart={addToCartMock}></Product></ThemeProvider>);
    const button = screen.getByRole("button", { name: "Add to Cart" });
    userEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  it("calls the Add to Cart function", () => {
    const addToCartMock = jest.fn();
    render(<ThemeProvider theme={theme}><Product product={product} addToCart={addToCartMock}></Product></ThemeProvider>);
    const button = screen.getByRole("button", { name: "Add to Cart" });
    userEvent.click(button);
    expect(addToCartMock).toHaveBeenCalled();
  });
});
