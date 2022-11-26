import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const DashBoard = () => {
    return (
        <div>
            <Header />
            <div className='flex'>
                <div className="flex flex-col h-full p-3 w-60 text-gray-700">
                    <div className="space-y-3">
                        <div className="flex items-center justify-center">
                            <h2 className='text-2xl font-bold'>Dashboard</h2>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="py-2 rounded-sm hover:bg-gray-200 flex items-center justify-center">
                                    <Link rel="noopener noreferrer" to="/dashboard/addProduct" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>Add A Product</span>
                                    </Link>
                                </li>
                                <li className="py-2 rounded-sm hover:bg-gray-200 flex items-center justify-center">
                                    <Link rel="noopener noreferrer" to="/dashboard/myProducts" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>My Product</span>
                                    </Link>
                                </li>
                                <li className="py-2 rounded-sm hover:bg-gray-200 flex items-center justify-center">
                                    <Link rel="noopener noreferrer" to="/dashboard/myOrders" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>My Orders</span>
                                    </Link>
                                </li>
                                <li className="py-2 rounded-sm hover:bg-gray-200 flex items-center justify-center">
                                    <Link rel="noopener noreferrer" to="/dashboard/allBuyers" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>All Buyers</span>
                                    </Link>
                                </li>
                                <li className="py-2 rounded-sm hover:bg-gray-200 flex items-center justify-center">
                                    <Link rel="noopener noreferrer" to="/dashboard/allSellers" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>All Sellers</span>
                                    </Link>
                                </li>
                                <li className="py-2 rounded-sm hover:bg-gray-200 flex items-center justify-center">
                                    <Link rel="noopener noreferrer" to="/dashboard/payment" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span>Payment</span>
                                    </Link>
                                </li>
                                <li className="py-2 rounded-sm text-gray-700 hover:bg-gray-200 flex items-center justify-center">
                                    <Link rel="noopener noreferrer" to="/dashboard/wishList" className="flex items-center p-2 space-x-3 rounded-md">
                                        <span className='text-center'>Wishlist</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashBoard;