import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Review from "./Review";

describe("<Review/>", () => {
  describe("when review is rendered", () => {
    it("renders the received data from address and payment pages", () => {
      const cart = [{ name: "item1", price: 300 }]
      const addressForm = {
        firstName: "Graziele",
        lastName: "Ribeiro",
        address1: "blue",
        address2: "yellow",
        zip: "4581000",
        city: "Porto",
        country: "Brazil",
        region: "Bahia",
      }
      const paymentForm = {
        cardName: "Graziele Santos",
        cardNumber: "1111-1554-1237-1234",
        expiryDate: "10/10",
      }
      render(<Review   cart = {cart} addressForm = {addressForm} paymentForm = {paymentForm}/>);
      const name = screen.getByText(`${addressForm.firstName} ${addressForm.lastName}`)
      expect(name).toBeInTheDocument();
      const address = screen.getByText(new RegExp(`${addressForm.address1}.+${addressForm.address2}.+${addressForm.zip}.+${addressForm.city}.+${addressForm.country}.+${addressForm.region}`));
      expect(address).toBeInTheDocument();
      const cardName = screen.getByText(new RegExp(`Card holder.+${paymentForm.cardName}`));
      expect(cardName).toBeInTheDocument();
      const cardNumber = screen.getByText(/Card number.+xxxx-xxxx-xxxx-1234/);
      expect(cardNumber).toBeInTheDocument();
      const expiryDate = screen.getByText(new RegExp(`Expiry date.+${paymentForm.expiryDate}`));
      expect(expiryDate).toBeInTheDocument();
      const itemName = screen.getByText(cart[0].name);
      expect(itemName).toBeInTheDocument();
      const itemPrice = screen.getAllByText(cart[0].price);
      expect(itemPrice[0]).toBeInTheDocument();
    });
  });
});
