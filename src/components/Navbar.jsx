import React from 'react'

function Navbar({openCart, cartCount}) {
  return (
   <>
   <nav className='bg-yellow-500 text-black flex justify-between items-center p-5 font-semibold text-3xl
   font-serif'>
   <h1> KING & QUEEN SHOP</h1>
   <button className='bg-gray-500 px-5 py-2 rounded-full' onClick={openCart}>
    Your Cart : {cartCount}
   </button>
   </nav>
   </>
  )
}

export default Navbar