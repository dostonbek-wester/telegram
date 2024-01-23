import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../../components/Chat/Chat'
import Info from '../../components/Info/Info'
import './style.css'
import {useNavigate} from 'react-router-dom'

function Home() {
  const [Tanlangan_user, setTanlangan_user] = useState({})
  let ME = Boolean(JSON.parse(localStorage.getItem('user')))
  console.log(Tanlangan_user)
  const navigate = useNavigate()
  useEffect(()=>{
    if(!ME){
      navigate('/login')
    }
  },[])
  return (
    <div className='home-container'>
        <Sidebar setTanlangan_user={setTanlangan_user} />
        <Chat Tanlangan_user={Tanlangan_user} />
        <Info Tanlangan_user={Tanlangan_user} />
    </div>
  )
}

export default Home