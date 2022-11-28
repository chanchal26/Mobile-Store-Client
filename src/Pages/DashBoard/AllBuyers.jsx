import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const [allBuyer, setAllBuyer] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch('https://mobile-store-server.vercel.app/allBuyers')
            .then(res => res.json())
            .then(data => setAllBuyer(data))
    }, [refresh]);

    const handleMakeAdmin = (id) => {
        fetch(`https://mobile-store-server.vercel.app/users/makeAdmin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Make Admin Successful.')
                    setRefresh(true)
                }
            })

    }

    return (
        <div>
            <div className="flex flex-col text-center w-full my-6">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All Buyers</h1>
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
                                <th className="p-3">Photo</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBuyer && allBuyer.map(buyer =>
                                    <tr key={buyer._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                        <td className="p-3">
                                            <img className='w-10' src={buyer.photoURL} alt="" />
                                        </td>
                                        <td className="p-3">
                                            <p>{buyer.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{buyer.email}</p>
                                        </td>
                                        <td className="p-3 ">
                                            {
                                                buyer?.adminRole ? <>
                                                    <span className="px-3 py-1 font-semibold rounded-md bg-indigo-300 text-gray-900">
                                                        <button disabled className=' text-white'>Admin</button>
                                                    </span>
                                                </> : <>
                                                    <span className="px-3 py-1 font-semibold rounded-md bg-indigo-500 hover:bg-indigo-600 text-gray-900">
                                                        <button onClick={() => handleMakeAdmin(buyer._id)} className=' text-white'>Make Admin</button>
                                                    </span>
                                                </>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Helmet>
                <title>All Buyers</title>
            </Helmet>
        </div>
    );
};

export default AllBuyers;