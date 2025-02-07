import React from 'react'

function Cartmodal({closeCart, cartItems, removeFromCart}) {
  return (
   <>
   <div className='fixed inset-0 bg-opacity-50 flex justify-center items-center'>
    <div className='bg-white p-6 rounded-lg w-80 shadow-xl'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>Your Cart!!!</h2>
        {cartItems.length > 0 ? (
            <div>
                {cartItems.map ((item) => (
                    <div key={item.id} className='flex justify-between items-center mb-2'>
                    <img src={item.image} alt="image" className='w-15 h-15' />
                    <div className='text-gray-600'>{item.title}</div>
                    <button className='text-red-700 hover:underline' 
                    onClick={()=> removeFromCart(item.id)}>
                    Remove
                    </button>
                    </div>
                )
                )}
            </div>
        ):(<p className='text-yellow-600'>Your Cart is Empty.</p>)}
        <button  className='text-gray-700 bg-yellow-500 mt-5 w-full py-2 rounded-full'
        onClick={closeCart}>Close</button>
    </div>
   </div>
   </>
  ) 
}

export default Cartmodal