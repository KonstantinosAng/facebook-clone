import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
