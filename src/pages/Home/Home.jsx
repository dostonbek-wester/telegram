import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../../components/Chat/Chat'
import Info from '../../components/Info/Info'
import './style.css'

function Home() {
  const [Tanlangan_user, setTanlangan_user] = useState({})
  console.log(Tanlangan_user)
  return (
    <div className='home-container'>
        <Sidebar setTanlangan_user={setTanlangan_user} />
        <Chat Tanlangan_user={Tanlangan_user} />
        <Info Tanlangan_user={Tanlangan_user} />
    </div>
  )
}

export default Home