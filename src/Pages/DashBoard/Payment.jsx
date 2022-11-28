import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51M5wiaIrVzbm0HMvaqozjgplhudouPO0dY32CvJa0XhGHtfCcpPnRHkaz0ad6SH8G6XMXpipMHdo2AlSzqQiSGHM000hLx1eTn');


const Payment = () => {
    const data = useLoaderData();
    console.log(data);
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <div className="w-16 h-16 text-center border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    }
    return (
        <div>
            <div className="flex flex-col text-center w-full my-6">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Payment</h1>
            </div>
            <div>
                <p className='text-xl py-5 text-center'>Please Pay {data.price} TK For {data.model}.</p>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        data={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;