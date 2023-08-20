import React from 'react'
import Headers from '../components/Headers'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import Currency from "react-currency-formatter"
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
const stripePromise=loadStripe(process.env.stripe_public_key)
function checkout() {
    const items=useSelector(selectItems);
    const { data: session } = useSession()
    const total=useSelector(selectTotal)
    const createCheckoutSession=async()=>{
        const stripe=await stripePromise

        //call the backend to create a checkout session
        const checkoutSession=await axios.post('/api/create-checkout-session',
        {
            items:items,
            email:session.user.email
        })
        //redirect user/customer to stripe checkout
        const result=await stripe.redirectToCheckout({
            sessionId:checkoutSession.data.id
        })
        if(result.error){
            alert(result.error.message);
        }
    }
  return (
    <div className='bg-gray-100'>
        <Headers/>

        <main className='lg:flex max-w-screen-2xl mx-auto'>
            {/* {left section} */}
                <div className='flex-grow m-5 shadow-sm'>
                    <img src="https:links.papareact.com/ikj" alt="" 
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>
                            {items.length===0
                                ?"Your Amazon Basket is empty" : "Shopping Basket"
                            }
                        </h1>

                            {items.map((item, i)=>(
                                <CheckoutProduct 
                                    key={i}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    description={item.description}
                                    category={item.category}
                                    image={item.image}
                                    rating={item.rating}
                                    hasPrime={item.hasPrime}
                                />
                            ))}
                        
                    </div>
                </div>
            {/* {right} */}

            <div className='flex flex-col p-10 bg-white shadow-md'>
                {items.length>0&&(
                    <>
                        <h2 className='whitespace-nowrap'>
                            Subtotal ({items.length} items) :
                            <span className='font-bold'>
                            <Currency quantity={total*10} currency="INR"/>
                            </span>
                        </h2>
                        <button 
                            role='link'
                            onClick={createCheckoutSession}
                            className={`button mt-2 ${!session?'from-gray-200 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed':'button'}`}>
                            {!session?"Sign In to checkout":"Proceed to checkout"}
                        </button>
                    </>
                )}
            </div>
        </main>
    </div>
  )
}

export default checkout