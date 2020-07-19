import React from 'react';
import './css/App.css';
import {Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Link to="/setting">
        <button>setting</button>
      </Link>
      <Link to="/home">
        <button>home</button>
      </Link>
    </div>
  );
}

export default App;
