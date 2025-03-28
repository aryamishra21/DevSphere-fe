import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'userSlice',
    initialState:null,
    reducers:{
        addUserData:(state,action)=>{
            return action.payload
        },
        removeUserData:(state,action)=>{
            return null
        }
    }
})
export const {addUserData,removeUserData}=userSlice.actions;
export default userSlice.reducer;