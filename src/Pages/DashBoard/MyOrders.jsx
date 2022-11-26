import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext);
    const { email } = user;
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])
    console.log(orders);
    return (
        <div>
            <div className="flex flex-col text-center w-full my-6">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All Sellers</h1>
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
                                        <td className="p-3 ">
                                            <span className="px-3 py-1 font-semibold rounded-md bg-indigo-500 text-gray-900">
                                                <button className=' text-white'>Pay</button>
                                            </span>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;