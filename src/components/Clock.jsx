import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';

const Clock = ({ timezone }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: timezone }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: timezone }));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="clock">
      <h2><FaClock /> Current Time ({timezone}):</h2>
      <p>{time}</p>
    </div>
  );
};

export default Clock;
