import React, { useState } from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../extras/StateProvider.js';
import { actionTypes } from '../extras/reducer.js';


function Header() {

  const [{user}, dispatch] = useStateValue();
  const [showExpand, setShowExpand] = useState(false);
  
  function handleExpand() {
    setShowExpand(!showExpand);
  }

  function handleLogOut() {
    dispatch({
      type: actionTypes.UNSET_USER
    })
  }

  return (
    <div className="header__root">
      <div className="header__left">
        <img
         onClick={()=>window.location.reload()}
         className="header__left__image"
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
         alt="Facebook logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon onClick={handleExpand}/>
        </IconButton>
          <div className={`header__expand ${showExpand?"show__expand":"hide__expand"}`}>
            <div className="header__expand__profile header__expand__row header__expand__first__row">
              <Avatar className="header__icon__avatar" src={user.photoURL}/>
              <div className="header__expand__info header__expand__col">
                <h4>{user.displayName}</h4>
                <h5> See your profile </h5>
              </div> 
            </div>
            <div className="header__expand__profile header__expand__row header__expand__first__row">
              <FeedbackIcon className="header__icon"/>
              <div className="header__expand__info header__expand__col">
                <h4>Give feedback</h4>
                <h5> Help us improve the new Facebook </h5>
              </div>  
            </div>
            <div className="header__expand__profile header__expand__row">
              <SettingsIcon className="header__icon"/>
              <h4>Settings & privacy</h4>
            </div>
            <div className="header__expand__profile header__expand__row">
              <HelpIcon className="header__icon"/>
              <h4>Help & support</h4>
            </div>
            <div className="header__expand__profile header__expand__row">
              <Brightness2Icon className="header__icon" style={{transform: "rotate(180deg)"}} />
              <h4>Display & accessibility</h4>
            </div>
            <div onClick={handleLogOut} className="header__expand__profile header__expand__row">
              <MeetingRoomIcon className="header__icon"/>
              <h4>Log out</h4>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header
