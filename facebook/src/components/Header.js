import React, {useState, useEffect } from 'react'
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
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../extras/StateProvider.js';


function Header() {

  const [{user}, dispatch] = useStateValue();
  const [showExpand, setShowExpand] = useState(false);
  
  function handleExpand() {
    setShowExpand(!showExpand);
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
          <HomeIcon className="header__option__child" fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon className="header__option__child" fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon className="header__option__child" fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon className="header__option__child" fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon className="header__option__child" fontSize="large" />
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
            <div className="header__expand__profile header__expand__row">
              <Avatar src={user.photoURL}/>
              <div className="header__expand__info header__expand__col">
                <h4>{user.displayName}</h4>
                <h5> See your profile </h5>
              </div>
            </div>
            <div className="header__expand__profile header__expand__row">
              <FeedbackIcon />
              <div className="header__expand__info header__expand__col">
                <h4>Give feedback</h4>
                <h5> Help us improve the new Facebook </h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header
