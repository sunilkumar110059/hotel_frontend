import { createAsyncThunk } from '@reduxjs/toolkit';
import { availableRooms } from '../../Api/ApiIndex';


export const postBookingActionFn = createAsyncThunk('ROOM/POST', async (data) => {

    try {
        let result = await availableRooms(data)
        console.log("sdfsd", result.data)

    } catch (error) {
        console.log(error);
    }

})







