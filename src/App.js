import React from 'react';
import Content from './components/content';
import './css/App.css';
import { sidebarContext } from './Context/SidebarContext';
import { animated, useSpring } from 'react-spring';

function App() {

  const [sidebarToggled, setSidebarToggled] = React.useState(true);
  const smallScreen = window.innerWidth < 600 | false;

  const animatedProps = useSpring({to:{
    marginLeft: !sidebarToggled ? "-16rem" : "0rem",  
    marginRight: sidebarToggled && smallScreen ? "-16rem" : "0rem"
  }})

  return (
      <sidebarContext.Provider value={{sidebarToggled,setSidebarToggled}}>
          <animated.div style={animatedProps} velocity="1">
            <div className="App bg-gray-900 h-screen flex flex-row-reverse" >
                <Content sidebarToggle={ () => (setSidebarToggled(!sidebarToggled)) } />
            </div>
          </animated.div>
      </sidebarContext.Provider>
  );
}

export default App;
