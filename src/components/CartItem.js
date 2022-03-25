const CartItem = ({item, removeFromCart}) => {
  return (
    <>
      <div className="item">
        <p className="item__name">{item.name}</p>
        <p className="item__description">{item.description}</p>
        <p className="item__price">{item.price}</p>
        <button onClick={removeFromCart} className="button button--remove">Remove From Cart</button>
      </div>
      <hr></hr>
    </>
  )
}

export default CartItem;
