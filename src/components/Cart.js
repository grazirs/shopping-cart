import CartItem from "./CartItem";

const Cart = ({cart, removeFromCart, checkout}) => {
  return (
    <>
      <h1 className="title">My Cart</h1>
      <div className="cart">
        {cart.map(item => 
          <div key={item.name}>
            <CartItem item={item} removeFromCart={() => removeFromCart(item)}></CartItem>   
          </div>
        )}
      </div>
      <button onClick={checkout} disabled={cart.length === 0} className="button button--checkout">Checkout</button>
    </>
  )
}

export default Cart;
