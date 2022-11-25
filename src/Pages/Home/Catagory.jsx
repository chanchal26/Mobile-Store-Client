import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = () => {
    return (
        <section class="bg-white">
            <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <h2 class="text-3xl font-bold text-gray-600 sm:text-4xl">
                        Brand Category
                    </h2>

                    <p class="mt-4 text-gray-500 sm:text-xl">
                        A good phone should last you for at least several years, have a great camera, a nice screen, long battery life, and be fast enough to do all the work and social networking. So to help you figure out the best, we rounded up the best phone to buy in 2022. From its battery life to camera performance, each phone is remarkable.
                    </p>
                </div>

                <div class="mt-8 sm:mt-12">
                    {/* <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <Link to='/iphone'
                            class="bg-gray-400 hover:bg-gray-500 flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                        >

                            <dd class="text-4xl font-extrabold text-indigo-600 md:text-5xl">
                                Iphone
                            </dd>
                        </Link>

                        <Link to='/lg'
                            class="bg-gray-400 hover:bg-gray-500 flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                        >

                            <dd class="text-4xl font-extrabold text-indigo-600 md:text-5xl">LG</dd>
                        </Link>

                        <Link to='/mi'
                            class="bg-gray-400 hover:bg-gray-500 flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                        >

                            <dd class="text-4xl font-extrabold text-indigo-600 md:text-5xl">MI</dd>
                        </Link>
                        <Link to='/onePlus'
                            class="bg-gray-400 hover:bg-gray-500 flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                        >

                            <dd class="text-4xl font-extrabold text-indigo-600 md:text-5xl">OnePlus</dd>
                        </Link>
                    </dl> */}
                </div>
            </div>
        </section>

    );
};

export default Catagory;