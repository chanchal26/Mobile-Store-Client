import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const BookingModal = ({ data }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const { model, sellingPrice } = data;
    const handleClick = () => {
        const phone = {
            name: displayName,
            email: email,
            model: model,
            price: sellingPrice
        };
        fetch('http://localhost:5000/myOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(phone)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Confirm Booked !</h3>
                    <p className="py-4">Name : {user.displayName}</p>
                    <p className="py-4">Email : {user.email}</p>
                    <p className="py-4">Model : {data.model}</p>
                    <p className="py-4">Price : {data.sellingPrice}</p>
                    <div className="modal-action">
                        <label onClick={handleClick} htmlFor="booking-modal" className="btn">Okay</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;