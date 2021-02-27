import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender.js';
import Post from './Post.js';

function Feed() {
  return (
    <div className="feed__root">
      <StoryReel />
      <MessageSender />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
