import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import './Post.css';
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Post() {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar>
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Utkarsh {" "}
              <span>
                <VerifiedIcon className='post__badge'></VerifiedIcon> @ugjss
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>THis is A TWITTER CLONE</p>
          </div>
        </div>
        <img src="https://media3.giphy.com/media/65ATdpi3clATdpi3clAdjomZ39/giphy.gif" alt=""/>
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon>
          <RepeatIcon fontSize='small'></RepeatIcon>
          <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon>
          <PublishIcon fontSize='small'></PublishIcon>
        </div>
      </div>
      <h2></h2>
    </div>
  )
}

export default Post