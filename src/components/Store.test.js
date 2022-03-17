import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Store from "./Store";

describe("<Store />", () => {
  beforeEach(() => {
    render(<Store />);
  });
  const product = { id: 1, name: "Stormtrooper T-shirt", description: "White t-shirt, black threads"};
  describe("when Store is rendered", () => {
    it("renders the data of one product", () => {
      const productName = screen.getByText(product.name);
      const productDescription = screen.getByText(product.description);
      expect(productName).toBeInTheDocument();
      expect(productDescription).toBeInTheDocument();
    });

    it("shows Cart button", () => {
      const button = screen.getByRole("button", { name: "Cart" });
      userEvent.click(button);
      expect(button).toBeInTheDocument();
    });

    it("shows Products button", () => {
      const button = screen.getByRole("button", { name: "Products" });
      userEvent.click(button);
      expect(button).toBeInTheDocument();
    });
  });

  describe("when a product is being added to cart", () => {
    it("shows a product to cart", () => {
      const addToCartButton = screen.getByTestId("1");
      userEvent.click(addToCartButton);
      const cartButton = screen.getByRole("button", { name: "Cart" });
      userEvent.click(cartButton);
      expect(screen.getByText(/stormtrooper t\-shirt/i)).toBeInTheDocument();
    });
  });

  describe("when a product is being removed from cart", () => {
    it("removes product from cart", () => {
      const addToCartButton = screen.getByTestId("1");
      userEvent.click(addToCartButton);
      const cartButton = screen.getByRole("button", { name: "Cart" });
      userEvent.click(cartButton);
      const removeFromCartButton = screen.getByRole("button", { name: "Remove From Cart" });
      userEvent.click(removeFromCartButton);
      expect(screen.queryByText(/stormtrooper t\-shirt/i)).not.toBeInTheDocument();
    });
  });
});
