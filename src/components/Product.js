import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter"
const max_rating=5;
const min_rating=1;
function Product({id, title, price , description, category, image}) {
    const [rating]=useState(
        Math.floor(Math.random()*(max_rating-min_rating+1))+min_rating
    );
    const [hasPrime]=useState(Math.random()<0.5)
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p> 

        <Image src={image} height={200} width={200} objectFit="contain"/>
        <h4>{title}</h4>
        <div className='flex'>
            {Array(rating)
                .fill()
                .map((_,i)=>(
                    <StarIcon className='h-5 text-yellow-500'/>
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-2'>
            <Currency quantity={price} currency='GBP'/>
        </div>
        {hasPrime&& (
            <div className='flex items-center space-x-2 -mt-2'>
                <img className='w-8' src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Prime_clear-bg.png" alt="" />
                <p className='text-xs'>Free Next-Day Delivery</p>
            </div>
        )}
        <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product