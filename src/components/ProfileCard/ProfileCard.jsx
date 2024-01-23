import React, { useEffect, useState } from 'react'
import './profile.css'
import axios from 'axios'
import BASEURL from '../../api/api'

function ProfileCard({item,setTanlangan_user,Chats}){
  let ME = JSON.parse(localStorage.getItem('user'))


  function generate_time(params) {
    let date = new Date(params)
    return + date.getHours()+ ":"+ date.getMinutes()
  }
 

  function get_speacial_chat(params) {
    let filtered = Chats.filter((item)=>{
      return item.to_id == params.id && item.from_id === ME.id || item.to_id == ME.id && item.from_id === params.id
    })
    return filtered[filtered.length - 1]?.title?.slice(0,40)  || "Start to message with " + params.name
  }

  return (
    <div className='profile-container'  onClick={()=>setTanlangan_user(item)}>
      <button className='profile-btn'>
        <img className='avatar' src={item.avatar} alt="" />
        <div className="name-message">
          
            <div className="rows1">
              <h2 className='name-div'>{item.name}</h2>
              <span>{generate_time(item.lastseen)}</span>
            </div>
            <h3 className='last-message'>{get_speacial_chat(item)}</h3>
        </div>
      </button>
    </div>
  )
}

export default ProfileCard