import Product from "./Product";

const ProductsList = ({products, addToCart}) => {
  return (
    <>
      <h1 className="title">Products: Handmade Embroidery</h1>
      <div className="product-list">
        {products.map(product =>
          <div key={product.name}>
            <Product product={product} addToCart={() => addToCart(product)}></Product>
          </div>
          )}
      </div>
    </>
  )
}
export default ProductsList;
