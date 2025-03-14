import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import feedSlice from './feedSlice'
import connectionsSlice from './connectionsSlice'
import requestsSlice from './requestsSlice'
const store=configureStore({
    reducer:{
        user:userSlice,
        feed:feedSlice,
        connections:connectionsSlice,
        requests:requestsSlice
    }
})
export default store