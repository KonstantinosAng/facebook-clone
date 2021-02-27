import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Feed from './components/Feed.js';
import Widgets from './components/Widgets.js';
import Login from './components/Login';

function App() {
  const user = null;
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
