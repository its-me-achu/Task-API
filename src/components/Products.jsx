import React, { useEffect, useState } from 'react'

function Products({cartItems, setCartItems}) {
    const [product, setProduct] = useState([]);

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
.then (res => res.json())
.then (data => setProduct(data))
    }, []);
     const addtoCart =(figure) => {
      if(cartItems.find ((item) => item.id === figure.id)){
        alert("Product Already added to your cart");
      }else {
        setCartItems([...cartItems, figure]);
      }
     }

  return (
    <>
    <div className='grid grid-cols-1 md-grid-cols-3 gap-4 p-4'> {product.map((figure) =>(
         <div className='border border-gary-500 rounded-sm shadow-lg bg-white p-5'>
            <img className='mx-auto h-50 mb-5' src={figure.image} alt='image' />
            <h2 className='text-lg font-semibold text-gray-700 font-serif'>{figure.title}</h2>
            <p className='text-lg font-bold text-red-500 font-serif'>Rs.{figure.price}</p>
            <button  onClick={() => addtoCart(figure)}
            className='bg-gray-500 text-black w-full py-2 my-2 rounded-full font-semibold font-serif hover:bg-yellow-400'>
                Add to cart</button>
         </div>
    ))}
    </div>
    </>
  )
}

export default Products