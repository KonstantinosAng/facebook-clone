import React, { useState, useEffect } from 'react'
import './Feed.css';
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender.js';
import Post from './Post.js';
import db from '../extras/firebase.js';


function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot=> (
      setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
    ))
  }, [])

  return (
    <div className="feed__root">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          userName={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  )
}

export default Feed
