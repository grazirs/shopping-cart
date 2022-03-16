const CartItem = ({item, removeFromCart}) => {
  return (
    <>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <button onClick={removeFromCart}>Remove From Cart</button>
    </>
  )
}

export default CartItem;
