import React, { useState, useEffect } from 'react';
import './App.css';

function Header(props){
  const showNav= {
    display: props.showTopNavMenu ? 'flex' : 'none'
  }
  const showMenuIcon = {
    display: props.showTopNavMenu ? 'none' : 'flex',
  }
  return (
     <>
       <div id="nav_container" style={showNav}>
         <nav id="navigation">{navMenuItems}</nav>
       </div>
       <span className="menu-icon" style={showMenuIcon}/>
     </>
  )
}

function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => { 
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => 
      window.removeEventListener("resize",updateDimensions);
   }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  const responsive = {
    showTopNavMenu: width > 1023
  }
  return (
    <>
      <Header showTopNavMenu={responsive.showTopNavMenu}/>
      {/* <Main /> */}
    </>
  )
  
  // return (
  //   <div className="App">
      
  //   </div>
  // );
}

export default App;
