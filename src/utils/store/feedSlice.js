import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({
    name:"feedSlice",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>action.payload,
        removeCard:(state,action)=>{
            const newArray=state.filter((req)=>req._id!=action.payload)
            return newArray
        }
    }
})
export const {addFeed,removeCard}=feedSlice.actions;
export default feedSlice.reducer;