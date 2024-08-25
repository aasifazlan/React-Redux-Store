import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const cartItems = useSelector(state => state.cart)
  return (
    <div>
      <div className=' flex justify-between items-center  h-14 w-full top-0  px-7 rounded-md text-xl font-semibold drop-shadow-md  border-green-400 fixed  backdrop-blur-lg'>
         <h2>Degimon </h2>
          <div>
            <Link to='/'>Home</Link>
         <Link className='mx-5' to='/cart'> Cart {cartItems.length}   </Link>
         </div>

      </div>
    </div>
  )
}

export default Header
