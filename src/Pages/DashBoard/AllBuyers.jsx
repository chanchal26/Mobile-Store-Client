import React, { useEffect, useState } from 'react';

const AllBuyers = () => {

    const [allBuyer, setAllBuyer] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allBuyers')
            .then(res => res.json())
            .then(data => setAllBuyer(data))
    }, []);

    return (
        <div>
            <div className="flex flex-col text-center w-full my-6">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All Buyers</h1>
            </div>
            {/* <div className="container p-2 mx-auto sm:p-4 text-gray-100">
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
                                            <span className="px-3 py-1 font-semibold rounded-md bg-indigo-500 text-gray-900">
                                                <button className=' text-white'>Delete</button>
                                            </span>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>
    );
};

export default AllBuyers;