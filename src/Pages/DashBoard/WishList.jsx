import React from 'react';
import { Helmet } from 'react-helmet';

const WishList = () => {
    return (
        <div>
            <div className="flex flex-col text-center w-full my-6">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">WishList</h1>
            </div>
            <Helmet>
                <title>WishList</title>
            </Helmet>
        </div>
    );
};

export default WishList;