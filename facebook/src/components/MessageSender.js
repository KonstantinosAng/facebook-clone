import React, { useState } from 'react'
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../extras/StateProvider.js';
import db from '../extras/firebase.js';
import firebase from 'firebase';

function MessageSender() {

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // eslint-disable-next-line
  const [{user}, dispatch] = useStateValue();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    db.collection('posts').add({
      image: imageUrl,
      message: input,
      profilePic: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName
    });

    setInput('');
    setImageUrl('');
  }

  return (
    <div className="messageSender__root">
      <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form>
          <input value={input} onChange={(e)=>setInput(e.target.value)} className="messageSender__input" placeholder={`What's on your mind, ${user.displayName}?`}/>
          <input value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder="image URL (Optional)" />
          <button onClick={handleSubmit} type="submit"> Hidden submit </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{color: "red"}}/>
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{color: "green"}}/>
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{color: "orange"}}/>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
