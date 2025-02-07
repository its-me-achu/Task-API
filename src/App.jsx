import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cartmodal from './components/Cartmodal';

function App() { 
  const  [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  }
  const closeCart = () => {
    setIsCartOpen(false);
  } 
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter ((items) => items.id !== productId))
  }
  return (
   <>
   <div className='bg-gray-400 min-h-screen'>
    <Navbar cartCount={cartItems.length} openCart={openCart}/>
    <Products cartItems={cartItems} setCartItems={setCartItems}/>
    {
      isCartOpen && (
        <Cartmodal cartItems={cartItems} closeCart={closeCart} removeFromCart={removeFromCart}/>
      )
    }
   </div>
    </>
  )
}

export default App