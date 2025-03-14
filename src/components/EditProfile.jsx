import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUserData } from "../utils/store/userSlice";
import { ToastContainer, toast } from 'react-toastify';
const EditProfile = ({ user }) => {
  const [data, setData] = useState(user);
  console.log("dat", data);
  const [error, setError] = useState("");
  const dispatch=useDispatch()
  const handleEdit=async()=>{
    try{
      const response=await axios.patch(BASE_URL+'/profile/edit',
        {
          firstName:data.firstName,
          lastName:data.lastName,
          age:data.age,
          gender:data.gender,
          photoUrl:data.photoUrl,
          about:data.about,
          skills:data.skills
        }
        ,{withCredentials:true})
        console.log(response,'resp')
      dispatch(addUserData(response?.data?.data))
      toast("Profile Updated!");
    }
    catch(err){
      setError(err?.response?.data)
      console.log(err)
    }
  }
  return (
    <div className="flex items-center gap-4 justify-center">
      <ToastContainer/>
      <div className="w-[27rem] pt-10 shadow-lg bg-white rounded-[20px] ">
        <form
          action=""
          className="mx-auto w-[80%] flex flex-col  gap-10 pb-10 "
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit();
          }}
        >
          <TextField
            id="standard-basic"
            label="First Name"
            variant="filled"
            value={data?.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="filled"
            className="w-full"
            value={data?.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
          <TextField
            id="standard-basic"
            type="number"
            label="Age"
            variant="filled"
            className="w-full"
            value={data?.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={data?.gender || ""}
            onChange={(e) => setData({ ...data, gender: e.target.value })}
            displayEmpty
            sx={{
              color: data?.gender ? "black" : "gray",
            }}
          >
            <MenuItem value="" disabled sx={{ display: "none" }}>
              Gender
            </MenuItem>

            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          <TextField
            id="standard-basic"
            label="Image"
            variant="filled"
            className="w-full"
            value={data?.photoUrl}
            onChange={(e) => setData({ ...data, photoUrl: e.target.value })}
          />
          <TextField
            id="standard-basic"
            label="About"
            variant="filled"
            className="w-full"
            multiline
            rows={4}
            value={data?.about}
            onChange={(e) => setData({ ...data, about: e.target.value })}
          />
          <TextField
            id="standard-basic"
            label="Skills"
            variant="filled"
            className="w-full"
            value={data?.skills}
            onChange={(e) => setData({ ...data, skills: e.target.value.split(',') })}
          />
          <Button variant="contained" sx={{ paddingY: 1.5 }} type="submit">
            Submit
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
      <UserCard data={data} />
    </div>
  );
};

export default EditProfile;
