import React from 'react'
import './Tweetbox.css';
import Button  from "@mui/material/Button";


function Tweetbox() {
  return (
    <div className='Tweetbox'>
        <form>
            <div className='Tweetbox__input'>
            <input placeholder="What's Happening ?" type='text'></input>
            </div>
            <Button className='Tweetbox__tweetbutton'>Tweet</Button>
        </form>
     
    </div>
  )
}

export default Tweetbox