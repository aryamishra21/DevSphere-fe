import { Button, InputLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserData } from "../utils/store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState('');
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleSubmit = async () => {
    try {
      const response =await axios.post(
        BASE_URL+"/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUserData(response.data));
      navigate('/')
    } catch (err) {
      setError(err?.response?.data)
      console.error(err);
    }
  };
  return (
    <div className="relative">
      <img
        src="src/utils/loginbg1.webp "
        className="w-[100vw] absolute -top-17 -z-10 left-0 h-[100vh] "
        alt=""
      />
      <div className="w-[27rem] mx-auto pt-10 shadow-lg bg-white rounded-[20px] ">
        <form
          action=""
          className="mx-auto w-[80%] flex flex-col  gap-10 pb-10 text-white "
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <TextField
            id="standard-basic"
            label="First Name"
            variant="filled"
            // sx={{input:{color:"white"}}}
            
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="filled"
            className="w-full"
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="filled"
            className="w-full"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="filled"
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" sx={{ paddingY: 1.5 }} type="submit">
            Submit
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
