const Product = ({product, addToCart}) => {
  return (   
  <>
    <p>{product.name}</p>
    <p>{product.description}</p>
    <button onClick={addToCart} data-testid={product.id}>Add to Cart</button>
  </>
  )
}
export default Product;
