import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "./CartItem";

describe("<CartItem/>", () => {
  const setup = () => {
    const removeFromCartMock = jest.fn();
    const item = { name: "item1", description: "something here" };
    render(
      <CartItem item={item} removeFromCart={removeFromCartMock} />
    );
    return { removeFromCartMock, item };
  };

  it("renders the item data", () => {
    const { removeFromCartMock, item } = setup();
    const itemName = screen.getByText(item.name);
    const itemDescription = screen.getByText(item.description);
    expect(itemName).toBeInTheDocument();
    expect(itemDescription).toBeInTheDocument();
  });

  it("renders Remove from Cart button", () => {
    const { removeFromCartMock } = setup();
    const button = screen.getByRole("button", { name: /remove from cart/i });
    userEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  it("calls the removeFromCart function", () => {
    const { removeFromCartMock } = setup();
    const button = screen.getByRole("button", { name: /remove from cart/i });
    userEvent.click(button);
    expect(removeFromCartMock).toHaveBeenCalled();
  });
});
