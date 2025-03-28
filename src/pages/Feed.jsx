import React, { useEffect } from 'react'
import UserCard from '../components/UserCard'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/store/feedSlice'

const Feed = () => {
  const dispatch=useDispatch()
  const feed=useSelector(store=>store.feed)
  const getFeed=async()=>{
    try{
      if(feed) return
      const response=await axios.get(BASE_URL+'/user/feed',{withCredentials:true})
      dispatch(addFeed(response.data))
      console.log('feed',response)
    }
    catch(err){
      console.error(err)
    }
  }
  useEffect(()=>{
    getFeed()
  },[])
  if(feed?.length<=0 || !feed) return (<p className="mx-auto text-center text-3xl font-semibold my-20">No users found!</p>)
  return (
    <div>
      <div className='mx-auto flex items-center flex-col gap-10 py-10'>
      {
        feed && feed.map((user)=>{
          return <UserCard data={user}/>
        })
      }
      </div>
    </div>
  )
}

export default Feed