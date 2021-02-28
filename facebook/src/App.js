import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Feed from './components/Feed.js';
import Widgets from './components/Widgets.js';
import Login from './components/Login';
import { useStateValue } from './extras/StateProvider.js';


function App() {

  const [{user}, dispatch] = useStateValue();

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
