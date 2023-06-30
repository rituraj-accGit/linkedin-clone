import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (//custom search bar & material UI icon for linkedIn
    <div className='header'>
        <div className="header_left"> 
            <img src="https://cdn.pixabay.com/photo/2017/08/23/22/59/linked-in-2674741_1280.png" alt="resetTester" />
            <div className="header_search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />

            <HeaderOption avatar="https://picsum.photos/id/177/200/300" title="me" />
        </div>
    </div>
  )
}

export default Header