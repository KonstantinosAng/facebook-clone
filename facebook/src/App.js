import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
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
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
