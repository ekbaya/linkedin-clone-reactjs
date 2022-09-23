import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
 const recentItem = (topic) =>(
   <div className='sidebar_recentItem'>
    <span className='sidebar_hash'>#</span>
    <p>{topic}</p>
   </div>
 )


  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src='https://images.unsplash.com/photo-1663858461640-00aab2bcd8a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80' alt=''/>
        <Avatar className='sidebar_avatar'/>
        <h2>Elias Baya</h2>
        <h4>Eliasbaya1223@gmail.com</h4>
      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
         <p>Who viewed you</p>
         <p className='sidebar_statNumber'>
            2,543
         </p>
        </div>
        <div className='sidebar_stat'>
        <p>Views on post</p>
         <p className='sidebar_statNumber'>
            2,543
         </p>
        </div>
      </div>

      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software engineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar