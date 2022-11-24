import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    return (
        <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 bg-gray-100">
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="Mobile Store"
                    title="Mobile Store"
                    className="inline-flex items-center"
                >
                    <img className='w-14' src="" alt="" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Mobile Store
                    </span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <Link
                            to='/'
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 hover:text-indigo-500 transition-colors duration-200 "
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Blog"
                            aria-label="Blog"
                            title="Blog"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-500"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/aboutUs"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-500"
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <div className="dropdown dropdown-bottom">
                            <label tabIndex={0} className="font-semibold cursor-pointer text-gray-700 hover:text-indigo-500">Brands</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/allPhones'>All Phones</Link></li>
                                <li><Link to='/iphone'>Iphone</Link></li>
                                <li><Link to='/mi'>MI</Link></li>
                                <li><Link to='/lg'>LG</Link></li>
                                <li><Link to='/onePlus'>OnePlus</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link
                            to='/dashboard'
                            aria-label="DashBoard"
                            title="DashBoard"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-500"
                        >
                            DashBoard
                        </Link>
                    </li>
                </ul>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    {
                        user?.uid ? <>
                            <li>
                                <img className='w-16 rounded-full' src={user.photoURL} alt="" />
                            </li>
                            <li>
                                <Link
                                    to='/login'
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Log In"
                                    title="Log In"
                                >
                                    <button onClick={logout}>Log Out</button>
                                </Link>
                            </li>
                        </> : <>
                            <li>
                                <Link
                                    to='/login'
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none"
                                    aria-label="Log In"
                                    title="Log In"
                                >
                                    Log In
                                </Link>
                            </li>
                        </>
                    }

                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-gray-100 border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <img className='w-14' src="" alt="" />
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                Mobile Store
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link
                                                to='/'
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-500"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog"
                                                aria-label="blog"
                                                title="blog"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-500"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/aboutUs"
                                                aria-label="About us"
                                                title="About us"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-500"
                                            >
                                                About us
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="dropdown dropdown-bottom">
                                                <label tabIndex={0} className="font-semibold cursor-pointer text-gray-700 hover:text-indigo-500">Brands</label>
                                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><Link to='/allPhones'>All Phones</Link></li>
                                                    <li><Link to='/iphone'>Iphone</Link></li>
                                                    <li><Link to='/mi'>MI</Link></li>
                                                    <li><Link to='/lg'>LG</Link></li>
                                                    <li><Link to='/onePlus'>OnePlus</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link
                                                to='/dashboard'
                                                aria-label="DashBoard"
                                                title="DashBoard"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-500"
                                            >
                                                DashBoard
                                            </Link>
                                        </li>
                                        {
                                            user?.uid ? <>
                                                <ul className='flex items-center space-x-8'>
                                                    <li>
                                                        <Link
                                                            to='/login'
                                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                                            aria-label="Log In"
                                                            title="Log In"
                                                        >
                                                            <button onClick={logout}>Log Out</button>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <img className='w-16 rounded-full' src={user.photoURL} alt="" />
                                                    </li>
                                                </ul>
                                            </> : <>
                                                <li>
                                                    <Link
                                                        to='/login'
                                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="Log In"
                                                        title="Log In"
                                                    >
                                                        Log In
                                                    </Link>
                                                </li>
                                            </>
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;