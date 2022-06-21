import { useState } from "react"
import Cart from "./Cart"
import ProductsList from "./ProductsList"
import Checkout from "./Checkout"
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
    setCart(cart.filter(element => element !== product));
  }

  const checkout  = () => {
    setRenderPage('checkout');
  }

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <button className="nav__button" onClick={() => {setRenderPage('products')}}>Products</button>
          <button className="nav__button" onClick={() => {setRenderPage('cart')}}>Cart</button>
        </nav>
      </header>
      <main className="main">
        {renderPage === 'products' && <ProductsList products={products} addToCart={addToCart}/> }
        {renderPage === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} checkout={checkout}/>}
        {renderPage === 'checkout' && <Checkout cart={cart}/>}
      </main>
    </>
  )
}

export default Store;
