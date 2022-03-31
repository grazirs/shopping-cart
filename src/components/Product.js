import { Button  } from "./Button";
import { Text } from "./Text";
import css from '@styled-system/css'

const Product = ({product, addToCart}) => {
  return (   
  <div className="product">
    <div className="product__img" style={{backgroundImage: `url(${product.image})`}}></div>
    <Text level={3}>{product.name}</Text>
    <Text level={3} fontWeight="2">{product.description}</Text>
    <Text level={3}>{product.price}</Text>
    <Button onClick={addToCart} css={css({margin:"2", fontWeight:"4", padding:"1"})} data-testid={product.id}>Add to Cart</Button>
  </div>
  )
}
export default Product;
