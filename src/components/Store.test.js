import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AVAILABLE_PRODUCTS from "../availableProducts";
import Store from "./Store";

describe("<Store />", () => {
  const setup = () => {
    const product = AVAILABLE_PRODUCTS[0];
    render(<Store />);
    return { product };
  };

  describe("when Store is rendered", () => {
    it("renders the data of one product", () => {
      const { product } = setup();
      const productName = screen.getByText(product.name);
      const productDescription = screen.getByText(product.description);
      expect(productName).toBeInTheDocument();
      expect(productDescription).toBeInTheDocument();
    });

    it("shows Cart button", () => {
      setup();
      const button = screen.getByRole("button", { name: "Cart" });
      userEvent.click(button);
      expect(button).toBeInTheDocument();
    });

    it("shows Products button", () => {
      setup();
      const button = screen.getByRole("button", { name: "Products" });
      userEvent.click(button);
      expect(button).toBeInTheDocument();
    });
  });

  describe("when a product is being added to cart", () => {
    it("shows a product in the cart", () => {
      const { product } = setup();
      const addToCartButton = screen.getByTestId(product.id);
      userEvent.click(addToCartButton);
      const cartButton = screen.getByRole("button", { name: "Cart" });
      userEvent.click(cartButton);
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  describe("when a product is being removed from cart", () => {
    it("removes product from cart", () => {
      const { product } = setup();
      const addToCartButton = screen.getByTestId(product.id);
      userEvent.click(addToCartButton);
      const cartButton = screen.getByRole("button", { name: "Cart" });
      userEvent.click(cartButton);
      const removeFromCartButton = screen.getByRole("button", { name: "Remove From Cart" });
      userEvent.click(removeFromCartButton);
      expect(screen.queryByText(product.name)).not.toBeInTheDocument();
    });
  });
});
