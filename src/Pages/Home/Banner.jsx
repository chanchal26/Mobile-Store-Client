import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section
            class="relative bg-[url(https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)] bg-cover bg-center bg-no-repeat"
        >
            <div
                class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
            ></div>

            <div
                class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                {/* <div class="max-w-xl text-center sm:text-left">
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                        Let us find your

                        <strong class="block font-extrabold text-indigo-500">
                            Dream Phone.
                        </strong>
                    </h1>

                    <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                        Connect with Facebook to confirm who you are. An admin will review your request for approval.<br />Transact with other verified people in your neighbourhood. Sell stuff quickly & find amazing bargains.
                    </p>

                    <div class="mt-8 flex flex-wrap gap-4 text-center">
                        <Link
                            to="/allPhones"
                            class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Go To Store
                        </Link>

                        <Link
                            to="/dashboard"
                            class="bg-white items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            See Dashboard
                        </Link>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Banner;