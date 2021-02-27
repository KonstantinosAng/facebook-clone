import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Feed from './components/Feed.js';
import Widgets from './components/Widgets.js';


function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? <h1>Login</h1> : (
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
