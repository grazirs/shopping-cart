import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "./Product";

describe("<Product />", () => {
  const addToCartMock = jest.fn();
  const product = { name: "product", description: "something here" };

  it("renders the product data", () => {
    render(<Product product={product} addToCart={addToCartMock}></Product>);
    const productName = screen.getByText(product.name);
    const productDescription = screen.getByText(product.description);
    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
  });

  it("renders Add to Cart button", () => {
    render(<Product product={product} addToCart={addToCartMock}></Product>);
    const button = screen.getByRole("button", { name: "Add to Cart" });
    userEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  it("calls the Add to Cart function", () => {
    render(<Product product={product} addToCart={addToCartMock}></Product>);
    const button = screen.getByRole("button", { name: "Add to Cart" });
    userEvent.click(button);
    expect(addToCartMock).toHaveBeenCalled();
  });
});
