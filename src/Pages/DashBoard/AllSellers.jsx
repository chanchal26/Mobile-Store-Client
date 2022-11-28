import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const [allSeller, setAllSeller] = useState([])
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch('https://mobile-store-server.vercel.app/allSellers')
            .then(res => res.json())
            .then(data => setAllSeller(data))
    }, [refresh]);

    const handleMakeAdmin = (id) => {
        fetch(`https://mobile-store-server.vercel.app/users/makeAdmin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Make Admin Successful.')
                    setRefresh(true);
                }
            })

    }

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
                                <th className="p-3">Photo</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allSeller && allSeller.map(seller =>
                                    <tr key={seller._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                        <td className="p-3">
                                            <img className='w-10' src={seller.photoURL} alt="" />
                                        </td>
                                        <td className="p-3">
                                            <p>{seller.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{seller.email}</p>
                                        </td>
                                        <td className="p-3 ">
                                            {
                                                seller?.adminRole ? <>
                                                    <span className="px-3 py-1 font-semibold rounded-md bg-indigo-300 text-gray-900">
                                                        <button disabled className=' text-white'>Admin</button>
                                                    </span>
                                                </> : <>
                                                    <span className="px-3 py-1 font-semibold rounded-md bg-indigo-500 hover:bg-indigo-600 text-gray-900">
                                                        <button onClick={() => handleMakeAdmin(seller._id)} className=' text-white'>Make Admin</button>
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
                <title>All Sellers</title>
            </Helmet>
        </div>
    );
};

export default AllSellers;