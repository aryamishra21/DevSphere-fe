import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRequestsList } from '../utils/store/requestsSlice'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { Button } from '@mui/material'

const Requests = () => {
    const dispatch=useDispatch()

    const requests=useSelector(store=>store.requests)
    console.log(requests)
    const fetchRequests=async()=>{
        try{
            // if(requests) return
            const response=await axios.get(BASE_URL+'/user/request/received',{withCredentials:true})
            console.log(response)
            dispatch(addRequestsList(response?.data?.requestReceived))
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        console.log('her')
        fetchRequests();
    },[])
  return (
    <div>
        <p className='text-center text-semibold text-5xl my-10'>Requests</p>
        <div>
        <div className='flex flex-col gap-10'>
            {requests && requests.map((request)=>{
                const{_id,firstName,lastName,age,gender,about,skills,photoUrl}=request.fromUserId
                return(
                    <div className='bg-linear-to-r from-[#60b7e8] to-[#dfe4a8] rounded-2xl text-white w-[60%] mx-auto flex p-5 gap-4 text-sm' key={_id}>
                        <img src={photoUrl} alt="" className='size-[8rem] rounded-full'/>
                        <div>
                        <p className='font-semibold text-xl py-1'>{firstName} {lastName}</p>
                        <p className='py-1'>{age} {gender}</p>
                        <p className='py-1'>{about}</p>
                        <p className='py-1'>{skills && skills.join(', ')}</p>
                        </div>
                        <div className='self-end ml-auto flex gap-3'>
                            <Button variant="contained">ACCEPT</Button>
                            <Button variant="outlined" sx={{border:"2px solid red",color:"red" }}>REJECT</Button>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default Requests