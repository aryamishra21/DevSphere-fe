import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnectionsList } from '../utils/store/connectionsSlice'
import store from '../utils/store/store'

const Connections = () => {
    const dispatch=useDispatch()

    const connections=useSelector(store=>store.connections)
    const fetchConnections=async()=>{
        try{
            if(connections) return
            const response=await axios.get(BASE_URL+'/user/connections',{withCredentials:true})
            console.log(response)
            dispatch(addConnectionsList(response?.data))
        }
        catch(err){
            console.log('here1x')
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchConnections();
    },[])
  return (
    <div>
        <p className='text-center text-semibold text-5xl my-10'>Connections</p>
        <div>
        <div className='flex flex-col gap-10'>
            {connections && connections.map((connection)=>{
                const{_id,firstName,lastName,age,gender,about,skills,photoUrl}=connection
                return(
                    <div className='bg-linear-to-r from-[#60b7e8] to-[#dfe4a8] rounded-2xl text-white w-[60%] mx-auto flex p-5 gap-4 text-sm' key={_id}>
                        <img src={photoUrl} alt="" className='size-[8rem] rounded-full'/>
                        <div>
                        <p className='font-semibold text-xl py-1'>{firstName} {lastName}</p>
                        <p className='py-1'>{age} {gender}</p>
                        <p className='py-1'>{about}</p>
                        <p className='py-1'>{skills && skills.join(', ')}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default Connections