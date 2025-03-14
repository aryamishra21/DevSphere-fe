import React from 'react'
import NavBar from '../components/NavBar'
import EditProfile from '../components/EditProfile'
import { useSelector } from 'react-redux'
import UserCard from '../components/UserCard'

const Profile = () => {
  const user=useSelector(store=>store.user)
  return (
    <>
      {user &&
    <div>
      <EditProfile user={user}/>
    </div>
      }
    </>
  )
}

export default Profile