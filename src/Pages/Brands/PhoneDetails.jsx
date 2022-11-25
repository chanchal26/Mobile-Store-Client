import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhoneDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>Details</h2>
        </div>
    );
};

export default PhoneDetails;