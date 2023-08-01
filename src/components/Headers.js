import React from 'react'
import Image from 'next/image';
import{
    SearchIcon,
    MenuIcon,
    ShoppingCartIcon
}from "@heroicons/react/outline"
function Headers() {
  return (
    <header>
        {/* {top nav} */}
        <div className=" flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                    src="https://links.papareact.com/f90"
                    height={40}
                    width={150}
                    objectFit='contain'
                    className='cursor-pointer'
                />
            </div>
            {/* {search} */}
            <div className="hidden sm:flex items-center rounded-md h-10 flex-grow cur bg-yellow-400 hover:bg-yellow-600">
                <input type="text" className='p-2 w-6 flex-grow h-full flex-shrink rounded-l-md focus:outline-none px-4'/>
                <SearchIcon className="h-12 p-4"/>
            </div>
            {/* {right} */}
            <div className='text-white items-center space-x-6 text-xs mx-6 flex'>
                <div className='link'>
                    <p>
                        hello suryansh
                    </p>
                    <p className='font-extrabold md:sm'>accounts & lists</p>
                </div>
                <div className='link'>
                    <p>returns</p>
                    <p className='font-extrabold md:sm'>& orders</p>
                </div>
                <div className='relative flex items-center link'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-black rounded-full text-center font-bold'>0</span>
                    <p><ShoppingCartIcon className='h-10'/></p>
                    <p className='hidden md:inline font-extrabold md:sm mt-2'>Basket</p>
                </div>
            </div>
        </div>

        {/* {bottom nav} */}
        <div className='flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-small'>
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-1'/>
                All
            </p>
            <p className='link'>Prime</p>
            <p className='link'>Today's Deals</p>
            <p className='link'>Amazon Buiseness</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Headers