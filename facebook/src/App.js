import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import LoadingPage from './Pages/LoadingPage';
import { useStateValue } from './extras/StateProvider.js';
import { useEffect } from 'react';
import { auth } from './extras/firebase.js';
import { actionTypes } from './extras/reducer.js';
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {

  const [{user}, dispatch] = useStateValue();
  // eslint-disable-next-line
  const [_, loading] = useAuthState(auth);

  useEffect(() => {
    const authorization = auth.onAuthStateChanged((Auth) => {
      if (Auth) {
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
  }, [dispatch])

  if (loading) {
    return (
      <LoadingPage />
    )
  }

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
