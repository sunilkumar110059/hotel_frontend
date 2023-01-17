import React, { useState } from 'react';
import { Input, SelectBox } from '../../Shared/SharedIndex';

function HotelDetailIndex() {

    const [userDetail, SetUserDetailFun] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        cardtype: "",
    })
    const { firstname, lastname, email, phonenumber, cardtype } = userDetail

    const informationHandle = (event) => {
        const { name, value } = event.target;
        SetUserDetailFun({
            ...userDetail,
            [name]: value
        })
    }
    const submitHandle = () => {
        console.log(userDetail)
    }

    return (
        <div className='wrapper px-4'>
            <div className='container mt-4'>
                <div className="row gx-5">
                    <div className="col-12 col-md p-3 bg-gray-200">
                        <div className='fs-4 fw-bold mb-2'> Booking Summary</div>
                        <div className='cover font-16'>
                            <div className='row'>
                                <div className='col-3 py-2 fw-bold'>Rooms</div>
                                <div className='col-auto py-2 seprater'>:</div>
                                <div className='col py-2'>King Bed Room</div>
                            </div>
                            <div className='row'>
                                <div className='col-3 py-2 fw-bold'>Dates</div>
                                <div className='col-auto py-2 seprater'>:</div>
                                <div className='col py-2'>17/1/2022 - 21/1/2022</div>
                            </div>
                            <div className='row'>
                                <div className='col-3 py-2 fw-bold'>Number of Nights</div>
                                <div className='col-auto py-2 seprater'>:</div>
                                <div className='col py-2'>7</div>
                            </div>
                            <div className='row'>
                                <div className='col-3 py-2 fw-bold'>Guests</div>
                                <div className='col-auto py-2 seprater'>:</div>
                                <div className='col py-2'>1 Adults and 2 Children</div>
                            </div>
                            <div className='row'>
                                <div className='col-3 py-2 fw-bold'>Total</div>
                                <div className='col-auto py-2 seprater'>:</div>
                                <div className='col py-2 fw-bold'>INR 50000</div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md">
                        <div className='fs-4 fw-bold mb-2'> Inter Your Information</div>

                        <div className='row align-items-end'>
                            <div className='col-12 col-md-6 my-2'>
                                <Input
                                    labelText={'First Name'}
                                    labelStyleClass={'d-block mb-1'}
                                    inputStyleClass={'border-1 border-gray-400'}
                                    type={'text'}
                                    name={'firstname'}
                                    value={firstname}
                                    onChange={(e) => informationHandle(e)}
                                />
                            </div>

                            <div className='col-12 col-md-6 my-2'>
                                <Input
                                    labelText={'Last Name'}
                                    labelStyleClass={'d-block mb-1'}
                                    inputStyleClass={'border-1 border-gray-400'}
                                    type={'text'}
                                    name={'lastname'}
                                    value={lastname}
                                    onChange={(e) => informationHandle(e)}
                                />
                            </div>
                            <div className='col-12 col-md-6 my-2'>
                                <Input
                                    labelText={'Email'}
                                    labelStyleClass={'d-block mb-1'}
                                    inputStyleClass={'border-1 border-gray-400'}
                                    type={'text'}
                                    name={'email'}
                                    value={email}
                                    onChange={(e) => informationHandle(e)}
                                />
                            </div>

                            <div className='col-12 col-md-6 my-2'>
                                <Input
                                    labelText={'Phone Number'}
                                    labelStyleClass={'d-block mb-1'}
                                    inputStyleClass={'border-1 border-gray-400'}
                                    type={'text'}
                                    name={'phonenumber'}
                                    value={phonenumber}
                                    onChange={(e) => informationHandle(e)}
                                />
                            </div>

                            <div className='col-12 col-md-6 my-2'>
                                <SelectBox
                                    labelText={'Select Card Type'}
                                    labelStyleClass={'d-block mb-1'}
                                    SelectStyleClass={'border-1 border-gray-400'}
                                    name={'cardtype'}
                                    value={cardtype}
                                    onChange={(e) => informationHandle(e)}
                                    optionData={["one", "Two", "Three"]}
                                />
                            </div>

                            <div className='col-12 col-md-6 my-2'>
                                <button type="button" className="btn btn-primary py-2 px-3" onClick={() => submitHandle()}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDetailIndex