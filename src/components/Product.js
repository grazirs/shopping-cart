const Product = ({product, addToCart}) => {
  return (   
  <>
    <p>{product.name}</p>
    <p>{product.description}</p>
    <button onClick={()=>{addToCart(product)}}>Add to Cart</button>
  </>
  )
}
export default Product;
