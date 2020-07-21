import React from 'react';
import './css/App.css';

import Content from './components/content';
import SideBar from './components/side-bar';
function App() {

  return (
    <div className="App bg-gray-900 h-screen w-full flex flex-col">
      <SideBar show={false} />
      <Content/>
    </div>
  );
}

export default App;
