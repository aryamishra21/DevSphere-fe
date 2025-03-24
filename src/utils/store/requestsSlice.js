import { createSlice } from "@reduxjs/toolkit";

const requestsSlice=createSlice({
    name:"requestsSlice",
    initialState:null,
    reducers:{
        addRequestsList:(state,action)=>action.payload,
        handleRequest:(state,action)=>{
            const newArray=state.filter((req)=>req._id!=action.payload)
            return newArray
        }
    }
})
export const {addRequestsList,handleRequest}=requestsSlice.actions;
export default requestsSlice.reducer;