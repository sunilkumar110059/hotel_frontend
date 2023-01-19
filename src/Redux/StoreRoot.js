import { configureStore } from '@reduxjs/toolkit';
import { RoomSliceReducer } from './Room_rdx/RoomSlice';


const StoreRoot = configureStore({
    reducer: {
        RoomState: RoomSliceReducer,
        devTools: true,
    },

   // preloadedState: initialState
})

export default StoreRoot