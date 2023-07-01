import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'


export default function Post({ name, description, message, photoUrl}) {
  return (
    <div className='post'>
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>Ritu Raj</h2>
                    <p>Description</p>
                </div>
            </div>

            <div className="post__body">
                <p>Message here!</p>
            </div>
    </div>
  )
}
