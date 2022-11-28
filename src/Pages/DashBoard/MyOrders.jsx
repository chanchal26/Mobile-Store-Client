import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext);
    const email = user.email;
    console.log(orders);

    useEffect(() => {
        if (user) {
            fetch(`https://mobile-store-server.vercel.app/myOrder?email=${email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user]);

    return (
        <div>
            <div className="flex flex-col text-center w-full my-6">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">My Orders</h1>
            </div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Model</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders && orders?.map(order =>
                                    <tr key={order._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">

                                        <td className="p-3">
                                            <p>{order.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{order.email}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{order.model}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{order.price}</p>
                                        </td>
                                        {

                                            order?.price && !order?.paid ? <>
                                                <td className="p-3 ">
                                                    <span>
                                                        <Link to={`/dashboard/payment/${order?._id}`}><button className='px-3 py-1 font-semibold rounded-md text-white btn btn-sm bg-indigo-500'>Pay</button></Link>
                                                    </span>
                                                </td>
                                            </> : <>
                                                <td className="p-3 ">
                                                    <span className="px-3 py-1 font-semibold rounded-md bg-indigo-500 text-gray-900">
                                                        <button className=' text-white disabled'>Paid</button>
                                                    </span>
                                                </td></>
                                        }
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Helmet>
                <title>My Orders</title>
            </Helmet>
        </div>
    );
};

export default MyOrders;