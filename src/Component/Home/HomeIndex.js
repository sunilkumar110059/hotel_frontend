import React from 'react';
import BookingForm from '../BookingForm/BookingForm';

function HomeIndex() {
    return (
        <div className='fullheight'>
            <div className='middle'>
                <img src='assets/images/slide_banner.jpg' alt='Slide Banner' />
            </div>
            <div className='bottom'>
                <div className='container-fluid bg-gray-200 py-1'>
                    <div className="container"><BookingForm /></div>
                </div> 
                
            </div>
        </div>
    )
}

export default HomeIndex