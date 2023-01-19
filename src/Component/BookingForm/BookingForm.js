import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { Input } from '../../Shared/SharedIndex';
import { SlCalender } from 'react-icons/sl';
import { FaPlus, FaMinus } from 'react-icons/fa';

function BookingForm(props) {
    const { ButtonText, getBookingFormFn } = props

    const [isOpen, setIsOpenFun] = useState(false);
    const [BookingState, SetBookingStateFn] = useState({
        location: "",
        checkin: "",
        checkout: "",
        adult: 1,
        children: 1
    })
    const { location, checkin, checkout, adult, children } = BookingState;
    const bookingHandle = (str, parm) => {
        if (str === "LOCATION") {
            SetBookingStateFn({
                ...BookingState,
                location: parm.target.value
            })
        }
        else if (str === "CHECK_IN") {
            SetBookingStateFn({
                ...BookingState,
                checkin: parm
            })
        }
        else if (str === "CHECK_OUT") {
            SetBookingStateFn({
                ...BookingState,
                checkout: parm
            })
        }

        if (str === "ROOM_DEC" && adult > 1) {
            SetBookingStateFn({
                ...BookingState,
                adult: adult - 1
            })

        }
        else if (str === "ROOM_INC") {
            SetBookingStateFn({
                ...BookingState,
                adult: adult + 1
            })
        }

        else if (str === "GUEST_DEC" && children > 1) {
            SetBookingStateFn({
                ...BookingState,
                children: children - 1
            })
        }

        else if (str === "GUEST_INC") {
            SetBookingStateFn({
                ...BookingState,
                children: children + 1
            })
        }
    }

    const handleCalendarClose = () => { setIsOpenFun(!isOpen) }

    const searchHandle = () => {
        getBookingFormFn(BookingState)
    }

    return (
        <div className="row align-items-end">
            <div className="my-2 col-12 col-md">
                <label className="mb-1 fw-bold"> Location</label>
                <Input
                    inputStyleClass={'p-2 border-1 border-gray-400'}
                    type={'text'}
                    value={location}
                    onChange={(e) => bookingHandle("LOCATION", e)}
                />
            </div>
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
                            onChange={(date) => bookingHandle("CHECK_IN", date)}
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
                            onChange={(date) => bookingHandle("CHECK_OUT", date)}
                            onCalendarClose={handleCalendarClose}
                            dateFormat="dd-MM-yyyy"
                        />
                    </div>
                    <div className="col-auto py-2 px-3 bg-gray-300 border-1-left border-gray-400"> <SlCalender /></div>
                </div>
            </div>

            <div className="my-2 col-6 col-md-2">
                <label className="mb-2 fw-bold"> Adult</label>
                <div className="row gx-0 border-1 border-gray-400 ">
                    <div className="col-auto py-2 px-3 bg-gray-300 border-1-right border-gray-400" onClick={() => bookingHandle("ROOM_DEC")}><FaMinus /></div>
                    <div className="col d-flex align-items-center justify-content-center bg-white border_left1 border_right1 bordercolor2_4"> <span>{adult}</span></div>
                    <div className="col-auto py-2 px-3 bg-gray-300 border-1-left border-gray-400" onClick={() => bookingHandle("ROOM_INC")}> <FaPlus /></div>
                </div>
            </div>
            <div className="my-2  col-6 col-md-2">
                <label className="mb-2 fw-bold"> Children</label>
                <div className="row gx-0 border-1 border-gray-400">
                    <div className="col-auto py-2 px-3 bg-gray-300 border-1-right border-gray-400" onClick={() => bookingHandle("GUEST_DEC")}><FaMinus /></div>
                    <div className="col d-flex align-items-center justify-content-center bg-white border_left1 border_right1 bordercolor2_4"> <span>{children}</span></div>
                    <div className="col-auto py-2 px-3 bg-gray-300 border-1-left border-gray-400" onClick={() => bookingHandle("GUEST_INC")}> <FaPlus /></div>
                </div>
            </div>
            <div className="my-2 col-auto">
                <button type="button" className="btn btn-primary py-2 px-3" onClick={() => searchHandle()}>{ButtonText}</button>
            </div>
        </div>

    )
}

export default BookingForm



