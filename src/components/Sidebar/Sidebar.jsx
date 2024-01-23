import React, { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios'
import BASEURL from '../../api/api'
import ProfileCard from '../ProfileCard/ProfileCard'
import Menu from '../Menu/menu'
import { Search } from '@mui/icons-material'


function Sidebar({ setTanlangan_user }) {
  const [users, setusers] = useState([])
  const [searched, setsearched] = useState([]);
  let ME = JSON.parse(localStorage.getItem('user'))
  const [Chats, setChats] = useState([])

  useEffect(() => {
    get_users()
  }, [])

  useEffect(() => {
    get_chats()
  
}, [])


function get_chats() {
  try {
    axios.get(BASEURL + "/chat").then((res) => {
      setChats(res.data)
    });
  } catch (error) {
    console.log(error.message);
  }
}


  function get_users() {
    try {
      axios.get(BASEURL + "/users").then((res) => {
        console.log(res.data)
        setusers(res.data)
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  function Search(inp) {
    console.log(inp)
    let filterd = users.filter((item) => {
      return item.name.toLowerCase().includes(inp.toLowerCase()) || item.username.toLowerCase().includes(inp.toLowerCase())
    })

    setsearched(filterd)

  }
  return (
    <div className='sidebar-container'>
      <div className="menu">
        <Menu />
      </div>
      <div className="sidebar-bx">
        <div className='sidebar-div'>
          <input onKeyUp={(e) => Search(e.target.value)} className='sidebar-input' type="text" placeholder='Search' />
        </div>
        <div className="users-wrapper">

          {searched.length === 0 ? users.map((item, index) => {
            if (item.phone === ME.phone && item.password === ME.password) {
              return null
            } else {
              return <ProfileCard  Chats={Chats} setTanlangan_user={setTanlangan_user} key={index} item={item} />
            }
          }) :
            searched.map((item, index) => {
              if (item.phone === ME.phone && item.password === ME.password) {
                return null
              } else {
                return <ProfileCard Chats={Chats} setTanlangan_user={setTanlangan_user} key={index} item={item} />
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar