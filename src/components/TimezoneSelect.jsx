import React from 'react';

const timezones = [
  { value: 'UTC', label: 'UTC' },
  { value: 'America/New_York', label: 'ET (Eastern Time)' },
  { value: 'America/Chicago', label: 'CT (Central Time)' },
  { value: 'America/Denver', label: 'MT (Mountain Time)' },
  { value: 'America/Los_Angeles', label: 'PT (Pacific Time)' },
  { value: 'America/Sao_Paulo', label: 'BRT (Brasília Time)' },
  { value: 'Europe/London', label: 'GMT/BST (London)' },
  { value: 'Europe/Berlin', label: 'CET/CEST (Berlin)' },
  { value: 'Europe/Moscow', label: 'MSK (Moscow Time)' },
  { value: 'Africa/Johannesburg', label: 'SAST (South Africa)' },
  { value: 'Asia/Dubai', label: 'GST (Gulf Standard)' },
  { value: 'Asia/Kolkata', label: 'IST (India Standard)' },
  { value: 'Asia/Shanghai', label: 'CST (China Standard)' },
  { value: 'Asia/Tokyo', label: 'JST (Japan Standard)' },
  { value: 'Australia/Sydney', label: 'AEST/AEDT (Sydney)' },
];

const TimezoneSelect = ({ onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {timezones.map((tz) => (
        <option key={tz.value} value={tz.value}>
          {tz.label}
        </option>
      ))}
    </select>
  );
};

export default TimezoneSelect;
