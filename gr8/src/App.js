// This is for nav

import React, { useState, useEffect } from 'react'; 
import { HashRouter, Routes, Route } from 'react-router-dom'; 

// Import Components 

import Projects from './Projects'; 

const App = () => { 

  return (
    <>
    <HashRouter> 
        <Routes>
            
            <Route exact path="/" component={Projects} />

        </Routes>
    </HashRouter>
    </>
  );
} 



export default App;