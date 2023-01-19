import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Listing from './Listing';
import BookingForm from '../BookingForm/BookingForm';
import { postBookingActionFn } from '../../Redux/Room_rdx/RoomAction'


function HotelListIndex() {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const getQueryString = () => {
        const location = searchParams.get('location');
        const checkin = searchParams.get('checkin');
        const checkout = searchParams.get('checkout');
        const adult = searchParams.get('adult');
        const children = searchParams.get('children');
        return { location, checkin, checkout, adult, children }
    }
    useEffect(() => {
        let queryString = getQueryString()
        dispatch(postBookingActionFn(queryString))
    }, [])
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