import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';

const PhoneDetails = () => {
    const data = useLoaderData();



    return (
        <section>
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                    <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                        <div>
                            <div className="relative w-full max-w-lg">
                                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                                <div className="relative">
                                    <img className="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src={data.img} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                        <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <dd className="flex-grow">
                                    <h2 className="mb-3 text-lg font-medium tracking-tighter text-neutral-600">Model : {data.model}</h2>
                                    <p className="text-base leading-relaxed text-gray-400">Market Price : {data.buyingPrice}</p>
                                    <p className="text-base leading-relaxed text-gray-400">Selling Price : {data.sellingPrice}</p>
                                    <p className="text-base leading-relaxed text-gray-400">Uses : {data.year} Year</p>
                                    <label htmlFor="booking-modal" className="btn btn-primary inline-flex items-center mt-6 font-semibold text-White md:mb-2 lg:mb-0 hover:text-neutral-600">Book Now</label>

                                    <BookingModal data={data} />
                                </dd>
                            </div>
                            <div>
                                <dd className="flex-grow">
                                    <h2 className="mb-3 text-lg font-medium tracking-tighter text-neutral-600">Name of Seller : {data.name}</h2>
                                    <p className="text-base leading-relaxed text-gray-400">Email: {data.email}</p>
                                    <p className="text-base leading-relaxed text-gray-400">Phone: {data.phone}</p>
                                    <p className="text-base leading-relaxed text-gray-400">Location: {data.address}</p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhoneDetails;