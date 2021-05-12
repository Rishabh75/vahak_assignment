import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./section/header.js";
import Form from './Form/form';

function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => { 
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => 
      window.removeEventListener("resize",updateDimensions);
   }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width)
  }

  const responsive = {
    showTopNavMenu: width > 1023
  }
  return (
    <>
      <Header showTopNavMenu={responsive.showTopNavMenu}/>
      <div className="heading-text">
        <h1>Old Car Available</h1>
      </div>
      <hr className="heading-seprator"/>
      <Form />
    </>
  )
}

export default App;
