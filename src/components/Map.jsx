import React from 'react';
import { ComposableMap, Geographies, Geography, } from 'react-simple-maps';
import { useEffect, useState } from 'react';
import './Map.css';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const Map = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch(geoUrl)
      .then(response => response.json())
      .then(data => setGeoData(data));
  }, []);

  if (!geoData) return <div>Loading...</div>;

  return (
    <ComposableMap>
      <Geographies geography={geoData}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography 
              key={geo.rsmKey} 
              geography={geo} 
              className='geography'
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
