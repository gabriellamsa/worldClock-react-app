import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import './Map.css';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
const Map = () => {
  const [geoData, setGeoData] = useState(null);
  const [tooltipContent, setTooltipContent] = useState("");

  useEffect(() => {
    fetch(geoUrl)
      .then(response => response.json())
      .then(data => setGeoData(data));
  }, []);

  return (
    <div className="map-container">
      <ComposableMap>
        {geoData && (
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map(geo => {
                const { NAME } = geo.properties;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className="geography"
                    onMouseEnter={() => {
                      setTooltipContent(NAME);
                      ReactTooltip.rebuild(); 
                    }}
                    onMouseLeave={() => setTooltipContent("")}
                    data-tip={NAME}
                  />
                );
              })
            }
          </Geographies>
        )}
      </ComposableMap>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
    </div>
  );
};

export default Map;
