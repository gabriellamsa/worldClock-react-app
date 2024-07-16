import React, { useState } from 'react';
import Map from './components/Map';
import Clock from './components/Clock';
import TimezoneSelect from './components/TimezoneSelect';
import { FaGlobe, FaClock } from 'react-icons/fa';
import './App.css';

function App() {
  const [timezone, setTimezone] = useState('UTC');

  return (
   <div className="app">
    <header className="header">
      <h1><FaGlobe />World Clock App</h1>
    </header>
    <main className="main">
      <Map /> 
      <div className="controls">
        <TimezoneSelect onSelect={setTimezone} />
        <Clock timezone={timezone} />
      </div>
    </main>
   </div>
  );
}

export default App
