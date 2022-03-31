import Product from "./Product";
import { Text } from "./Text";
import { css } from "@styled-system/css";

const ProductsList = ({products, addToCart}) => {
  return (
    <>
      <Text level={1} css={css({margin:"3"})}>Products: Handmade Embroidery</Text>
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
