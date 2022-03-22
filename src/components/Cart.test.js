import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";

describe("<Cart/>", () => {
  it("renders checkout button", () => {
    const cart = [];
    render(<Cart cart={cart} />);
    const button = screen.getByRole("button", { name: /Checkout/i });
    userEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
