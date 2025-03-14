import { createSlice } from "@reduxjs/toolkit";

const requestsSlice=createSlice({
    name:"requestsSlice",
    initialState:null,
    reducers:{
        addRequestsList:(state,action)=>action.payload,
        removeRequestsList:(state,action)=>null,
    }
})
export const {addRequestsList,removeRequestsList}=requestsSlice.actions;
export default requestsSlice.reducer;