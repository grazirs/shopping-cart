import CartItem from "./CartItem";
import { Button  } from "./Button";
import { Text } from "./Text";
import css from '@styled-system/css'

const Cart = ({cart, removeFromCart, checkout}) => {
  return (
    <>
      <Text level={1} className="title">My Cart</Text>
      <div className="cart">
        {cart.map(item => 
          <div key={item.name}>
            <CartItem item={item} removeFromCart={() => removeFromCart(item)}></CartItem>   
          </div>
        )}
      </div>
      <Button onClick={checkout} disabled={cart.length === 0} css={css({fontWeight:"700"})}>Checkout</Button>
    </>
  )
}

export default Cart;
