import React from 'react'
import "./Feed.css";
import { Create } from '@mui/icons-material';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';


function Feed() {
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <Create />
                <form action="">
                    <input type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
            <InputOption Icon={SmartDisplayIcon} title='Video' color="#5F9B41"/>
            <InputOption Icon={EventNoteIcon} title='Event' color="C37D16"/>
            <InputOption Icon={CalendarViewDayIcon} title='Write Article' color="#E16745"/>
            </div>
        </div>

        <Post name='Ritu Raj' description='This is a test' message='Wow this works'/>
    </div>
  )
}

export default Feed