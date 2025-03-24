import { Button, InputLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserData } from "../utils/store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        {
          emailId:data.emailId,
          password:data.password,
        },
        { withCredentials: true }
      );
      dispatch(addUserData(response.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data);
      console.error(err);
    }
  };
  const handleSignIn=async()=>{
    try{
      const response = await axios.post(
        BASE_URL + "/signup",
        {
          firstName:data.firstName,
          lastName:data.lastName,
          emailId:data.emailId,
          password:data.password,
        },
        { withCredentials: true }
      );
      dispatch(addUserData(response.data.data));
      navigate("/profile");
    }
    catch(err){
      setError(err?.response?.data);
      console.error(err);
    }
  }
  return (
    <div className="relative">
      <img
        src="src/utils/loginbg1.webp "
        className="w-[100vw] absolute -top-17 -z-10 left-0 h-[100vh] "
        alt=""
      />
      <div className="w-[27rem] mx-auto pt-10 shadow-lg bg-white rounded-[20px] ">
        <p className=" text-center mb-5 text-xl font-semibold ">{isSignIn?"Sign up":"Login"}</p>
        <form
          action=""
          className="mx-auto w-[80%] flex flex-col  gap-4 pb-10"
          onSubmit={(e) => {
            e.preventDefault();
            isSignIn?handleSignIn():handleLogin()
          }}
        >
          { isSignIn && 
            <>
              <TextField
                id="standard-basic"
                label="First Name"
                variant="filled"
                value={data?.firstName}
                onChange={(e) => setData({...data,firstName:e.target.value})}
                // sx={{input:{color:"white"}}}
              />
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="filled"
                className="w-full"
                value={data?.lastName}
                onChange={(e) => setData({...data,lastName:e.target.value})}
              />
            </>
          }
          <TextField
            id="standard-basic"
            label="Email"
            variant="filled"
            className="w-full"
            value={data?.emailId}
            onChange={(e) => setData({...data,emailId:e.target.value})}
          />
          <TextField
            id="standard-basic"
            type="password"
            label="Password"
            variant="filled"
            className="w-full"
            value={data?.password}
            onChange={(e) => setData({...data,password:e.target.value})}
          />
          <Button variant="contained" sx={{ paddingY: 1.5 }} type="submit">
            {isSignIn?"Sign Up":"Login"}
          </Button>
          {error && <p className="text-red-500">{error}</p>}
          <p className="mx-auto cursor-pointer text-blue-800 font-semibold text-sm" onClick={()=>{
            setError("")
            setIsSignIn(!isSignIn)}}>{isSignIn?"Existing User ? Login here":"New User ? Signup here"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
