import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "./Checkout";

const fillForm = () => {
  const firstName = screen.getByRole('textbox', {  name: /first name/i});
  fireEvent.change(firstName, {target: {value: 'Graziele'}});
  const lastName = screen.getByRole('textbox', {  name: /last name/i});
  fireEvent.change(lastName, {target: {value: 'Santos'}});
  const address1 = screen.getByRole('textbox', {  name: /address line 1/i});
  fireEvent.change(address1, {target: {value: 'yellow street'}});
  const address2 = screen.getByRole('textbox', {  name: /address line 2/i});
  fireEvent.change(address2, {target: {value: 'blue street'}});
  const zip = screen.getByRole('textbox', {  name: /zip \/ postal code/i});
  fireEvent.change(zip, {target: {value: '45810000'}});
  const city = screen.getByRole('textbox', {  name: /city/i});
  fireEvent.change(city, {target: {value: 'Porto Seguro'}});
  const country = screen.getByRole('button', {  name: /country /i});
  userEvent.click(country);
  const chooseCountry = screen.getByRole('option', {  name: /angola/i});
  userEvent.click(chooseCountry);
  const regions = screen.getByRole('button', {  name: /state\/province\/region ​/i});
  userEvent.click(regions);
  const chooseRegion = screen.getByRole('option', {  name: /bie/i});
  userEvent.click(chooseRegion);
}

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

    it("renders Next button disabled", () => {
      render(<Checkout />);
      const nextButton = screen.getByRole("button", { name: "Next" });
      expect(nextButton).toBeDisabled();
    });
  });

  describe("when all data is filled", () => {
    it("renders Next button not disabled", () => {
      render(<Checkout />);
      fillForm();
      const nextButton = screen.getByRole("button", { name: "Next" });
      expect(nextButton).not.toBeDisabled();
    });
  });

  describe("when all data is filled", () => {
    it("renders Next button not disabled", () => {
      render(<Checkout />);
      fillForm();
      const nextButton = screen.getByRole("button", { name: "Next" });
      userEvent.click(nextButton);
      const backButton = screen.getByRole("button", { name: "Back" });
      userEvent.click(backButton);
      const filledInput = screen.getByDisplayValue("Graziele");
      expect(filledInput).toBeInTheDocument();
    });
  });
});
