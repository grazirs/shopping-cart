import { useState } from "react"
import Cart from "./Cart"
import ProductsList from "./ProductsList"
import AVAILABLE_PRODUCTS  from "../availableProducts"

const Store = () => {
  const [products, setProducts] = useState(AVAILABLE_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [renderPage, setRenderPage] = useState('products');

  const addToCart = (product) => {
    if(!cart.includes(product)){
      setCart([...cart, product ]);
    }
  }

  const removeFromCart = (product) => {
    cart.splice(cart.indexOf(product),1);
    setCart([...cart]);
  }

  return (
    <>
      <button onClick={() => {setRenderPage('products')}}>Products</button>
      <button onClick={() => {setRenderPage('cart')}}>Cart</button>
      <main>
      {renderPage === 'products' ? <ProductsList products={products} addToCart={addToCart}/> : <Cart cart={cart} removeFromCart={removeFromCart}/>}
      </main>
    </>
  )
}

export default Store;
