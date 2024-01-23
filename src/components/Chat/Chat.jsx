import React, { useEffect, useRef, useState } from 'react'
import './chat.css'
import axios from 'axios';
import BASEURL from '../../api/api';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';

function Chat({Tanlangan_user}) {
  const [Chats, setChats] = useState([])
  let ME = JSON.parse(localStorage.getItem('user'))
  const [Message, setMessage] = useState('')
  const [render, setrender] = useState(false)

  const Inpref = useRef()
  useEffect(() => {
    if(Tanlangan_user){
      get_chats()
    }
  }, [Tanlangan_user,render])
  

  function get_chats() {
    try {
      axios.get(BASEURL + "/chat").then((res) => {
        let filtered = res?.data?.filter((item)=>{
          return item.to_id == Tanlangan_user.id && item.from_id === ME.id || item.to_id == ME.id && item.from_id === Tanlangan_user.id
        })
        console.log(filtered);
        setChats(filtered);
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  function Send_chats() {
    if(Message === ""){
      alert("Iltimos inputni toldiring")
    }else{
      if(Tanlangan_user.id){
        try {
          let Data ={
            from_id: ME.id,
            to_id: Tanlangan_user.id,
            title: Message
          }
          axios.post(BASEURL + "/chat",Data).then((res) => {
            console.log(res.data);
            setrender(!render)
            setMessage('')
          });
        } catch (error) {
          console.log(error.message);
        }
      }else{
        alert("User tanlang")
      }
    }
  }

  // window.addEventListener("keydown",(e)=>{
  //     if(Tanlangan_user.name){
  //      if(Message!==""){
  //       if(e.key==="Enter"){
  //         Send_chats()
  //       }
  //      }
  //     }
  // })


  function generate_time(params) {
    let date = new Date(params)
    return "lastseen " + date.getHours()+ ":"+ date.getMinutes()
  }


  return (
    <div className='chat-container'>
      <nav className='navbar'>
      {Tanlangan_user.name ? <div className="nav-text-icons">
        <div className="nav-texts">
            <h2 className='spsh'>{Tanlangan_user.name}</h2>
            <h2 className='peoples'>{generate_time(Tanlangan_user.lastseen)}</h2>
          </div>
          <div className="nav-icons">
            <SearchIcon />
            <MoreVertIcon />
          </div>
        </div>: ""}
      </nav>
      <div className='chats-wrapper'>
        {
          Chats.map((item,index)=>(
            <div className={`chat-row ${item.from_id === ME.id ? 'is_mine' : "is_not_mine"} `}>
                <div className='chat-box' >
                  <p>{item.title}</p>
                </div>
                <img src={item.from_id === ME.id ? ME.avatar : Tanlangan_user.avatar} alt="" />
            </div>
          ))
        }
      </div>
      <div className='bottom-nav'>
        <input className='chat-input' ref={Inpref}  value={Message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='Message...' />
        <button className='bottom-btn'  onClick={Send_chats}><SendIcon/></button>
      </div>
    </div>
  )
}

export default Chat