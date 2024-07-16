import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';

const Clock = ({ timezone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <h2><FaClock />Current Time ({timezone}):</h2>
      <p>{time.toLocaleTimeString('en-US', { timeZone: timezone })}</p>
    </div>
  );
};

export default Clock;
