import React from 'react'
import Image from "next/image"
import { StarIcon } from '@heroicons/react/solid'
import Currency from "react-currency-formatter"
import { useDispatch } from 'react-redux'
import {addToBasket,removeFromBasket} from "../slices/basketSlice";

function CheckoutProduct({
    id, 
    title, 
    price, 
    description, 
    category, 
    image,
    rating, 
    hasPrime
}) {
    const dispatch=useDispatch()

    const addItemToBasket=()=>{
        const product={
            id, 
            title, 
            price, 
            description, 
            category, 
            image,
            rating, 
            hasPrime
        };
        dispatch(addToBasket(product))
    }
    const removeItemFromBasket=()=>{
        dispatch(removeFromBasket({id}))
    }
  return (
    <div className='grid grid-cols-5'>
        <Image
            src={image}
            height={200}
            width={200}
            objectFit='contain'
        />
        {/* {middle} */}
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className='text-xs mt-2 mb-2 line-clamp-3'>
                {description}
            </p>
            <Currency quantity={price*10} currency="INR"/>
            {hasPrime&&(
                <div className='flex items-center space-x-2 '>
                    <img className='w-8' src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Prime_clear-bg.png" alt="" />  
                    <p className='text-xs text-gray-500'>Free Next Day Delivery</p>
                </div>
            )}
        </div>
        <div className='flex flex-col space-y-2 my-auto'>
            <button className='button' onClick={addItemToBasket}>Add to Basket</button>
            <button className='button' onClick={removeItemFromBasket}
            >Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct