const Product = ({product, addToCart}) => {
  return (   
  <div className="product">
    <div className="product__img" style={{backgroundImage: `url(${product.image})`}}></div>
    <p className="product__name">{product.name}</p>
    <p className="product__description">{product.description}</p>
    <p className="product__price">{product.price}</p>
    <button onClick={addToCart} className="button button--add" data-testid={product.id}>Add to Cart</button>
  </div>
  )
}
export default Product;
