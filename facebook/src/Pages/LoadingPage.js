import React from 'react'
import './LoadingPage.css';
import Spinner from '../img/spinner.gif';


function LoadingPage() {
  return (
    <div className="loading__page__root">
      <img
      className="loading__page__spinner"
      src={Spinner}
      alt="Loading Page"
      />
    </div>
  )
}

export default LoadingPage
