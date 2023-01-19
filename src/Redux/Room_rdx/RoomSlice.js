import { createSlice } from '@reduxjs/toolkit';
import { postBookingActionFn } from './RoomAction';


let RoomSlice = createSlice({
    name: "ROOM",
    initialState: {
        availableRooms: [],
        status: "",
    },

    extraReducers: {
        //========== Get Method start
        // [getProductActionFn.fulfilled]: (state, action) => {
        //     return {
        //         ...state,
        //         availableRooms: action.payload,
        //         status: "SUCCESS",
        //     }
        // },
        // [getProductActionFn.pending]: (state, action) => {
        //     return { ...state, status: "LOAD" }
        // },

        // [getProductActionFn.rejected]: (state, action) => {
        //     return { ...state, status: "FAILED" }
        // },
        //========== Get Method end


        //========== Post Method start
        [postBookingActionFn.fulfilled]: (state, action) => {
            return {
                ...state,
                availableRooms: [...state.availableRooms, action.payload],
                status: "Success",
            }
        },
        [postBookingActionFn.pending]: (state, action) => {
            return { ...state, status: "LOAD" }
        },

        [postBookingActionFn.rejected]: (state, action) => {
            return { ...state, status: "FAILED" }
        },
        //========== Post Method end
    }
})

const {
    // actions,
     reducer } = RoomSlice
// export const { cartIncActionFn, cartDecActionFn, cartRemoveActionFn, cardResetActionFn } = actions;
export const RoomSliceReducer = reducer