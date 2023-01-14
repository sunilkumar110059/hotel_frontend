import React from 'react';
import BookingForm from './BookingForm';

function HomeIndex() {
    return (
        <div className='fullheight'>
            <div className='middle'>
                <img src='assets/images/slide_banner.jpg' alt='Slide Banner' />
            </div>
            <div className='bottom'>
                <BookingForm />
            </div>
        </div>
    )
}

export default HomeIndex