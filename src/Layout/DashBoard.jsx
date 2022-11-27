import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Header />
            <div className='flex'>
                <div className="flex flex-col h-full p-3 w-60 text-gray-700">
                    {/* <div className='lg:hidden'>
                        <div className="drawer drawer-mobile">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content flex flex-col items-center justify-center">
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                    <li><Link>Sidebar Item 1</Link></li>
                                    <li><Link>Sidebar Item 2</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div> */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-center">
                            <h2 className='text-2xl font-bold'>Dashboard</h2>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                {
                                    isSeller && <>
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
                                    </>
                                }
                                {
                                    !isAdmin && !isSeller && <>
                                        <li className="py-2 rounded-sm hover:bg-gray-200 flex items-center justify-center">
                                            <Link rel="noopener noreferrer" to="/dashboard/myOrders" className="flex items-center p-2 space-x-3 rounded-md">
                                                <span>My Orders</span>
                                            </Link>
                                        </li>
                                        <li className="py-2 rounded-sm text-gray-700 hover:bg-gray-200 flex items-center justify-center">
                                            <Link rel="noopener noreferrer" to="/dashboard/wishList" className="flex items-center p-2 space-x-3 rounded-md">
                                                <span className='text-center'>Wishlist</span>
                                            </Link>
                                        </li>
                                    </>
                                }
                                {
                                    isAdmin && <>
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
                                            <Link rel="noopener noreferrer" to="/dashboard/allUsers" className="flex items-center p-2 space-x-3 rounded-md">
                                                <span>All Users</span>
                                            </Link>
                                        </li>
                                    </>
                                }

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