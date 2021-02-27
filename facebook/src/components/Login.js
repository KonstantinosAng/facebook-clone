import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core';

function Login() {
  
  const signIn = () => {

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
