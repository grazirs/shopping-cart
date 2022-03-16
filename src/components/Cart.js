import CartItem from "./CartItem";

const Cart = ({cart, removeFromCart}) => {
  return (
    <>
      <h1>Cart</h1>
      {cart.map(cart => 
        <div key={cart.name}>
          <CartItem item={cart} removeFromCart={() => removeFromCart(cart)}></CartItem>   
        </div>
      )}
    </>
  )
}

export default Cart;
