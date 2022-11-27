import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Advertise = () => {

    const [advertiseItems, setAdvertiseItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => setAdvertiseItems(data))
    }, []);

    console.log(advertiseItems);

    return (
        <div>
            <div className="mx-auto max-w-3xl text-center mt-5">
                <h2 className="text-3xl font-bold text-gray-600 sm:text-4xl">
                    Advertise Items
                </h2>
            </div>
            <section>
                <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">

                            {
                                advertiseItems?.map(phone =>
                                    <div key={phone._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div className="flex-shrink-0">
                                            <img className="object-cover w-full h-48" src={phone.img} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div className="flex-1">
                                                <span className="block mt-2">
                                                    <p className="text-xl font-semibold text-neutral-600">{phone.model}</p>
                                                    <p className="mt-3 text-base text-gray-500">Price: {phone.sellingPrice} Taka</p>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between mt-6">
                                                <div className="flex-shrink-0">
                                                    <span>
                                                        <span className="sr-only">{phone.sellerName}</span>
                                                        <img className="w-10 h-10 rounded-full" src={phone.photoURL} alt="" />
                                                    </span>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-neutral-600">
                                                        <span> {phone.sellerName}</span>
                                                    </p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime="2020-03-16"> {phone.date} </time>
                                                    </div>
                                                </div>
                                                <div className='flex mt-4 space-x-2 justify-end'>
                                                    <button className='btn btn-primary'><Link to={`/allPhones/${phone._id}`}>Details</Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Advertise;