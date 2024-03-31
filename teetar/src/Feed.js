import React from 'react'
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
function Feed() {
  return (
    <div className='Feed'>

        {/* Header*/}

        <div className='Feed_header'>
        <h2>Home</h2>
        </div>

        {/*TweetBox*/}
        <Tweetbox />

        <Post/>
        <Post/>
        <Post/>
        <Post/>
        {/*Post*/}
        {/*Post*/}
        {/*Post*/}
        {/*Post*/}
        {/*Post*/}
        {/*Post*/}
        
    </div>
  )
}

export default Feed