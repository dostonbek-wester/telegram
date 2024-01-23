import React from 'react'
import './info.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

function generate_time(params) {
  let date = new Date(params)
  return "lastseen " + date.getHours()+ ":"+ date.getMinutes()
}

function Info({Tanlangan_user}) {
  return (
    <div className='info-container'>
      <h2 className='info-group'>Information</h2>
     {Tanlangan_user.name ? <div className="info-tepa">
        <img className='info-avatar' src={Tanlangan_user.avatar} alt="" />
        <div className="info-texts">
          <h2 className='info-name'>{Tanlangan_user.name}</h2> 
          <h2 className='info-time'>{generate_time(Tanlangan_user.lastseen)}</h2>
       </div>
      </div> : ""}
      {Tanlangan_user.name ? <div className="number-bio">
        <div className="number-bio-tepa">
          <InfoOutlinedIcon className='number-bio-tepa-icon' />
          <div className="number-bio-texts">
            <p className='number-bio-phone'>{Tanlangan_user.phone}</p>
            <p className='telephone'>Telephone</p>
            <p className='number-bio-username'>@{Tanlangan_user.bio}</p>
            <p className='username'>username</p>
          </div>
        </div>
        <div className="number-bio-pas">
          <NotificationsOutlinedIcon className='number-bio-pas-icon' />
          <p className='notifications'>Notifications</p>
        </div>
      </div> : ""}
    </div>
  )
}

export default Info