import React, { useState } from 'react';
import Map from './components/Map';
import Clock from './components/Clock';
import TimezoneSelect from './components/TimezoneSelect';
import './App.css';

function App() {
  const [timezone, setTimezone] = useState('UTC');

  return (
   <div className="app">
    <h1>World Clock App</h1>
    <Map /> 
    <TimezoneSelect onSelect={setTimezone} />
    <Clock timezone={timezone} />
   </div>
  );
}

export default App
