import React from 'react'

function Listing() {
    return (
        <div className='cover mb-5 border-1 border-gray-300 shadow1'>
            <div className='row g-0'>
                <div className="col-12 col-lg-3">
                    <img className='h-100' src='/assets/images/img1.jpg' alt='package' />
                </div>

                <div className='col-12 col-lg-7 py-2 px-4 font-16 room-list'>
                    <div className='fs-3 fw-bold'>Hotel Name</div>
                    <div className='font-14 fw-bold mb-2 text-gray-600'>Deluxe King Room</div>

                    <div className='row'>
                        <div className='col-12 col-lg-2 py-1 fw-bold'>Occupancy</div>
                        <div className='col-12 col-lg-auto py-1 seprater'>:</div>
                        <div className='col-12 col-lg py-1'>2 Adults and 1 Children</div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-lg-2 py-1 fw-bold'>Bedding</div>
                        <div className='col-12 col-lg-auto py-1 seprater'>:</div>
                        <div className='col-12 col-lg py-1'>1 King Bed or 2 Queen Beds</div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-lg-2 py-1 fw-bold'>Location</div>
                        <div className='col-12 col-lg-auto py-1 seprater'>:</div>
                        <div className='col-12 col-lg py-1'>Surya Resort, New Delhi</div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-lg-2 py-1 fw-bold'>Size</div>
                        <div className='col-12 col-lg-auto py-1 seprater'>:</div>
                        <div className='col-12 col-lg py-1'>37sqm/785sqft</div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-lg-2 py-1 fw-bold'>Amenities</div>
                        <div className='col-12 col-lg-auto py-1 seprater'>:</div>
                        <div className='col-12 col-lg py-1'>Parking, Reception, Free Wifi</div>
                    </div>
                </div>
                <div className="col-12 col-md">
                    <div className='pricecol p-3 border-1-left border-gray-300 bg-gray-200'>
                        <div className='cover mb-3 fw-bold'>
                            <div>Per Day Price</div>
                            <div className='fs-5'> INR 500</div>
                        </div>
                        <div className='cover fw-bold my-2 '>
                            <div>Total 7 Nights</div>
                            <div className='fs-2'> INR 3500</div>
                        </div>
                        <button type="button" className="btn btn-primary py-2 px-3 w-100" >View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing