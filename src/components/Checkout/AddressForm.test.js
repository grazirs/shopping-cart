import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddressForm from "./AddressForm";

describe("<AddressForm/>", () => {
  describe("when Address Form is rendered", () => {
    it("renders the addresses fields", () => {
      render(<AddressForm />);
      const zipCode = screen.getByRole('textbox', {  name: /zip \/ postal code/i});
      expect(zipCode).toBeInTheDocument();
      const city = screen.getByRole('textbox', {  name: /city/i})
      expect(city).toBeInTheDocument();
      const country = screen.getByRole('button', {  name: /country ​/i});
      expect(country).toBeInTheDocument();
      const region = screen.getByRole('button', {  name: /state\/province\/region ​/i});
      expect(region).toBeInTheDocument();
    });
  });

  describe("when user chooses a country", () => {
    it("renders the chosen country", () => {
      render(<AddressForm />);
      const country = screen.getByRole('button', {  name: /country ​/i});
      userEvent.click(country);
      const chosenCountry = screen.getByRole('option', {  name: /laos/i});
      userEvent.click(chosenCountry);
      expect(chosenCountry).toBeInTheDocument();
    });
  });

  describe("when user has chosen a country and then selects State/Province/Region", () => {
    it("renders the chosen State/Province/Region", () => {
      render(<AddressForm />);
      const country = screen.getByRole('button', {  name: /country ​/i});
      userEvent.click(country);
      const chosenCountry = screen.getByRole('option', {  name: /laos/i});
      userEvent.click(chosenCountry);
      const region = screen.getByRole('button', {  name: /state\/province\/region ​/i})
      userEvent.click(region);
      const chosenState= screen.getByRole('option', {  name: /Attapu/i});
      userEvent.click(chosenState);
      expect(chosenState).toBeInTheDocument();
    });
  });
});
