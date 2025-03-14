import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice=createSlice({
    name:"connectionSlice",
    initialState:null,
    reducers:{
        addConnectionsList:(state,action)=>action.payload,
        removeConnectionsList:(state,action)=>null,
    }
})
export const {addConnectionsList,removeConnectionsList}=connectionsSlice.actions;
export default connectionsSlice.reducer;