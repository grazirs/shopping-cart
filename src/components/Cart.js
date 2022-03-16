import CartItem from "./CartItem";

const Cart = ({cart, removeFromCart}) => {
  return (
    <>
      <h1>Cart</h1>
      {cart.map(item => 
        <div key={item.name}>
          <CartItem item={item} removeFromCart={() => removeFromCart(item)}></CartItem>   
        </div>
      )}
    </>
  )
}

export default Cart;
