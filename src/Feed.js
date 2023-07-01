import React from 'react'
import "./Feed.css";
import { Create } from '@mui/icons-material';


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
            <InputOption />
            </div>
        </div>
    </div>
  )
}

export default Feed