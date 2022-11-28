import React, { useContext, useState } from 'react';
import DatePicker from 'react-date-picker';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Form, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const AddProduct = () => {
    const [value, onChange] = useState(new Date());
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const brand = form.brand.value;
        const model = form.model.value;
        const img = form.url.value;
        const date = form.date.value;
        const year = form.number.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const sellingPrice = form.sellingPrice.value;
        const buyingPrice = form.buyingPrice.value;
        const sellerName = user.displayName;
        const photoURL = user.photoURL;
        const product = {
            name,
            email,
            phone,
            img,
            brand,
            model,
            date,
            year,
            address,
            sellingPrice,
            buyingPrice,
            sellerName,
            photoURL,
        };
        fetch('https://mobile-store-server.vercel.app/allPhones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('You Successfully Added your Product');
                navigate('/dashboard/myProducts')
            })
    }

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 pb-12 mx-auto">
                <div className="flex flex-col text-center w-full my-6">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add A Product</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <Form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-600"> Full Name </label>
                            <div className="mt-1">
                                <input id="name" name="name" type="text" defaultValue={user?.displayName} disabled autoComplete="name" required placeholder="Your Name" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" defaultValue={user?.email} disabled autoComplete="email" required placeholder="Your Email" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-neutral-600"> Phone Number </label>
                            <div className="mt-1">
                                <input id="phone" name="phone" type="phone" autoComplete="phone" required placeholder="Your Phone Number" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-neutral-600"> Your Address </label>
                            <div className="mt-1">
                                <input id="address" name="address" type="address" autoComplete="address" required placeholder="Your Address" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="url" className="block text-sm font-medium text-neutral-600"> Photo of Your Phone </label>
                            <div className="mt-1">
                                <input id="url" name="url" type="url" autoComplete="url" required placeholder="Photo URL" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="model" className="block text-sm font-medium text-neutral-600"> Select Your Model</label>
                            <div className="mt-1">
                                <input id="model" name="model" type="model" autoComplete="model" required placeholder="Your Model" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="buyingPrice" className="block text-sm font-medium text-neutral-600">Buying Price</label>
                            <div className="mt-1">
                                <input id="buyingPrice" name="buyingPrice" type="price" autoComplete="buyingPrice" required placeholder="Buying Price" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="sellingPrice" className="block text-sm font-medium text-neutral-600">Selling Price</label>
                            <div className="mt-1">
                                <input id="sellingPrice" name="sellingPrice" type="price" autoComplete="sellingPrice" required placeholder="Selling Price" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="brand" className="block text-sm font-medium text-neutral-600 mb-1">Select Your Brand</label>
                            <select name='brand' className="select select-bordered w-full max-w-2xl">
                                <option value='Iphone'>Iphone</option>
                                <option value='MI'>MI</option>
                                <option value='LG'>LG</option>
                                <option value='OnePlus'>OnePlus</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="year" className="block text-sm font-medium text-neutral-600 mb-1"> Purchase Year </label>
                            <div className="mt-1">
                                <input id="year" name="number" type="number" autoComplete="year" required placeholder="Purchase Year" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="date" className="block text-sm font-medium text-neutral-600"> Today's Date </label>
                            <div className="mt-1">
                                <DatePicker onChange={onChange} value={value} disabled name='date' />
                            </div>
                        </div>
                        <div className='w-1/4'>
                            <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transhtmlForm bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add</button>
                        </div>
                    </Form>
                </div>
            </div>
            <Helmet>
                <title>Add Product</title>
            </Helmet>
        </section>
    );
};

export default AddProduct;