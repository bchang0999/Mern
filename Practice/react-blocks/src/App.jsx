import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';


function App() {
  return (
    <div className="app">
      <Header />



      <div className="divtwo">
        <Navigation />
        <Main>
          <div className="top">
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
          <div className = "bottom">
            <Advertisement />
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;