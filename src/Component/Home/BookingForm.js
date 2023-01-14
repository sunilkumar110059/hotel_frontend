import React, { useState } from 'react';
import DatePicker from "react-datepicker";

// import { Input, InputGroup } from '../../Shared/SharedIndex';
import { SlCalender } from 'react-icons/sl';

import { FaPlus, FaMinus } from 'react-icons/fa'


function BookingForm() {
    const [isOpen, setIsOpenFun] = useState(false);
    const [BookingState, SetBookingStateFn] = useState({
        checkin: "",
        checkout: "",
        room: 1,
        guest: 1
    })

    const { checkin, checkout, room, guest } = BookingState;
  
    const bookingHandle = (date, str) => {
        if (str === "CHECK_IN") {
            SetBookingStateFn({
                ...BookingState,
                checkin: date
            })
        }
        else if (str === "CHECK_OUT") {
            SetBookingStateFn({
                ...BookingState,
                checkout: date
            })
        }


        if (str === "ROOM_DEC" && room > 1) {
            SetBookingStateFn({
                ...BookingState,
                room: room - 1
            })

        }
        else if (str === "ROOM_INC") {
            SetBookingStateFn({
                ...BookingState,
                room: room + 1
            })
        }

        else if (str === "GUEST_DEC" && guest > 1) {
            SetBookingStateFn({
                ...BookingState,
                guest: guest - 1
            })
        }

        else if (str === "GUEST_INC") {
            SetBookingStateFn({
                ...BookingState,
                guest: guest + 1
            })
        }
    }
 
    const handleCalendarClose = () => { setIsOpenFun(!isOpen) }
    const searchHandle = () => { 
        console.log(BookingState)
    }

    return (
        <div className='container-fluid bg-gray-200 py-1'>
            <div className="container">
                <div className="row align-items-end">

                    <div className="my-2 col-12 col-md">
                        <label className="mb-1 fw-bold"> Check In</label>
                        <div className="row gx-0 border-1 border-gray-400">
                            <div className="col">
                                <DatePicker
                                    selectsStart
                                    minDate={new Date()}
                                    startDate={checkin}
                                    endDate={checkin}
                                    selected={checkin}
                                    onChange={(date) => bookingHandle(date, "CHECK_IN")}
                                    onCalendarClose={handleCalendarClose}
                                    dateFormat="dd-MM-yyyy"
                                />
                            </div>
                            <div className="col-auto py-2 px-3 bg-gray-300 border-1-left border-gray-400"> <SlCalender /></div>
                        </div>
                    </div>


                    <div className="my-2 col-12 col-md">
                        <label className="mb-1 fw-bold"> Check Out</label>
                        <div className="row gx-0 border-1 border-gray-400">
                            <div className="col">
                                <DatePicker
                                    selectsEnd
                                    // open={isOpen}
                                    minDate={checkin}
                                    startDate={checkin}
                                    endDate={checkin}
                                    selected={checkout}
                                    onChange={(date) => bookingHandle(date, "CHECK_OUT")}
                                    onCalendarClose={handleCalendarClose}
                                    dateFormat="dd-MM-yyyy"
                                />
                            </div>
                            <div className="col-auto py-2 px-3 bg-gray-300 border-1-left border-gray-400"> <SlCalender /></div>
                        </div>
                    </div>

                    <div className="my-2 col-6 col-md-2">
                        <label className="mb-2 fw-bold"> Rooms</label>
                        <div className="row gx-0 border-1 border-gray-400 ">
                            <div className="col-auto py-2 px-3 bg-gray-300 border-1-right border-gray-400" onClick={() => bookingHandle(null, "ROOM_DEC")}><FaMinus /></div>
                            <div className="col d-flex align-items-center justify-content-center bg-white border_left1 border_right1 bordercolor2_4"> <span>{room}</span></div>
                            <div className="col-auto py-2 px-3 bg-gray-300 border-1-left border-gray-400" onClick={() => bookingHandle(null, "ROOM_INC")}> <FaPlus /></div>
                        </div>
                    </div>

                    <div className="my-2  col-6 col-md-2">
                        <label className="mb-2 fw-bold"> Guest</label>
                        <div className="row gx-0 border-1 border-gray-400">
                            <div className="col-auto py-2 px-3 bg-gray-300 border-1-right border-gray-400" onClick={() => bookingHandle(null, "GUEST_DEC")}><FaMinus /></div>
                            <div className="col d-flex align-items-center justify-content-center bg-white border_left1 border_right1 bordercolor2_4"> <span>{guest}</span></div>
                            <div className="col-auto py-2 px-3 bg-gray-300 border-1-left border-gray-400" onClick={() => bookingHandle(null, "GUEST_INC")}> <FaPlus /></div>
                        </div>
                    </div>

                    <div className="my-2 col-auto">
                        <button type="button" className="btn btn-primary py-2 px-3" onClick={() => searchHandle()}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingForm



