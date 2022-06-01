import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Man from './components/Man.jsx';
import Woman from './components/Woman.jsx';

function App() {
  const [intro,setIntro] = useState(true)
  const [man,setMan] = useState(false)
  const [woman,setWoman] = useState(false)

  function turnOff(){
    setIntro(false)
    setMan(false)
    setWoman(false)
  }

  return (
    <div className="App">
      <Nav
      turnOff = {()=>turnOff()}
      setIntro={()=>setIntro(true)}
      setMan=  {()=>setMan(true)}
      setWoman={()=>setWoman(true)}
      
      />

      {intro&&<Header/>}
      {intro&&<Intro/>}
      {man&&<Man/>}
      {woman&&<Woman/>}


    </div>
  );
}

export default App;
