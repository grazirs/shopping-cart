import CartItem from "./CartItem";

const Cart = ({cart, removeFromCart}) => {
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
    </>
  )
}

export default Cart;
