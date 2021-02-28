import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Feed from './components/Feed.js';
import Widgets from './components/Widgets.js';
import Login from './components/Login';
import { useStateValue } from './extras/StateProvider.js';
import { useEffect } from 'react';
import { auth } from './extras/firebase.js';
import { actionTypes } from './extras/reducer.js';


function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const authorization = auth.onAuthStateChanged((Auth) => {
      if (Auth) {
        console.log(Auth);
        dispatch({
          type: actionTypes.SET_USER,
          user: Auth
        })
      } else {
        dispatch({
          type: actionTypes.UNSET_USER
        })
      }
    })
    return authorization;
  }, [])

  return (
    <div className="app">
      {!user ? <Login /> : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
