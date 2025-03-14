import React from "react";
import store from "../utils/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUserData } from "../utils/store/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const handleLogout=async()=>{
    try{
      await axios.post(BASE_URL+'/logout',{},{ withCredentials: true })
      dispatch(removeUserData())
      navigate('/login')
    }
    catch(err){
      console.error(err)
    }
  }
  return (
    <div className={` py-2 px-4 flex justify-between ${user?"bg-linear-to-r from-[#60b7e8] to-[#dfe4a8]":""}`}>
      <Link to="/">
        <img
          className="w-[3rem] rounded-full h-[3rem] object-cover "
          src="src\utils\logo1.webp"
          alt="logo"
        />
      </Link>
      {user && (
        <div className="flex gap-4 items-center">
          <Link to='/requests'>
            Requests
          </Link>
          <Link to='/connections'>
            Connections
          </Link>
          <p>Welcome {user?.firstName}</p>
          <Link to="/profile">
            <img className="w-[3rem] rounded-full h-[3rem] object-cover" src={user?.photoUrl} alt="" />
          </Link>
          <Button variant="contained" onClick={()=>handleLogout()}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};
// bg-linear-to-r from-[#60b7e8] to-[#dfe4a8]
export default Header;
