import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';

/*Github sync check*/
export default function Sidebar() {
  const recentItem= (topic) => (
    <div className="sidebar__recentItem">
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  ); /* not a component rather a function to generate hashtags*/

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src='data:image/jpeg;base64,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' alt=''/>
            <Avatar className='sidebar__avatar' />
            <h2>Ritu Raj</h2>
            <h4>Rituraj@..com</h4>
        </div>
        <div className="sidebar__stats">

            <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">5464</p>
            </div>

            <div className="sidebar__stat">
            <p>Views on Post</p>
            <p className="sidebar__statNumber">3397</p>
            </div>

        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('reactjs')}
          {recentItem('programming')}
          {recentItem('devOps')}
          {recentItem('AI & deep learning')}
          {recentItem('trade')}
        </div>
    </div>
  )
}
