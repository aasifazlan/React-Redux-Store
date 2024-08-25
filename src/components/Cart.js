import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
 

const Cart = () => {
  const cartItems = useSelector(state => state.cart)
  console.log(cartItems);
   
  const dispatch = useDispatch()
  const removefromCart=(id)=>{
       dispatch(remove(id));

  }
  return (
    <div className='ml-20 mt-14 '>
           {cartItems.map((product, id)=>
         <div key={product.id} className="w-[200px] min-h-[200px] bg-slate-400 flex flex-col justify-center items-center  rounded ">
           
          
         <img className='w-[200px] h-[150px]' src={product.category.image} alt="" /> 
         {/* <img src={product.image} alt="" /> */}
         <h1>{product.category.name} </h1>
         {/* <p>{Prod[0].description}</p> */}
         {/* <p>Inr {product.price} </p> */}
         <button onClick={()=>removefromCart(product.id)} className="bg-red-700 rounded pl-2 pr-2"> Remove Item</button>
       </div>
      )}
    </div>
   
  )
}

export default Cart
