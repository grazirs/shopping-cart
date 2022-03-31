import { Button } from "./Button";
import { Text } from "./Text";
import css from '@styled-system/css'

const CartItem = ({item, removeFromCart}) => {
  return (
    <>
      <div className="item">
        <Text level={3}>{item.name}</Text>
        <Text level={3} fontWeight="2">{item.description}</Text>
        <Text level={3} fontWeight="2">{item.price}</Text>
        <Button onClick={removeFromCart} css={css({backgroundColor:"darkRed", fontWeight:"4"})}>Remove From Cart</Button>
      </div>
      <hr></hr>
    </>
  )
}

export default CartItem;
