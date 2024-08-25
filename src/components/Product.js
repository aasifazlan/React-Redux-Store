import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { add } from '../store/cartSlice'

const Product = () => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState([])

  useEffect(()=>{
    fetchProduct()
  }, [])
 
  const fetchProduct = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await response.json()
      console.log(data)
      setProduct(data)
       
    } catch (error) {
      console.error('Error')
    }
  }



  const AddToCart=(pro)=>{
    dispatch(add(pro))

  };
  return (
    <div className='flex flex-wrap items-center justify-center'>
      {product.map((prod, id)=>( <div key={prod.id} className='w-[320px] min-h-[360px] bg-purple-300 mt-20 ml-5 p-5 rounded-md'>
        <img src={prod.category.image} alt="" />
        <div className='flex flex-col items-center justify-center'>
        <p> {prod.title}</p>
        <h1>Price : {prod.price} $</h1>
        <button onClick={()=>AddToCart(prod)}  className='bg-blue-500 px-5 rounded-md font-semibold mt-2'>Add</button>
        </div>
        
       
      </div>))}
     
    </div>
  )
}

export default Product
