import React from 'react';

const timezones = [
  'UTC',
  'America/New_York',
  'Europe/London',
  'Asia/Tokyo',
  'Australia/Sydney',
];

const TimezoneSelect = ({ onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {timezones.map((tz) => (
        <option key={tz} value={tz}>
          {tz}
        </option>
      ))}
    </select>
  );
};

export default TimezoneSelect;
