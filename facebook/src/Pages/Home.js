import React from 'react'
import './Home.css';
import Header from '../components/Header.js';
import Sidebar from '../components/Sidebar.js';
import Feed from '../components/Feed.js';
import Widgets from '../components/Widgets.js';

function Home() {
  return (
    <div className="home__root">
    <Header />
    <div className="home__body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
    </div>
  )
}

export default Home
