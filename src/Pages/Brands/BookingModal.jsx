import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Form, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const BookingModal = ({ data }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const { model, sellingPrice } = data;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const phone = e.target.phone.value;
        const location = e.target.address.value;
        const product = {
            name: displayName,
            email: email,
            model: model,
            price: sellingPrice,
            phone: phone,
            location: location
        };
        fetch('https://mobile-store-server.vercel.app/myOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Congrats ! Your Booking Successful.')
            })

        fetch(`https://mobile-store-server.vercel.app/deletePhone/${data._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    navigate('/')
                }
            });


    };



    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Confirm Booked !</h3>
                    <p className="py-4">Name : {user.displayName}</p>
                    <p className="py-4">Email : {user.email}</p>
                    <p className="py-4">Model : {data.model}</p>
                    <p className="py-4">Price : {data.sellingPrice}</p>
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-neutral-600"> Phone Number </label>
                            <div className="mt-1">
                                <input id="phone" name="phone" type="phone" autoComplete="phone" required placeholder="Your Phone Number" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-neutral-600"> Your Location </label>
                            <div className="mt-1">
                                <input id="address" name="address" type="address" autoComplete="address" required placeholder="Your Address" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div className="modal-action">
                            <button type='submit' className="btn">Okay</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;