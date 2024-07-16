import React, { useState, useEffect } from 'react';

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
      <h2>Current Time ({timezone}):</h2>
      <p>{time.toLocaleTimeString('en-US', { timeZone: timezone })}</p>
    </div>
  );
};

export default Clock;
