import Product from "./Product";

const ProductsList = ({products, addToCart}) => {
  return (
    <>
      {products.map(product =>
        <div key={product.name}>
          <Product product={product} addToCart={() => addToCart(product)}></Product>
        </div>
        )}
    </>
  )
}
export default ProductsList;
