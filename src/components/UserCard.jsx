import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { removeCard } from '../utils/store/feedSlice'
const UserCard = ({data}) => {
  const dispatch=useDispatch();
    const{_id,firstName,lastName,age,gender,about,skills,photoUrl}=data
    const handleRequest=async(status,_id)=>{
      try{
        const response=await axios.post(BASE_URL+'/request/send/'+status+'/'+_id,{},{withCredentials:true})
        dispatch(removeCard(_id))
      }
      catch(err){
        console.log(err)
      }
    }
  return (
    <div className='w-[25rem]  bg-linear-to-r from-[#60b7e8] to-[#dfe4a8] text-white rounded-xl shadow-lg '>
        <div className='h-[20rem] w-full'>
            <img src={photoUrl} className=' mx-auto h-full w-full object-cover rounded-lg' alt="" />
        </div>
        <div className='p-3 text-sm flex flex-col gap-2'>
        <p className='text-lg'>{firstName +" "+lastName}</p>
        <p><span>{age?age:''}</span> <span>{gender?', '+gender:''}</span></p>
        <p>{about}</p>
        {/* {skills && (skills.length >1 ? skills?.map((skill)=><p>{skill}</p>):<p>{skills}</p>)} */}
        {skills && skills.join(', ')}
        <div className='flex items-center justify-center gap-6 my-2'>
            <Button sx={{background:"red", color:"white", paddingX:"1rem"}} onClick={()=>handleRequest('ignored',_id)}>Ignore</Button>
            <Button variant="contained" onClick={()=>handleRequest('interested',_id)}>Interested</Button>
        </div>
        </div>
    </div>
  )
}

export default UserCard