import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "./Checkout";

describe("<Checkout/>", () => {
  describe("when checkout is rendered", () => {
    it("renders Checkout title", () => {
      render(<Checkout />);
      const checkoutTitle = screen.getByRole('heading', {  name: /checkout/i});
      expect(checkoutTitle).toBeInTheDocument();
    });

    it("renders Shipping  Address", () => {
      render(<Checkout />);
      const shippingText = screen.getByRole('heading', {  name: /shipping address/i});
      expect(shippingText).toBeInTheDocument();
    });
  });

  describe("when Next button is clicked once", () => {
    it("renders Payment method", () => {
      render(<Checkout />);
      const nextButton = screen.getByRole("button", { name: "Next" });
      userEvent.click(nextButton);
      const paymentTitle = screen.getByText(/Payment method/i);
      expect(paymentTitle).toBeInTheDocument();
    });
  });

  describe("when next button is clicked twice", () => {
    it("renders Order summary", () => {
      render(<Checkout />);
      const nextButton = screen.getByRole("button", { name: "Next" });
      userEvent.dblClick(nextButton);
      const orderTitle = screen.getByText(/Order summary/i);
      expect(orderTitle).toBeInTheDocument();
    });
  });
});
