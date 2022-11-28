import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const [allUser, setAllUser] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch('https://mobile-store-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [refresh]);

    const handleClick = id => {
        fetch(`https://mobile-store-server.vercel.app/deleteUsers/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRefresh(true);
                toast.success('successfully Deleted');
            })
    }

    return (
        <div>
            <div>
                <div className="flex flex-col text-center w-full my-6">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All users</h1>
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
                                    <th className="p-3">Role</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUser.length && allUser.map(user =>
                                        <tr key={user._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                            <td className="p-3">
                                                <img className='w-10' src={user.photoURL} alt="" />
                                            </td>
                                            <td className="p-3">
                                                <p>{user.name}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user.email}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user?.role ? `${user.role}` : 'User'}</p>
                                            </td>
                                            <td className="p-3 ">
                                                <span className="px-3 py-1 font-semibold rounded-md bg-indigo-500 text-gray-900">
                                                    <button onClick={() => handleClick(user._id)} className=' text-white'>Delete</button>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <Helmet>
                    <title>All Users</title>
                </Helmet>
            </div>
        </div>
    );
};

export default AllUsers;