import React, { Fragment } from 'react';
import Listing from './Listing';
import BookingForm from '../BookingForm/BookingForm';

function HotelListIndex() {
    return (
        <Fragment>
            <div className='container-fluid bg-gray-200 py-1 mb-4'>
                <div className="container"><BookingForm /></div>
            </div>

            <div className='container-fluid'>
                <div className='container'>
                    <Listing />
                    <Listing />
                    <Listing />
                </div>
            </div>
        </Fragment>
    )
}

export default HotelListIndex