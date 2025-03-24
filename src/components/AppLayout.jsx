import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUserData } from '../utils/store/userSlice'
const AppLayout = () => {
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user)
  const navigate=useNavigate()
  const fetchUser=async()=>{
    try{
      const response=await axios.get(BASE_URL+'/profile/view',{withCredentials:true})
      dispatch(addUserData(response.data))
      navigate('/')
    }
    catch(err){
      if(err.status===401){
        navigate('/login')
      }
      console.log(err)
    }
  }
  useEffect(()=>{
    if(!user){
      fetchUser()
    }
  },[])
  return (
    <div >
        <Header/>
        <Outlet/>
    </div>
  )
}

export default AppLayout