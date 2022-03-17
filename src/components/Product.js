const Product = ({product, addToCart}) => {
  return (   
  <div className="product">
    <img className="product__img"src={product.image} alt={product.name} />
    <p className="product__name">{product.name}</p>
    <p className="product__description">{product.description}</p>
    <button onClick={addToCart} className="button button--add" data-testid={product.id}>Add to Cart</button>
  </div>
  )
}
export default Product;
