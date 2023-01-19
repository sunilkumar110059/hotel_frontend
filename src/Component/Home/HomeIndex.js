import React from 'react';
import { useNavigate } from "react-router-dom";
import BookingForm from '../BookingForm/BookingForm';

function HomeIndex() {
    const Navigate = useNavigate()
    
    const getBookingFormFn = async (data) => {
        let res = await data
        const queryString = new URLSearchParams(res).toString();
        Navigate(`/hotellist/query?${queryString}`)
    }
    

    return (
        <div className='fullheight'>
            <div className='middle'>
                <img src='assets/images/slide_banner.jpg' alt='Slide Banner' />
            </div>
            <div className='bottom'>
                <div className='container-fluid bg-gray-200 py-1'>
                    <div className="container">
                        <BookingForm
                            getBookingFormFn={(data) => getBookingFormFn(data)}
                            ButtonText={'Check Availbility'}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeIndex