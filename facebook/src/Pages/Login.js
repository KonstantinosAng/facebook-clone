import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../extras/firebase.js';
import { actionTypes } from '../extras/reducer.js';
import { useStateValue } from '../extras/StateProvider.js';


function Login() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  
  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
    })
    .catch((error) => alert(error.message));
  }
  
  return (
    <div className="login__root">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
        <Button className="login__button" type="submit" onClick={signIn}>Sign In</Button>
      </div>
    </div>
  )
}

export default Login
